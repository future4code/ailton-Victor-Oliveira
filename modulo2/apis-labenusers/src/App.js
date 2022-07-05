import React from "react";
import TelaCadastro from "./componentes/TelaCadastro";
import TelaListaUsuario from "./componentes/TelaListaUsuario";

class App extends React.Component{
  state = {
    telaAtual: "cadastro"
  }
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuario irParacadastro={this.irParacadastro}/>
        default:
          return <div>error</div>  
    }
  }
  irParacadastro = () => {
    this.setState({telaAtual: "cadastro"}) 
  }
  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }
  render(){
    return (
    <div>
      {this.escolheTela()}
    </div>
  );
  }
}

export default App;
