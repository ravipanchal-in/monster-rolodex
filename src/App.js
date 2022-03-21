import { Component } from 'react'

class App extends Component {

  constructor() {
    super();
    this.state = { monsters: [], searchTerm: '' }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => ({ monsters: users })))
  }

  onSerchTermChange = (e) => { this.setState({ searchTerm: e.target.value.toLocaleLowerCase() }) }

  render() {

    const { monsters, searchTerm } = this.state;

    const filteredMoster = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchTerm))

    return (
      <div >
        <input
          placeholder='Search here' value={searchTerm}
          onChange={this.onSerchTermChange}
        />

        <br />

        {filteredMoster.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        ))}

      </div>
    );
  }
}

export default App;

