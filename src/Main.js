import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            age: '',
            vector: []
        }
    }

    whenTyping = (field) => {
        this.setState({[field.target.name]: field.target.value});
    }

    whenClicking = (button) => {
        button.preventDefault();

        var copyVector = [...this.state.vector];

        copyVector.push({
            'name': this.state.name,
            'age': this.state.age
        });

        this.setState({vector: copyVector});

        this.setState({
            name: '',
            age: ''
        })
    }

    render(){
        return(
            <div>
                <h1>Form</h1>
                <Form fieldName={this.state.name} fieldAge={this.state.age} buttonFunction={this.whenClicking} fieldFunction={this.whenTyping} />
                <Table data={this.state.vector}/>
            </div>
        )
    }
}

export default Main;