import React from "react";

export default class TelaListaUsuario extends React.Component{
    render(){
        return(
            <div>
                 <button onClick={this.props.irParacadastro}>ir Para Tela Cadastro</button>
                <h2>Lista de usuarios</h2>
            </div>
        )
    }
}