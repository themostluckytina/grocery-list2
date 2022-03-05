
import { Component } from "react";


export class GroceryList extends Component{
    state ={
        userInput: '',
        list: []

    }
    onChangeEvent(e){
        this.setState({userInput: e})
        console.log(e)
    }
addBtn(input){
    if(input === ''){
        alert('Please enter an item')
    } else{
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({list: listArray, userInput: ''})
    }
}

deleteBtn(){
    let listArray = this.state.list;
    listArray = [];
    this.setState({list: listArray})
}


crossedWord(event){
    const li = event.target;
    li.classList.toggle('crossed')
}

onFormSubmit(e){
    e.preventDefault();
}
render(){
    return(
        <div>
<form onSubmit={this.onFormSubmit}>
        <div>
            <input type="text"
            placeholder="Type here"
            onChange = {(e)=>{this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
        </div>
        <div className="btn">
            <button className="add" onClick={()=>this.addBtn(this.state.userInput)} >ADD</button>
        </div>
        <ul>
            {this.state.list.map((item, index) => ( 
            <li  className="li" onClick={this.crossedWord} key={index} >🛒{item}</li>))}
        </ul>

        <button className="del" onClick={() => this.deleteBtn()}>DELETE</button>
        </form>
</div>
    )
}
}