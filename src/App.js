import { Component } from 'react';
import ListItems from './ListItems';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  
  handleInput(e){
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  }

  deleteItem(key){
    const filterdItems = this.state.items.filter(function(item) {return item.key !== key})
    this.setState({
      items: filterdItems
    });
  }

  setUpdate(text, key){
    const items = this.state.items;
    items.map(function(item){
      if(item.key === key){
        item.text = text
      }
      this.setState({
        items: items
      });
    }.bind(this))
  }

  render(){
    return (
      <div className="App">
        <Header 
          onSubmit={this.addItem}
          value={this.state.currentItem.text}
          onChange={this.handleInput}
          >
        </Header>
        <ListItems 
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          >
        </ListItems>
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <header>
        <h1 id="to-do-title">오늘의 할일</h1>
        <form id="to-do-form" onSubmit={this.props.onSubmit}>
          <input 
            type="text" 
            placeholder="내용을 입력하세요" 
            value={this.props.value}
            onChange={this.props.onChange}
            >
          </input>
          <button type="submit">추가</button>
        </form>
      </header>
    );
  }
}