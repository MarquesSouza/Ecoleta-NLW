import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';

const SearchResults =()=>{
    return(
        <div id="page-search-results">
        <header>
            <img src={logo} alt="Ecoleta" />
            <Link to="/">
                <FiArrowLeft />
                  Voltar para home
            </Link>
        </header>
        <main>

    
        <h4>
            <strong>total pontos</strong>
            encontrados
        </h4>

        <div class="cards">


           
                <div class="card">
                    <img src="{{ place.image }}" alt="{{ place.name }}"/>
                    <h1>place.name </h1>
                    <h3>place.items </h3>
                    <p>
                         place.city ,  place.state 
                        <br/>
                         place.address 
                        <br/>
                         place.address2 
                    </p>
                </div>

        
        </div>
    
   
        <h4><strong>Nenhum</strong> local encontrado</h4>
    
   
        
    </main>
        </div>
    );
};
export default SearchResults;