
import '../components/SearchBar.css'

function SearchBar({searchTerm,setSearchTerm}) {
    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };
    
    return ( 
        <div className='search-bar'>
            <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
            />
      </div>
     );
}

export default SearchBar;