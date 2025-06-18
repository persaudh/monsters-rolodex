
const Search = ({ monsters, setFilteredMonsters }) => {
return (
    <>
        <input type="search" 
            onChange={(event) =>{
            const searchString = event.target.value.toLowerCase();
            const newFilteredMonsters = monsters.filter((monster) => 
            monster.name.toLowerCase().includes(searchString)
        );
        setFilteredMonsters(newFilteredMonsters);
        }} />
     </>
 )
};

 export default Search