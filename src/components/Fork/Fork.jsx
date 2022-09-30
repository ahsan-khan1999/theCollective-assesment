import React from "react";
import "./main.css";
export default function Fork({ forks }) {
  return (
    <div>
      <ul className="">
        {forks?.map((fork, index) => {
          return (
            <li key={index} style={{listStyleType:'none'}}>
              <a href={`https://gist.github.com/${fork?.id}`} target="_blank">
                <img
                  key="image"
                  src={fork?.user?.avatar_url}
                  alt={fork?.user?.login}
                  style={{height:'100px',width:'100px'}}
                  className="avatar"
                />
                <br />
                <span key="username"  style={{color:'#fff',fontSize:'20px',fontWeight:'500',marginRight:'10px'}}>
                  {fork?.user?.login}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
