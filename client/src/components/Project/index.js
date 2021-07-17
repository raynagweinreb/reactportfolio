import React,{ useState, useEffect } from "react";
import { Card } from 'react-bulma-components';
import { Heading } from 'react-bulma-components';
import { Button } from 'react-bulma-components';
import API from "../../utils/API"

const Project = props =>
 {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        getProjects()
    },[])

    function getProjects(){
        API.getAllProjects().then(res => { console.log(res);setProjects(res.data)})
        .catch(err=>console.log(err))
    }
return(
    <div>
                        {projects.map(project=>(
                    <Card>
                    <Card.Content>
        
                         <Heading size={4}>{project.title}</Heading>
                         <ul>
                             <a href={project.project_link}><li>Project Link</li></a>
                             < a href={project.gitlab_link}><li>GitHub Link</li></a>
                        
                         </ul>

                    </Card.Content>
                </Card>
                    ))}
        
        </div>
)
}
export default Project
