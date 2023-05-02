import './App.css';
import axios from 'axios';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './component/Register';


function App() {

  // let [mail, setmail] = useState('');
  // let [password, setpassword] = useState('');


  // const passdata = () => {

  //   axios.post('http://localhost/phpapi/first.php', {
  //     mail: mail,
  //     password: password
  //   })

  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })

  // }

  return (
    <>

    <Register/>

      {/* <div className='container'>
        <div>
          <div className="mb-3">login</div>

          <div>
            <div >Email : <input type='text' placeholder='Email' onChange={(e) => { setmail(e.target.value) }}></input></div>
          </div>
          <div>
            <div>Password : <input type='password' placeholder='password' onChange={(e) => { setpassword(e.target.value) }}></input></div>
          </div>
          <div>
            <div>Mo. No. : <input type='text' placeholder='Mo. No.' onChange={(e) => { setmail(e.target.value) }}></input></div>
          </div>
          <div>
            <div><input type='button' value="click here" onClick={passdata}></input></div>
          </div>
        </div>
      </div> */}
    </>

  );
}

//   let [name,setname] = useState('');

//   const passdata = () => {

//     axios.post('http://localhost/phpapi/first.php',{
//       name:name
//     })

//     .then(function (response) { 
//       // handle success
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })

//   }

//   return (
//     <div className="App">
//       <input type='text' onChange={(e)=> { setname(e.target.value) }}></input>
//       <input type='button' value="click here" onClick={passdata}></input>

//       <Form/>
//     </div>
//   );
// }

export default App;
