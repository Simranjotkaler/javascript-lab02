import React from 'react';
import Header from '../shared/Header';


const Home = () => {
  return (
    <>
	
      {/* You need to use your shared header component... */}
		<Header title='About'/>
      {/* You need a paragraph describing a fun fact about you */}
	  <p>I am afraid of dogs</p>
    </>
  );
}
 
export default Home;