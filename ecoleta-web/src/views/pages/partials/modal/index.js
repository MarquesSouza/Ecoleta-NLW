import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import Search from '../../../../assets/search.svg';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const ReactModal=()=>{
    const [display, setDisplay] = useState(false);
    
    return(
        <button onClick={ () => setDisplay(true) }> <span></span><strong>Pesquisar pontos de coleta</strong> </button>
        
        <Modal isOpen = {display} shouldCloseOnOverlayClick = {false} onRequestClose={ () => setDisplay(false) }>
        
        <div id="modal">
         
            <div class="content">
        <div class="header">
            <h1>Pontos de Coleta</h1>
            <button onClick={ () => setDisplay(false) }>Fechar</button>
        </div>
        <form action="/search">
            <label for="search">Cidade</label>
            <div class="search field">
                <input 
                type="text" 
                name="search"
                placeholder="Pesquise por cidade"
                />
                
                    <img src={Search} alt="Buscar" />
                            </div>
        </form>
            </div>
        </div>
        </Modal>   
    );
};
export default ReactModal;