import {useEffect,useState} from "react"
import axios from "axios"
export default function Currency_Card(){
  const [currency_pairs,setcurrency]=useState([])
  const [currency1,setcurrency1]=useState("")
  const [currency2,setcurrency2]=useState("")
	let new_array=[...currency_pairs]
  const currency1_function=(e)=>{
      setcurrency1(e.target.value)
      calculate()
  }
  const currency2_function=(e)=>{
      setcurrency2(e.target.value)
      calculate()
  }
  const calculate=async ()=>{
    const rateEl = document.getElementById('rate');
    const data=await axios.get(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    const rate=data.data.rates[currency2]
    rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;
    const amountEl_two = document.getElementById('amount-two');
    const amountEl_one = document.getElementById('amount-one');
    amountEl_two.value = (amountEl_one.value * rate).toFixed(4)
  }
  const swappy=()=>{
    const currencyEl_one = document.getElementById('currency-one');
    const currencyEl_two = document.getElementById('currency-two');
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    const temp1=currency2
    setcurrency2(currency1)
    setcurrency1(temp1)
    calculate()
  }
	useEffect(()=>{
		axios.get("https://blockchain.info/ticker")
			.then((data)=>{
				for (const [key, value] of Object.entries(data.data)) {
                  			new_array.push(key);
  				}
  				setcurrency(new_array)
		})
	},[])
	return( 
  	<div className="container-outer">
		<div className="container">
			<div className="currency">
			  <select id="currency-one">

				{currency_pairs.length>0?
					currency_pairs.map((item,index)=>{
						return <option onClick={currency1_function}>{item}</option>
					})
					:<option>"error"</option>}
			  </select>
			  <input onChange={calculate}  id="amount-one" placeholder="0"  />
			</div>

			 <div className="swap-rate-container">

			  <div className="rate" id="rate"></div>
			</div>

			<div className="currency">
			  <select id="currency-two">

			    {currency_pairs.length>0?
			      currency_pairs.map((item,index)=>{
				return <option onClick={currency2_function}>{item}</option>
			      })
			      :<option>"error"</option>}
			  </select>
			  <input onChange={calculate}  id="amount-two" placeholder="0" />
			</div>
	      </div>
    </div>
	)
}
