import { Component } from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

// function ListItems(props) {
//     const items = props.items;
//     const listItems = items.map(item => {
//         return <div className="list" key={item.key}>
//             <p>{item.text}</p>
//         </div>
//     })
//     return(
//         <div>{listItems}</div>
//     )
// }

// export default ListItems;

export default class ListItems extends Component {
    render(){
        const listItems = this.props.items.map(function(item) {
            return <div className="list" key={item.key}>
                        <p>
                            <input 
                                type="text" 
                                value={item.text}
                                onChange={function(e){
                                    this.props.setUpdate(e.target.value, item.key)
                                }.bind(this)}
                                >
                            </input>
                            <span>
                                <FontAwesomeIcon 
                                    className="faicons" 
                                    icon="trash"
                                    onClick={function(){
                                        this.props.deleteItem(item.key)
                                    }.bind(this)}
                                    >
                                </FontAwesomeIcon>
                            </span>
                        </p>
                    </div>
        }.bind(this))
        return(
            <div>
                <FlipMove duration={300} easing="ease-in-out">
                    {listItems}
                </FlipMove>
            </div>
        );
    }
}