import React,{ useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory }from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import './styles.css';

import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiArrowLeft } from 'react-icons/fi';

import axios from 'axios';
import api from '../../../services/api';

/*interface Item {
    id: number;
    title: String;
    image_url:String;
}

interface IBGEUFResponse {
    sigla: String;
}
interface IBGECityResponse{
    nome:string;
}*/

const CreatePoint =()=> {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        whatsapp:'',
    });
    const [initialPosition, setInitialPosition] = useState()
    const [ufs,setUfs]= useState()
    const [cities,setCities]= useState()
    const [items,setItems]= useState()
    
    const[selectedUf, setSelectedUf]=useState('0')
    const[selectedCity,setSelectedCity]= useState()
    const[selectedItems,setSelectedItems]=useState()

    const[selectedPosition,setSelectedPosition]=useState()
    
    const history = useHistory();
    
    useEffect(()=>{
        api.get('/items').then((response)=>{
            setItems(response.data);
        })
    },[])
    useEffect(()=>{
        axios.get(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
        ).then((response)=>{
            const ufInitials= response.data.map((uf)=>uf.sigla);
            setUfs(ufInitials);
        })
    },[]);
    useEffect(()=>{
        if(selectedUf==='0'){
            return;
        }
        axios.get(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
        ).then((response)=>{
            const cityName= response.data.map((city)=>city.nome);
            setCities(cityName);
        })
    },[selectedUf]);
    function handleSelectUf(event){
        const uf= event.target.value;
        setSelectedUf(uf);
    }
    function handleSelectCity(event){
        const city=event.target.value;
        setSelectedCity(city);
    }
    function handleMapClick(event){
        setSelectedPosition([event.latlng.lat, event.latlng.lng]);
    }
    function handleInputChange(event){
        const {name, value}=event.target;
        setFormData({...formData,[name]:value});
    }
    function handleSelectItem(id){
        const alreadySelected=selectedItems.findIndex((item)=>item===id);
        if(alreadySelected>=0){
            const filteredItems=selectedItems.filter((item)=>item!==id);
            setSelectedItems(filteredItems);
        }else{
            setSelectedItems([...selectedItems,id]);
        }
    }
    async function handleSubmit(event){
        event.preventDefault();
        const {name,email,whatsapp} = formData;
        const uf = selectedUf;
        const city= selectedCity;
        const [latitude,longitude]=selectedPosition;
        const items=selectedItems;

        const data={
            name,
            email,
            whatsapp,
            uf,
            city,
            latitude,
            longitude,
            items,
        };
        await api.post('/points',data);
        alert('Ponto de Coleta Criado')
        history.push('/');
    }
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowLeft />
                      Voltar para home
                </Link>
            </header>
        <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Cadastro do ponto de coleta</h1>

        <fieldset>
            <legend>
                <h2>Dados da entidade</h2>
            </legend>


            <div class="field-group">
                <div class="field">
                    <label for="name">Nome da entidade</label>
                    <input type="text" name="name" required="required" />
                </div>
                <div class="field">
                    <label for="name">Imagem da entidade</label>
                    <input 
                        type="url" 
                        name="image" 
                        placeholder="http://"
                        required="required" 
                       
                        />
                </div>
            </div>

            <div class="field-group">
                <div class="field">
                    <label for="email">E-mail</label>
                    <input type="text" name="email" required="required" onChange={handleInputChange} />
                </div>
                <div class="field">
                    <label for="whatsapp">WhatsApp</label>
                    <input type="text" name="whatsapp" required="required" onChange={handleInputChange}/>
                </div>
            </div>
            <div class="field-group">
            <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedPosition} />
          </Map>
            </div>
            <div class="field-group">
                <div class="field">
                    <label htmlFor="state">Estado</label>
                    <select 
                    name="uf" id="uf"
                    value={selectedUf}
                    onChange={handleSelectUf}
                    required="required">
                        <option value="">Selecione o Estado</option>
                        {ufs.map((uf)=>(
                            <option key={uf} value={uf}>{uf}</option>
                        ))}
                    </select>

               </div>

                <div class="field">
                    <label htmlFor="city">Cidade</label>
                    <select 
                    name="city" 
                    id="city"
                    value={selectedCity}
                    onChange={handleSelectCity}
                    required="required">
                        <option value="">Selecione a Cidade</option>
                        {cities.map((city)=>(
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

        </fieldset>
        
        <fieldset>
            <legend>
                <h2>Itens de coleta</h2>
                <span>Selecione um ou mais itens abaixo</span>
            </legend>

            <div class="items-grid">
                {items.map((item)=>(
                    <li 
                        key={item.id}
                        className={selectedItems.includes(item.id) ? 'selected' : ''}
                        onClick={()=>handleSelectItem(item.id)}
                    >
                    <img src={item.image_url} alt={item.title} />
                    <span>{item.title}</span>
                </li>
                ))}
            </div>

        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
    </form>
    </div>
    );
};

export default CreatePoint;
