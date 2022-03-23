import { Component } from 'react';

class CardList extends Component {
  render() {
    return (
      <>
        {this.props.data.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        ))}
      </>
    )
  }
}

export default CardList;