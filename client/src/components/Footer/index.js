import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer () {
    return(
        <div>
    <h2 id="ContactMe">Contact Me</h2>
                <ul>
            <a style ={{marginRight:250}} target="_blank" href="mailto: raynagweinreb@gmail.com">
                Email Me!
            </a>
        
            <a style ={{marginRight:250}} target="_blank" href="tel:5414201347">
                 Call Me!
            </a>
            <a style ={{marginRight:250}} target="_blank" href="https://github.com/raynagweinreb/">
        GitHub
            </a>
            <a style ={{marginRight:250}} target="_blank" href="https://www.linkedin.com/in/rayna-weinreb-946842189/">
       Linkedin
    </a>
                                <a style ={{marginRight:250}}target="_blank" href=  "https://docs.google.com/document/d/1656VjhrzPDrL1HZ3sWenPR1kG992mAnmT7t83Wfuuno/edit">
        Resume
    </a>
    </ul>
    </div>
    )
}
export default Footer