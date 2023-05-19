import React, {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            apellido: ''
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        const objetivo = event.target;
    
        const name = objetivo.name;
        const value = objetivo.value;
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(event){
        alert(this.state.nombre + this.state.apellido);
        event.preventDefault()
    }
    
    render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='nombre' value={this.state.nombre} onChange={this.handleChange} />
            <input type='text' name='apellido' value={this.state.apellido} onChange={this.handleChange}/>
            <input type='submit' />
          </form>
        )
    }
    
    }

export default Form;