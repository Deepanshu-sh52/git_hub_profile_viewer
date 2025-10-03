import { useEffect, useState } from "react";

function Body(){
      const [profile,setprofile]=useState([]);
      async function generateprofile(){
          const response =await fetch("https://api.github.com/users?per_page=10")
          const data=await response.json();

          setprofile(data);

      }

      useEffect(()=>{
            generateprofile();
      },[]);

      return(
      <div> 
            <div className="but">
            <input type="number"></input>
            <button>Search profile</button>
            
           </div>

              <div className="profiles">
                  {
                        profile.map((value)=>{
                            
                              return(<div key={value.id} className="cards">
                                    <img src={value.avatar_url}></img>
                                    <h2>{value.login}</h2>
                                    <a href={value.html_url} target="_blank">Profile</a>

                              </div>)
                        })
                  }
            </div>

          </div>
      
      )
}
export default Body;