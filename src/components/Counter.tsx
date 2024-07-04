//Importing Component from React to use it in the Counter component
//Importing React to use JSX in the Counter component
import React,{ Component } from "react";
 
//Defining a class component named Counter that extends Component
class Counter extends Component { 
//Initialize the state with a count property to 0
state = {
 count: 0
 };
 // Defining an increment method to change the count state
 increment = () => {
  //the new updated state
 this.setState({ count: this.state.count + 1 }); 
};
//Rendering the count state and a button to increment the count
render() { 
return(
  <div>
    {/* Display the current count */}
    <p>Count: {this.state.count}</p> 
    {/* The button that calls the increment method when clicked */}
    <button onClick={this.increment}>Increment</button> 
</div>
);
 }
 }
//Exporting the Counter component
export default Counter;