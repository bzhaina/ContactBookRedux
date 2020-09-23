import React from 'react';
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;





//   // let [bool, setBool] = useState(true);//? HOOK

// //   const handleClick = () =>{
// //     setBool(!bool);
// //   }

// //   // console.log("Updated", bool);
// const text = "Privet";
// useEffect(() => {
//   console.log("APP.js UPDATED");
// })