import React, { Component } from "react";



export default class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>{this.props.curtidas} curtidas</a>
                <a>{this.props.comentarios} comentarios</a>
            </div>
        );
    }
}