import { useEffect, useState } from "react";

function Body(){
      const [profile,setprofile]=useState([]);
      const [num,setnum]=useState("");
      console.log(profile);
      async function generateprofile(count){
          const ran=Math.floor(Math.random()*1000+1)
          const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
          const data=await response.json();
          setprofile(data);

      }

      useEffect(()=>{
            generateprofile(10);
      },[]);
return (
  <div>

    <div className="but">
      <input type="text" className="inpu" placeholder="search here" value={num} onChange={(e)=>setnum(e.target.value)}/>
      <button onClick={()=>generateprofile(Number(num))}>Search Profile</button>
    </div>

    <div className="profiles">
      {profile.map((value) => (
        <div key={value.id} className="cards">
          <img src={value.avatar_url} />
          <h2>{value.login}</h2>
          <a href={value.html_url} target="_blank">Profile</a>
        </div>
      ))}
    </div>

  </div>
)
}
export default Body;