import React, {Component} from 'react';
import Card from './Card';


class List extends Component {
  constructor(props){
    super(props)
  }
  render (){
    const { data } = this.props
    return (
      <div className="container">
      {data.map((item, index) => {
        return <Card key={index} data={item}/>
        })}
        </div>)
    }
  }


export default List;
