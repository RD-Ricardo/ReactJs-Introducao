// import React , { Component }from 'react';
// //Propriedades
// // const BemVindo = (props)=> <h2>Bem vindo {props.nome} {props.idade}</h2>
// // const Equipe = (props) =>{
// //     return (
// //         <div>
// //             <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
// //         </div>
// //     );
// // }


// // const Sobre = (props) =>{
// //     return (
// //         <div>
// //             <h1>Olá sou o a {props.nome}</h1>
// //             <h1>Cargo:{props.cargo}</h1>
// //         </div>
// //     );
// // }

// class Equipe extends Component
// {
//     render(){
//         return (
//             <div>
//                <Sobre nome={this.props.nome}
//                 idade={this.props.idade}
//                 cargo={this.props.cargo}/>
//             </div>
//         );
//     }
// }

// class Sobre extends Component
// {
//     render(){
//         return (
//             <div>
//                 <h2>olá sou o {this.props.nome} </h2>
//                 <h2>Cargo: {this.props.cargo} </h2>
//                 <h2>Idade: {this.props.idade} </h2>
//             </div>
//         );
//     }
// }


// export default function App(){
//     return(
//         <div>
//            <h1>Conheça nossa equipe</h1>
//            <Equipe nome="Ricardo" cargo="dev backend" idade="24"/>
//         </div>
//     );
// }




    // constructor(props){
    //     super(props);
    //     this.state = {
    //         nome: 'Ricardo',
    //         contador : 0
    //     };


    //     this.aumentar = this.aumentar.bind(this);
    //     this.diminuir = this.diminuir.bind(this);
    // }

    // aumentar(){
    //     let state  = this.state;
    //     state.contador += 1;
    //     this.setState(state);
    // }

    // diminuir(){
    //     let state = this.state;
    //     if(state.contador === 0){
    //         return;
    //    }
    //     state.contador -=1;

        
    //     this.setState(state);
    // // }

    // constructor(props) {
    //     super(props)
    //     this.state ={
    //         hora: '00:00:00'
    //     };
    // }
    // // //Quando a aplicação se iniciar
    // // componentDidMount(){
    // //     setInterval(()=>{
    // //         this.setState({hora: new Date().toLocaleTimeString()})
    // //     },1000)
    // // }
    // // //Quando O STATE estiver sendo atualizado
    // // componentDidUpdate(){
    // //     console.log('Atualizou')
    // // }


    // constructor(props){
    //     super(props)
    //     this.state ={
    //         status : false
    //     };


    //     this.entrar =  this.entrar.bind(this)
    //     this.sair =  this.sair.bind(this)
    // }

    // entrar(){
    //     this.setState({status:true})
    // }

    // sair(){
    //     this.setState({status:false})
    // }





    //     this.trocaEmail = this.trocaEmail.bind(this)
    //     this.trocarSexo = this.trocarSexo.bind(this)
    // }

    // trocaEmail(e){
    //     let valorDigitado = e.target.value;
    //     this.setState({email:valorDigitado});
    // }
    // trocarSexo(e){
    //     this.setState({sexo: e.target.value});
    // }

        //  this.cadastrar = this.cadastrar.bind(this)
    //}

    // cadastrar(e){
    //     e.preventDefault();
    //     const {nome, email, senha } = this.state;

    //     if(nome !== '' && email !== '' && senha !== '')
    //         alert(`Nome ${nome}\n Email:${email} \n Senha${senha}`)

    //     else 
    //         this.setState({error:'Ops está errado'})
        
    // }


     //{
         /* <h1>Novo usuario</h1>
                {this.state.error && this.state.error}
                <form onSubmit={this.cadastrar}>
                    <input type="text" value={this.state.nome} onChange={(e)=>{this.setState({nome:e.target.value})}} />
                    <br/>
                    <input type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} />
                    <br/>
                    <input type="password" value={this.state.senha} onChange={(e)=>{this.setState({senha:e.target.value})}} />
                    <br/>
                    <button type='submit'>Cadatras</button>
                </form> */
            //}

import React, { Component } from 'react';
import './estilo.css'
 // import Feed from './components/Feed';


export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
           txtfrase:''         
        }

        this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'];

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito(){
       let state = this.state;
       let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
       state.txtfrase = this.frases[numeroAleatorio]
       this.setState(state)
    }
    render(){
        return(
            <div className='container'>
               <img src={require('./assets/img/biscoito.png')} className='img'></img>
               <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
               <h3 className='textoFrase'>{this.state.txtfrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}