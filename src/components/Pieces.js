import "../styles.scss";
import {useEffect} from "react"
import VanillaTilt from 'vanilla-tilt';
  
export default function Pieces({ meta_data }) {
  useEffect(()=>{
    const tag=document.getElementsByClassName("each_piece");
    Array.from(tag).forEach( function(element, index) {
      VanillaTilt.init(tag[index],{
        max:2,
        speed:200,
        perspective :300
      })
    });
    console.log(tag)
  },[])
  return <div className="each_piece">{meta_data}</div>;
}
