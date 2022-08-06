import React, {useState} from 'react';
import './App.css';
import card from './componets/card';

const App = () => {
  const [usuario,setUsuario] = useState("")
  const [menssagem,setMensaagem] = useState("")
  const [listaMenssagem,setlistaMenssagem] = useState ([])

  const mudaUsuario = (event) => {
    setUsuario(event.target.value)
  }
  const mudaMenssagem = (event) => {
    setMensaagem(event.target.value)
  }

  const valorAtual = (e) => {
    const envio = {
      usuario : usuario,
      menssagem : menssagem
     }
      setlistaMenssagem([...listaMenssagem,envio])
      console.log(envio)
  }
  
  
  return (
    <div>
      <h1>whatsLab</h1>
      <input value={usuario} onChange={mudaUsuario} placeholder='usuario'/>
      <input value={menssagem} onChange={mudaMenssagem} placeholder='menssagem'/>
      <button onClick={valorAtual}>enviar</button>
    </div>
  );
}

export default App;
