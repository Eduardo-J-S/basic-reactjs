import React, { Component } from "react";

class Form extends Component {
    render(){
        return(
            <form onSubmit={this.props.buttonFunction}>
                <input type="text" placeholder="Enter your name" className="form-control" name="name" onChange={this.props.fieldFunction} value={this.props.fieldName} />
                <input type="number" placeholder="Enter your age" className="form-control" name="age" onChange={this.props.fieldFunction} value={this.props.fieldAge} />
                <input type="submit" value="Register" className="btn btn-primary" />

            </form>
        )
    }
}

export default Form;