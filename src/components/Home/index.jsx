import React from 'react';

// You need to import your shared header...
import Header from '../shared/Header';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
	        <Header title="This is Home Page of Lab 2"/>
      {/* You need a link to your about page as a call to action */}
	        <Link to='/About'><Button>About</Button></Link>
    </>
  );
}
 
export default Home;