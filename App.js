export default function User(props){
  console.log(props.name);

  return(
    <>
     <h2>User Name={props.name}</h2>
     <p>Age={props.age}</p>
     <p>City={props.city}</p>
    </>
  )
}




/*                              uncomment this only for better understanding, after that go upwardly to uncomment upper one and comment this one.
import React,{Component} from "react";
class User extends Component{
  render(){
    return(
      <>
      <h1>this is class component</h1>
      <p>this is a paragraph</p>
      </>
    )
  }
}
export default User 
*/

/*                                        uncomment this only for better understanding, after that go upwardly to uncomment upper one and comment this one.
import React,{Component} from "react";
class User extends Component{
  render() {
    return(
      <h1>This is a Class Component</h1>
    )
  }
}
export default User
*/

/*                       uncomment this only for better understanding, after that go upwardly to uncomment upper one and comment this one.
export let App=()=>{
  return(
    <h1>Hello Users.!</h1>
  )
}
*/

/*                          uncomment this only for better understanding, after that go upwardly to uncomment upper one and comment this one.
function User() {
  return(
    <h2>Welcome to first Page</h2>
  )
}
export default User
*/


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
