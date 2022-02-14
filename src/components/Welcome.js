// import { Component } from "react/cjs/react.production.min";
import React, {Component} from "react";

class Welcome extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Xin chao {this.props.name} </h1>
            </div>
        );
    }
}

export default Welcome;