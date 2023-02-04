import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
const BlogDetails = () => {
       const { id } = useParams();
       const { isLoading, error, data } = useQuery("posts", () =>
       axios("http://127.0.0.1:8000/Blog/"+ id)
       );
       return ( 
              <div>
                     {isLoading && <div>Loading....</div>}
                     {error && (<div>{`There is a problem fetching the post data - ${error.message}`}</div>)}
                     <div className="container">
                            {data && data.map(({title,publisher,created_at,image,about,id})=>(
                                   <div className="Blog" key={id}>
                                                 <img src={image} alt="blog"/>
                                                 <h2>{title}</h2>
                                                 <h4>Written by : {publisher}</h4>
                                                 <h6>Created At :{created_at}</h6>
                                                 <p>{about}</p>
                                   </div>
                            ))}
                     </div>
              </div>
        );
}
 
export default BlogDetails;