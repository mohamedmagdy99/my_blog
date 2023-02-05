import {useEffect, useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './header.css';
import NavBar from "../navBar/NavBar";
const Header = () => {
  const [data, setDate]= useState(null);  
  const [loading, setLoading]= useState(true);
  const [error, setError]= useState(null);
  useEffect(()=>{
    const getDate = async ()=> {
      try{
        const response = await axios.get(`http://127.0.0.1:8000/Image`);
        setDate(response.data);
        setError(null);
      }catch(err){
        setError(err.message);
        setDate(null);
      }finally{
        setLoading(false);
      }
    };
    getDate();
  },[]);

  return ( 
    <div className="header">
      {loading && <div>Loading.....</div>}
      {error && (
        <div>{`There is a problem fetching the personal image - ${error}`}</div>
      )}
      {data && data.map(({id, image})=>(
        <div className="Pimage" key={id}>
          <img src={image}  alt="personal"/>
          <h1>Mohamed Magdy</h1>
          <p>Software engineer . Web development . Senior computer science student</p>
          <div className="contact">
            <a href="http://twitter.com/mohamd_magdy99"><FontAwesomeIcon icon={faTwitter} size="2x" inverse className="twitter" /></a>
            <a href="https://www.linkedin.com/in/mohamed-magdy-ab7438188/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" inverse className="linkedin"/></a>
            <a href="https://github.com/mohamedmagdy99"><FontAwesomeIcon icon={faGithub} size="2x"  inverse className="github"/></a>
          </div>
          <NavBar />
        </div>
      )) }
    </div>
   );
}
 
export default Header;