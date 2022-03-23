import React from 'react'

const SearchBox = (props) => {

  return (
    <>
      <input
        placeholder='Search here' value={props.value} type='search'
        onChange={props.onChange}
      />
    </>
  )
}


export default SearchBox;