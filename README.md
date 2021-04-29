# TODO앱 만들기2(Ver. 2021/04/30)

<img src="public/img/todo_app_20210430.gif" width="40%" height="30%" alt="todo_app"></img>

* 오늘은 TODO앱에서 Animation기능을 구현 해보았습니다.
* rreact-flip-move를 통해 할일목록이 추가되고 삭제될때 간단한 ease효과가 나타납니다.

[ListItems.js]
```javascript
import { Component } from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move'; // 애니메이션 효과를 사용하기위해 react-flip-move를 vc 터미널에서 npm install을 통해 설치해주고 import 해줍니다. 

export default class ListItems extends Component {
    render(){
      // 목록요소를 기존 return내부에서 render내부로 가져오고 listItems 변수로 저장 합니다.
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
          // 변수로저장한 목록요소를 선언해주고 FlipMove 컴포넌트로 감싸주면서 옵션을 넣어주면 Animation 효과가 나타납니다.
            <div>
                <FlipMove duration={300} easing="ease-in-out">
                    {listItems}
                </FlipMove>
            </div>
        );
    }
}
```