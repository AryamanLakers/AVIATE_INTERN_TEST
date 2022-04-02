import "../styles.scss";
import Pieces from "./Pieces.js";
import { about_blockchain } from "./data.js";
import VanillaTilt from 'vanilla-tilt';
import {useEffect} from "react"
export default function Card() {
  useEffect(()=>{
    VanillaTilt.init(document.querySelector(".each_piece"),{
      max:25,
      speed:400
    })
  },[])
  
  return (
   
      <div className="outer_box">
        <div className="intro_to_topic">WHAT IS BLOCKCHAIN ?</div>
        <div className="Card-box">
          {about_blockchain.map((item) => {
            return <Pieces meta_data={item.meta_data} />;
          })}
        </div>
      </div>
    
  );
}
