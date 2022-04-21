import React, { useState } from 'react';
import { signupService } from '../service/signupService';
import '../../src/App.css';
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const submitForm = async (e) => {
        console.log(1)
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            alert('Please fill all the fields')
        } else if (name.length <= 2 || name.length >= 20) {
            alert('Name must be between 2 and 20 characters')
        } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            alert('Please enter a valid email')
        } else if (password.length < 6) {
            alert('Password must be at least 6 characters')
        } else if (password.length > 20) {
            alert('Password must be less than 20 characters')
        } else {
            try {
                await signupService.signup({ email: email, password: password, name: name });
                alert("Registration Successful")
                window.location.href = '/login'
            } catch (error) {
                console.log(error);
                alert('Registration Failed')
            }
        }
    };


    return (
        <div className="container mx-auto">
            <form action="" className="px-auto pt-6 pb-8 mb-4 bg-white rounded" onSubmit={formPrevent}>
                <div className="">
                    <h1 className="font-bold text-2xl mb-7">Sign up</h1>
                    <hr className="border-1 border-solid border-slate-100" />
                    <label htmlFor="email" className="font-bold">Email</label>
                    <input type="text" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:text-black focus:bg-zinc-300" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <label htmlFor="name" className="font-bold">Name</label>
                    <input type="text" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:text-black focus:bg-zinc-300" id="name" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <label htmlFor="password" className="font-bold">Password</label>
                    <input type="password" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:text-black focus:bg-zinc-300" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <div className="mt-5">
                        <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outlin" onClick={submitForm}>Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
function formPrevent(e) {
    e.preventDefault();
}
export default Register;
