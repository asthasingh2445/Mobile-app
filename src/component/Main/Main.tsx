import React from 'react';
import './Main.css'
import {Login} from '../Login/Login';
import {Dashboard} from '../Dashboard/Dashboard';
import {Route,Link} from 'react-router-dom';
import {Gallery} from '../Gallery/Gallery';
export const Main=()=>{
    const[login,setLogin]=React.useState(true)
    const[dashboard,setDashboard]=React.useState(false);
    
    const onLog=()=>{
        if(localStorage.length>0)
        {
            setLogin(false);
            setDashboard(true);
            // setGallery(true)
        }
        else{
            setLogin(true);
            setDashboard(false);
            // setGallery(false)
        }
    }
    
    const logOut=()=>{
        localStorage.clear();
        window.location.reload(false);
    }
    
    React.useEffect(()=>{
        onLog();
    },[]);
    return(
        <div>
            <div>
                
                { localStorage.length === 0 && <Link to="/"></Link> }
                {localStorage.length>0 && <Link  to="/dashboard"></Link> }
                {login &&   <Route exact strict path="/" component={Login}/>}
                
                {localStorage.length>0 && <Link to="/logout"><button className="btn btn-primary" onClick={logOut}>Logout</button></Link>}
                {/* {dashboard && <Route exact strict path="/" component={Dashboard}/>}
                {dashboard && <Route exact strict path="/dashboard" component={Dashboard}/>} */}
                {/* {localStorage.length>0 && <Link  to="/gallery"></Link>} */}
             </div>
            <div>
                {dashboard && <Route exact strict path="/" component={Dashboard}/>}
                 <Route exact strict path="/gallery" component={Gallery}/>
            </div>
            </div>
        
    )
}