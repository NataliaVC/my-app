import React, { Component } from 'react';

//"id": 1,
//"title": "Flashback",
//"director": "John Cena",
//"year": "1990",
//"rating": "8,5",
//"img":"https://es.web.img3.acsta.net/pictures/21/04/23/22/00/0364927.jpg"
//}, {

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            //id: '',
            //title: '',
            //director: '',
            //year: '',
            //rating: 'low',
            //img: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value

        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending the data...');

    }
    render() {
        return ( <
            div classname = "card" >
            <
            form className = "card-body"
            onSubmit = { this.handleSubmit } >
            <
            div className = "form-group" >
            <
            input type = "number"
            name = "id"
            onChange = { this.handleInput }
            className = "form-control"
            placeholder = "Id" /
            >
            <
            /div> <
            div className = "form-group" >
            <
            input type = "text"
            name = "title"
            onChange = { this.handleInput }
            className = "form-control"
            placeholder = "Title" /
            >
            <
            /div> <
            div className = "form-group" >
            <
            input type = "text"
            name = "director"
            className = "form-control"
            placeholder = "Director"
            onChange = { this.handleInput }

            /> <
            /div> <
            div className = "form-group" >
            <
            input type = ""
            name = "year"
            className = "form-control"
            placeholder = "Year"
            onChange = { this.handleInput }

            /> <
            /div>

            <
            div className = "form-group" >
            <
            select name = "raiting"
            className = "form-control" >
            onChange = { this.handleInput } <
            option > low < /option> <
            option > medium < /option> <
            option > high < /option> <
            /select>

            <
            /div>

            <
            button type = "submit"
            className = "btn btn-primary" >
            Save <
            /button> <
            /form> <
            /div>
        )
    }
}

export default TodoForm;