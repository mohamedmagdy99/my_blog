import youSvg from "./images/about.svg"
import axios from "axios";
import { useQuery } from "react-query";
import "./AboutMe.css"
const AboutMe = () => {
       const { isLoading, error, data } = useQuery("posts", () =>
       axios("http://127.0.0.1:8000/Tech/")
     );
       return ( 
              <div className="about">
                     <img src={youSvg} alt="about" className="abouticon"/>
                     <h1>About Me.</h1>
                     <p>My name is Mohamed Magdy, I'm a senior computer science student at the Faculty of Science at Ain Sham University, I'm 23 years old, and I live in Cairo, Egypt. I love programming because I love to build things and learn new things while I'm building them, and I love helping people and making their daily life tasks more easy and fun.</p>
                     <div className="tech">
                            <h2>Tech i use :</h2>
                            {isLoading && <div>Loading.....</div>}
                            {error && (<div>{`There is a problem fetching the post data - ${error.message}`}</div>)}
                            <div className="container">
                                   {data && data.data.map(({name,icon,id})=>(
                                          <div className="TechCard" key={id}>
                                                 <img src={icon} alt="TechIcon" />
                                                 <h3 >{name}</h3>
                                          </div>
                                   ))}
                            </div>
                            
                     </div>
              </div> 
       );
}
 
export default AboutMe;