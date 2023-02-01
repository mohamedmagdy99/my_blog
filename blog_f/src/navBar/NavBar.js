import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard , faBlog, faFile} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
       return ( 
              <div className="NavBar">
                     <nav>
                            <ul>
                                   <li>
                                          <a href="#" className="aboutMe" tabIndex="1">
                                                 <FontAwesomeIcon icon={faAddressCard} size="1x"/> About Me
                                          </a>
                                   </li>
                                   <li>
                                          <a href="#" className="blog" tabIndex="1">
                                                 <FontAwesomeIcon icon={faBlog} size="1x"/> Blog
                                          </a>
                                   </li>
                                   <li>
                                          <a href="#" className="resume" tabIndex="1">
                                                 <FontAwesomeIcon icon={faFile} size="1x"/> Resume
                                          </a>
                                   </li>
                            </ul>
                     </nav>
              </div>
        );
}
 
export default NavBar;