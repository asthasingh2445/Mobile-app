import React from 'react';
import './Gallery.css';
export const Gallery:React.FC=()=>{
    return(
        <div className="container-fluid body3">
            <div className="body3">
                <div >
                    <img className="img-responsive"  src="/women.jpg" alt="astha" width="460" height="315"/>
                    
                </div>
                <br/>
                <div>
                    <img className="img-responsive"  src="/women.jpg" alt="astha" width="460" height="315"/>
                    
                </div>
                <br/>
                <div>
                    <img className="img-responsive"  src="/women.jpg" alt="astha" width="460" height="315"/>
                    
                </div>
                <br/>
                <div>
                    <img className="img-responsive"  src="/women.jpg" alt="astha" width="460" height="315"/>
                    
                </div>
                <br/>
                <div>
                    <img className="img-responsive"  src="/women.jpg" alt="astha" width="460" height="315"/>
                    
                </div>
            </div>
        </div>
    )
}