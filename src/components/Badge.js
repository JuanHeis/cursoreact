import React from 'react'
import logoConf from '../img/badge-header.svg'
class Badge extends React.Component{

    render(){
       return(
           <div>
               <div>
                   <img src={logoConf} alt="logo conf   "></img>
               </div>
               <div>
                   <img src="" alt="Logo user"></img>
                   <h1>
                       Juan <br></br>H
                   </h1>
               </div>
               <div>
                   <p>Soy un programdor</p>
                   <p>@Juan</p>
               </div>
               <div>
                   Platizi conf
               </div>
           </div>
       ) 
    }
}

export default Badge;