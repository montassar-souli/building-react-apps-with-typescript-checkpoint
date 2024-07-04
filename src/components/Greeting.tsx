import React from 'react'; 
// Defining a component named Greeting that takes a prop 'name'
const Greeting = ({ name }) => { 
// Returning a div element with a greeting message
return <div>Hello, {name}!</div>;
 };
// Exporting the Greeting component
 export default Greeting;