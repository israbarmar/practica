import React, {Component} from "react";

class Boton extends Component{
constructor(props){
    super(props);
    this.state = {
        contador: 1000
    }

    this.sumarMil = this.sumarMil.bind(this);
}

sumarMil(){
    let sumar = 1000;
    let nuevo = this.state.contador;
    this.setState({
        contador: sumar + nuevo
    })
}

render(){

return(
<div>
  <button onClick={this.sumarMil}>{this.state.contador}</button>
</div>
)

}

}

export default Boton;
