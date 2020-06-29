import React from 'react';
import axios from 'axios';
import './Login.css';
// import '../download.png';
import {Link} from 'react-router-dom';
import {Dashboard} from '../Dashboard/Dashboard';
export const Login:React.FC=()=>
{
    const[dashboard,setDashboard]=React.useState(false);
    const [email,setEmail]=React.useState('');
    const onusernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const [password,setPassword]=React.useState('');
    const onpasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const onLogin=(event:any)=>{
        // setDashboard(true);
        event.preventDefault();
        let login={"email":email,"password":password,}
        axios.post('http://127.0.0.1:5000/login',login)
        // .then((response) => setDashboard(true));
        .then(function(response){
            localStorage.setItem('itemName',response.data.email);
            setDashboard(true);
            window.location.reload(false);
            console.log(response.data)
        })
        .catch(function(error){
            console.log("error find")
            
        })
    }
    return(
        <div className="container-fluid">
            <div className="body">
                <div className="form-1">
               <h1 className="text-white text-center ">PWA<br/></h1>
               <h4 className="text-white text-center ">Catchphrase</h4>   
               
                <form className="form-2" >
                    <p>
                    
                        <input 
                            type="text"
                            placeholder="Login id"
                            className="btn btn-light"
                            value={email}
                            onChange={onusernameChange}
                            required
                        />
                    </p>
                    
                    <p >
                        <input
                            type="password"
                            placeholder="Password"
                            className="btn btn-light"
                            value={password}
                            onChange={onpasswordChange}
                            required
                        />
                    </p>
            
                     <button type="submit" className="btn btn-light btn-secondary text-success" onClick={onLogin}>Log in</button>
                     {dashboard && <Link to="/dashboard"></Link>}
                </form>
                </div> 
                </div> 
        </div>
        
    );
}