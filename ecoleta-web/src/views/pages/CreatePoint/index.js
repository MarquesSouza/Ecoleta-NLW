import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';

const CreatePoint =()=> {
    
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowLeft />
                      Voltar para home
                </Link>
            </header>
        <form>
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
                        required="required" />
                </div>
            </div>

            <div class="field-group">
                <div class="field">
                    <label for="address">Endereço</label>
                    <input type="text" name="address" required="required" />
                </div>
                <div class="field">
                    <label for="address2">Número/Complemento</label>
                    <input type="text" name="address2" required="required" />
                </div>
            </div>

            <div class="field-group">
                <div class="field">
                    <label for="state">Estado</label>
                    <select name="uf" required="required">
                        <option value="">Selecione o Estado</option>
                    </select>

                    <input type="hidden" name="state" />
                </div>

                <div class="field">
                    <label for="city">Cidade</label>
                    <select name="city" disabled="disabled" required="required">
                        <option value="">Selecione a Cidade</option>
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
                <li data-id="Lâmpadas">
                    <img src="#" alt="Lâmpadas" />
                    <span>Lâmpadas</span>
                </li>

                <li data-id="Pilhas e Baterias">
                    <img src="#" alt="Pilhas e Baterias" />
                    <span>Pilhas e Baterias</span>
                </li>

                <li data-id="Papéis e Papelão">
                    <img src="#" alt="Papéis e Papelão" />
                    <span>Papéis e Papelão</span>
                </li>

                <li data-id="Resíduos Eletrônicos">
                    <img src="#" alt="Resíduos Eletrônicos" />
                    <span>Resíduos Eletrônicos</span>
                </li>

                <li data-id="Resíduos Orgânicos">
                    <img src="#" alt="Resíduos Orgânicos" />
                    <span>Resíduos Orgânicos</span>
                </li>

                <li data-id="Óleo de Cozinha">
                    <img src="#" alt="Óleo de Cozinha" />
                    <span>Óleo de Cozinha</span>
                </li>
            </div>

            <input type="hidden" name="items" />

        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
    </form>
    </div>
    );
};

export default CreatePoint;
