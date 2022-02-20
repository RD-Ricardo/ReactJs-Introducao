import React, { Component } from 'react';

export default class Membro extends Component{

    constructor(props){
        super(props)
        this.state ={
            nome: props.nome
        }


        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        let state = this.state;
        state.nome = 'Ricardo';
        this.setState(state)
    }
    render(){
        return(
            <div>
                <h2>Bem vindo {this.state.nome}</h2>

                <button onClick={this.entrar}>
                    Entrar como ricardo
                </button>
                <button onClick={()=>{this.setState({nome:''})}}>
                   Sair
                </button>
            </div>
        );
    }
}