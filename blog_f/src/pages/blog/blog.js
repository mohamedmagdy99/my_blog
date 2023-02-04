import "./blog.css"
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
const Blog = () => {
       const { isLoading, error, data } = useQuery("posts", () =>
       axios("http://127.0.0.1:8000/Blog/")
       );
       return ( 
              <div className="BlogList">
                     {isLoading && <div>Loading....</div>}
                     {error && (<div>{`There is a problem fetching the post data - ${error.message}`}</div>)}
                     {error && (<div>{`There is a problem fetching the post data - ${error.message}`}</div>)}
                     <div className="BlogContainer">
                            {data && data.data.map(({title,publisher,created_at,image,about,id})=>(
                                   <div class="blog_post">
                                          <div class="img_pod">
                                                 <img src={image} alt="random" />
                                          </div>
                                          <Link to={`/blog/${id}`} className="BlogLink">
                                                 <div class="container_copy">
                                                        <h3>{created_at}</h3>
                                                        <h3>{publisher}</h3>
                                                        <h1>{title}</h1>
                                                        <p>{about}</p>
                                                 </div>
                                          </Link>
  
                                   </div>
                            ))}
                     </div>
              </div> 
       );
}
 
export default Blog;