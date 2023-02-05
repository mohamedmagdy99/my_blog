import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard , faBlog, faFile} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
       return ( 
              <div className="NavBar">
                     <nav>
                            <ul >
                                   <li>
                                          <Link to="/about" className="aboutMe" tabIndex="1" >
                                                 <FontAwesomeIcon icon={faAddressCard} size="1x"/> About Me
                                          </Link>
                                   </li>
                                   <li>
                                          <Link to="/blog" className="blog" tabIndex="1">
                                                 <FontAwesomeIcon icon={faBlog} size="1x"/> Blog
                                          </Link>
                                   </li>
                                   <li>
                                          <Link to="https://docs.google.com/document/d/1nEYcRjcCAT5mUiGIZhXtuEFU13pSy__e6nojqyVAeto/edit?usp=sharing" className="resume" tabIndex="1">
                                                 <FontAwesomeIcon icon={faFile} size="1x"/> Resume
                                          </Link>
                                   </li>
                            </ul>
                     </nav>
              </div>
        );
}
 
export default NavBar;