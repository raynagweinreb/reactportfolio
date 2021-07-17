import React from "react";
import { Navbar } from 'react-bulma-components';
import { Button } from 'react-bulma-components';
function Header () {
return(
    <div>
                    <Navbar color="secondary">
                <Navbar.Container>
                    <Navbar.Item href ='/'>
                        MY Portfolio
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container align="end">
                    <Navbar.Item>
                        <Button color="primary">About Me</Button>
                       
                        <Button  color="primary">Projects</Button>
                        
                        <Button color="primary">Contact Me</Button>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar>
        </div>
)
}
export default Header