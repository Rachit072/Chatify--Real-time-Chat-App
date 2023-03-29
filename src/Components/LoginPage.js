import React from "react";
import { Link } from 'react-router-dom';

export default function LoginPage(){
    // function handleLogin(){
    //     navigate('/Home.js');
    // }

    return <div className="main-container flex-row">
        <div className="logo-container flex-col">
            <div><img style={{height:"200px",width:"300px"}}  src="https://cdn-icons-png.flaticon.com/512/875/875590.png" alt="" /></div>
            <div><h1  className="name" >Chatify</h1></div>
        </div>
        <div className="login-container">
            <div>
                <div style={{paddingTop:"150px"}}>
                    <h1 style={{color:"white",fontFamily:"serif"}}>Welcome</h1>
                    <p style={{color:"white",fontFamily:"sans-serif"}}>Chat in the moment with ease, Real-time chat for real-time connections</p>
                </div>
                <div style={{paddingTop:"50px"}}>
                <div className="g-btn" style={{border:"1px solid lightgrey",borderRadius:"3px",padding:"px",display:"flex",width:"205px"}}>
                    <div>
                        <img style={{height:"24px",weight:"24px",padding:"1px 5px 0px 5px"}} src={"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"} alt=" "/> 
                    </div> 
                    <div style={{paddingTop:"2px",color:"white"}}>
                        Continue with Google
                    </div> 
                </div>
                    <button className="btn"> <Link to="/home" style={{ textDecoration: 'none',color:"white" }}>Login</Link></button>
                </div>
                <div class="Social-media">
                    <a href="#"><i style={{color:"white",padding:"10px"}} class="fab fa-facebook "></i></a>
                    <a href="#"><i style={{color:"white",padding:"10px"}} class="fab fa-linkedin"></i></a>
                    <a href="#"><i style={{color:"white",padding:"10px"}} class="fab fa-instagram"></i></a>
                    <a href="#"><i style={{color:"white",padding:"10px"}} class="fab fa-youtube"></i></a>
                </div>            
            </div>
        </div>
    </div>
}