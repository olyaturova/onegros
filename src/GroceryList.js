import { Component } from "react";
import check from './check.png';

export class GroceryList extends Component{
constructor(){
    super();
    this.state = {
        userInput:"",
        groceryList:[]
    }
}

onChangeEvent(event){
    this.setState({userInput: event})
    console.log(event)
    }

    addItem(input){
        if (input === ''){
            alert ("Please enter an item")
        }
        else{ 
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
        console.log(listArray)
    }
}

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray});
    }


    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(event){
        event.preventDefault();
    }

render (){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className="container">
            <input type="text" 
            placeholder="What do you want to buy?" 
            onChange={(event) => {this.onChangeEvent(event.target.value)}}
            value={this.state.userInput}/>
        </div>
        <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
        </div>
        <ul>
            {this.state.groceryList.map((item, index) =>(
                <li onClick={this.crossedWord} key={index}>
                    <img src={check} width="28px"/>
                    {item}
                </li>
            ))}
        </ul>
        <div className="container">
        <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
        </div>
        </form>
        </div>
    )
}
}