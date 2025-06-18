import './search-box.styles.css';

const SearchBox= ({onChangeHandler}) => {
    return (
    <div className="search-box-container">
        <input 
        type="search"
        onChange={onChangeHandler}
        />
    </div>)
};

export default SearchBox