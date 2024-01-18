import React, { Component } from "react";

class Table extends Component {
    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Table;