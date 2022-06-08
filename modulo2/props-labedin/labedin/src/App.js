import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno.js/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/steam.jpg';





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="victor" 
          descricao="Oi, eu sou o victor. Sou aluno da Labenu,tenho 24 anos e adoro jogar bola."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/512/104/104069.png"
        nome="email:"
        up="victorsantosoliveira98@gmail.com"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/512/17/17589.png"
        nome="Endereço:"
        up="Brazil"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Programação!" 
        />
        
        <CardGrande 
          imagem="https://images-na.ssl-images-amazon.com/images/I/6111kA98OPL.png" 
          nome="NASA" 
          descricao="Meu sonho trabalhar na NASA." 
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
