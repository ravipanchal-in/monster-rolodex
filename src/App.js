import { useState, useEffect } from 'react'
import SearchBox from './components/search-box/SearchBox';
import CardList from './components/card-list/card-list';


function App() {

  const [state, setState] = useState({
    monsters: [], searchTerm: ''
  })

  const [filteredMoster, setFilteredMoster] = useState(state.monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setState({ ...state, monsters: users }))
  }, [])

  useEffect(() => {
    const newFilteredMoster = state.monsters.filter(monster => monster.name.toLocaleLowerCase().includes(state.searchTerm))
    setFilteredMoster(newFilteredMoster);
  }, [state.monsters, state.searchTerm])

  const onSerchTermChange = (e) => { setState({ ...state, searchTerm: e.target.value.toLocaleLowerCase() }) }

  return (
    <div >
      <SearchBox onChange={onSerchTermChange} value={state.searchTerm} />
      <br />
      <CardList data={filteredMoster} />
    </div>
  );
}

export default App;

