import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

import minhaFoto from './images/minhaFoto.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {minhaFoto} 
          nome="Paulo Viana" 
          descricao="Oi, sou o Paulo Viana. Sou estudante do curso Web Fullstack da Labenu. Atualmente sou
          design e músico e estou em busca de me tornar um desenvolvedor!"
        />

        <div className="page-section-container">
         <CardPequeno
          icone1="https://cdn.icon-icons.com/icons2/122/PNG/512/email_socialnetwork_20049.png"         
          email="paulofv1612@gmailll.com.br"
          icone2="https://image.flaticon.com/icons/png/512/9/9275.png"
          endereco="Endereço: Avenida Brasil, n°174, Maraponga - Fortaleza-CE"
         />        
      </div>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.fortbrasil.com.br/sites/all/themes/framework/logo.png" 
          nome="FORTBRASIL" 
          descricao="Designer Gráfico - Marketing!" 
        />
        
        <CardGrande 
          imagem="https://static.wixstatic.com/media/d524ea_88d0abcbcf9047f99ea7e42b7e69d67c~mv2.png/v1/fill/w_251,h_58,al_c,q_85,usm_0.66_1.00_0.01/Logomarca-Bomache-2018.webp" 
          nome="BOMACHE" 
          descricao="Designer Gráfico - Criação de estampas para camisas, tags, etiquetas e etc!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      
    </div>
  );
}

export default App;
