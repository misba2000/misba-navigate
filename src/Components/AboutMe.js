import "./NavBarModule.css";
import React from "react";


const AboutMe = () => {
    return(
        <div>
            <img src="https://rukminim1.flixcart.com/image/416/416/painting/a/c/z/wpct028-pics-and-you-original-imaek7h4raz45zc4.jpeg?q=70" alt="user.img"/>
           <div > 
               <p>
                <b className="about1">Iam a FRONTEND DEVELOPER</b></p>
              <p className="about2">  Love to watch Cartoons. I consider myself as a very focussed person.</p>
              <p className="about3"><b>MY HOBBIES:</b></p>
              <p>
                <ul>
                    <li className="about2">Eager to learn new things</li>
                    <li className="about2">Love to build web pages</li>
                    <li className="about2">Love to sing a song</li>
                    <li className="about2">Cooking</li>
                </ul>
              </p>
                 
              </div>
            
        </div>
    )
}
export default AboutMe;