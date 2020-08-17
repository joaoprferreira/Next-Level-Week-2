import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return(
        <article className='teacher-item'>
             
        <header>
          <img src="https://avatars3.githubusercontent.com/u/49590645?s=460&u=fb98ccccaededc1be18aded0d01cabf8edd01d9b&v=4" alt="João Pedro "/>
          <div>
             <strong>João Pedro Ferreira</strong>
             <span>Desenvolvimento web</span>
          </div>
        </header>

        <p>
        permanecendo essencialmente inalterado. Ele foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, 
        <br/> <br/>
        com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum.
        </p>

       <footer>
          <p> Preço/hora
             <strong>R$ 50,00</strong>
          </p>

          <button type='button'>
             <img src={whatsappIcon} alt="whatsapp"/>
             Entrar em contato
          </button>

       </footer>
     </article>
    )
}

export default TeacherItem;