import { useParams } from "react-router-dom";
import axios from "axios";
import { useState , useEffect} from "react";
import "./blogDetails.css"
const BlogDetails = () => {
       const [data, setDate]= useState(null);  
       const [loading, setLoading]= useState(true);
       const [error, setError]= useState(null);
       const { id } = useParams();
       useEffect(()=>{
         const getDate = async ()=> {
           try{
             const response = await axios.get('http://127.0.0.1:8000/Blog/'+ id);
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
              <div className="BlogDetails">
                     {loading && <div>Loading....</div>}
                     {error && (<div>{`There is a problem fetching the post data - ${error.message}`}</div>)}
                     <div className="DetailsContainer">
                            {data &&
                                   <div className="BlogD" key={data.id}>
                                          <img src={data.image} alt="blog" className="PostImg"/>
                                          <h2>{data.title}</h2>
                                          <h4 >Written by : {data.publisher}</h4>
                                          <p>{data.body}</p>
                                   </div> 
                            }
                     </div>
              </div>
        );
}
 
export default BlogDetails;