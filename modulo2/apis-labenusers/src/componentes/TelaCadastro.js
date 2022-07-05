import { render } from "@testing-library/react";
import React from "react";



export default class TelaCadastro extends React.Component{
    state={
        nome: "",
        email: ""
    }
    leNome = (event) => {
        this.setState({nome: event.target.value})
    }
    leEmail = (event) => {
        this.setState({email: event.target.value})
    }
    fazerCadastro = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body = {
        name: this.state.nome,
        email: this.state.email
       }
       // axios.post(url,body,{
      //      headers: {
     //           Authorization:"victor-santos"
      //      }
     //   })
        .then((res) =>{
            console.log(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>ir Para Lista de usuario</button>
                <h2>Cadastro</h2>
                <input placeholder="nome"
                 value={this.state.nome}
                 onChange={this.leNome}
                 />
                <input placeholder="email"
                value={this.state.email}
                onChange={this.leEmail}/>
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}