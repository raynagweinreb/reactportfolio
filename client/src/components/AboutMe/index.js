import React from "react";
import picture from './picture/Pictureofme.jpg'
function AboutMe () {
    return(
          <div>            
                <h2 id="AboutMe " className="text-center pt-3"> About Me</h2>
                <img id="Float-left" src={picture} alt={"Picture of me"}/>
                <p id="abouttext"> 
                    Meet Rayna 
                    Raised in Bend Oregon, I grew up hiking and skiing. I found a love for technology at a young age, helping my parents troubleshoot their phones and computers.
                    I attended Linfield College and graduated with a bachelors in Business Information Systems in 2020. 
                    I decided to start building and designing websites because it brings my love for technology together with my love for design. </p>
               
                
            </div>

    
    
    )
}
export default AboutMe 