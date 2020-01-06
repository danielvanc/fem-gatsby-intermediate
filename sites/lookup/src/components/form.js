import React, { useState } from 'react';
import { navigate } from 'gatsby';

const Form = () => {
  const [value, setValue] = useState('');
  const handleInput = (event) =>  setValue(event.target.value);
  const handleSubmit = (event) => { 
    event.preventDefault();
    // Turn the search string into a url friendly query
    const query = value
      .toLowerCase()
      .trim()
      .replace(/[^\w]/g, '')
      .replace(/\s+/g, '-');
    
    // Change the URL
    navigate(`/search/${query}`, { state: { query } })
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Search by name:
        <input type="text" name="name" value={value} onChange={handleInput} />
      </label>
      <button type="submit">Search</button>
    </form>
  )
}

export default Form;