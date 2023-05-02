import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const Register = () => {

    let history = useNavigate();
    const [data, setdata] = useState({

        name: "",
        user: "",
        password: "",
        number: ""

    });

    const submitChange = (e) => {
        //console.log(data);
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    const submitForm = (e) => {
        e.preventDefault();

        const sendData = {
            name: data.name,
            user: data.user,
            password: data.password,
            number: data.number
        }
        console.log(sendData);

        axios.post('http://localhost/phpapi/first.php', sendData)
            .then((result) => {
                history(`/login`);
            })


    }
    return (

        <>
            <div className='container'>
                <form>
                    <div className="mb-3">Register Form</div>
                    <div>
                        <div >Name : <input type='text' placeholder='name' onChange={ submitChange} value={data.name}/></div>
                    </div>
                    <div>
                        <div>Username : <input type='text' placeholder='enter username' onChange={(e) => { setpassword(e.target.value) }}></input></div>
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
                </form>
            </div>
        </>
    )

}