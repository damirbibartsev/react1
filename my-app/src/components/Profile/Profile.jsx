import React from "react";
import style from "./Profile.module.css"
import Kartinka from "../../assert/img/Kartinka.jpg"
function Profile() {
    return (
    <div className = {style.content}>
        <img src ={Kartinka} alt="Kartinka"/>
    </div>
    )
  }
  
  export default Profile;