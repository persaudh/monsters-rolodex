import {useState, useEffect} from 'react';
import {} from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

const  App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) =>{ 
      setMonsters(data);
      setFilteredMonsters(data);
    });
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster ) =>
      monster.name.toLowerCase().includes(searchString));
    setFilteredMonsters(newFilteredMonsters);
  }

  return(
    <div className="AppContainer">
    <h1 className='app-title'>Monsters Rolodes</h1>
    <SearchBox 
      onChangeHandler={onSearchChange} />
    <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default  App