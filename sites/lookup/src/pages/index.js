import React from 'react';
import { Link } from 'gatsby';

const Index = () => (
  <>
    <h1>Rick and Morty Character Lookup</h1>
    <p>
      Look up your favourite characters from <em>Rick & Morty</em> using the <a href="https://rickandmortyapi.com">Rick and Morty fa-asl-interpreting</a>.
    </p>
    <Link to="/search">Search</Link>
  </>
)

export default Index;