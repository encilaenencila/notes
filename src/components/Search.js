import React from 'react'
import {GoSearch} from "react-icons/go"
function Search({handleSearchNote}) {
  return (
    <div className="search">
      <GoSearch className='search-icon'/>
      <input type="text" 
      placeholder='type to search note...'
      onChange={(e)=> handleSearchNote(e.target.value)}
      />
    </div>
  )
}

export default Search
