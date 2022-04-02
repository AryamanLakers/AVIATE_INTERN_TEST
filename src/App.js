import "./styles.scss";
import {useEffect} from "react"
import Parallex from "./components/Parallex";
import Card from "./components/Card";
import Currency_Card from "./components/Currency_Card"
export default function App() {
    useEffect(()=>{
      let text=document.getElementById("heading")
      let layer0=document.getElementById("parallax__layer__0")
      let layer1=document.querySelector(".parallax__layer__1")
      let layer2=document.querySelector(".parallax__layer__2")
      let layer3=document.querySelector(".parallax__layer__3")
      let layer4=document.querySelector(".parallax__layer__4")
      let layer5=document.querySelector(".parallax__layer__5")
      let layer6=document.querySelector(".parallax__layer__6")
      window.addEventListener("scroll", (e) => {
        let value=(window.scrollY);
        
        // text.style.top=value*0.08 + '%'
        layer0.style.top = value*0.04+'%'
        layer0.style.top = value*0.04+'%'
        layer1.style.top = value*0.09+'%'
        layer2.style.top = value*0.08+'%'
        layer3.style.top= value*0.08+'%'
        layer4.style.top = value*0.08+'%'
        layer5.style.top= value*0.08+'%'
        layer6.style.top = value*0.01+'%'
      })
      const rain_function=()=>{
          let amount=60;
          let body=document.querySelector(".rain")
          let i=0
          while(i<amount){
            let drop=document.createElement('i')
            let size=Math.random()*5
            let posx=Math.floor(Math.random()*window.innerWidth)
            let delay=Math.random*-20
            let duration=Math.random()*5;
            drop.style.width = 0.2+size+'px'
            drop.style.left=posx+'px'
            drop.style.animationDelay= delay+'s'
            drop.style.animationDuration= duration+'s'
            body.appendChild(drop)
            i++;
          }
      }
      rain_function()

    },[])
    
  
  return (
    <div className="App">
      <div id="heading">
        <h2>BLOCKCHAIN</h2>
        <h3>Welcome To The Future</h3>
      </div>

      <Parallex />
      <div className="parallax__cover">
        <Card />
      </div>
      <div className="blockchain_outer">
        <div className="rain">
           <Currency_Card />
        </div>
      </div>
    </div>
  );
}
