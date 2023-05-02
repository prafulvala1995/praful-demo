import axios from 'axios';
import { useState } from "react";

function Form() {

    let [mail, setmail] = useState('');
    let [password, setpassword] = useState('');

    const passda = () => {

        axios.post('http://localhost/phpapi/first.php', {
            mail: mail,
            password: password
        })

            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    return (
        <>

        <div className='container'>
            <div>
                <div>login</div>

                <div>
                    <div>Email : <input type='text' placeholder='Email' onChange={(e) => { setmail(e.target.value) }}></input></div>
                </div>
                <div>
                    <div>Password : <input type='password' placeholder='password' onChange={(e) => { setpassword(e.target.value) }}></input></div>
                </div>
                <div>
                    <div><input type='button' value="click here" onClick={passda}></input></div>
                </div>
            </div>
        </div>
        </>
      
    );
}



export default Form;