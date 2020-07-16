import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../../assets/logo.svg';

const Home =()=>{
    return (
        <div id="page-home">

        <div class="content">
        <header>
            <img src={logo} alt="Logomarca" />
            <Link to="/create-point">
                <span>
                    <FiLogIn />
                </span>
                Cadastre um ponto de coleta
            </Link>
        </header>

        <main>
            <h1>Seu marketplace de coleta de resíduos</h1>
                
            <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
        
            
        </main>
         </div>
         </div>
        );
};

export default Home;