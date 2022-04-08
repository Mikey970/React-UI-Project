import { useEffect, useState } from 'react'

function Dogeslide(props) {
const[dogeData, setDogeData]= useState(" ");
  const [dogeDesc, setDogeDesc] = useState("");
  const [dogeName, setDogeName] = useState("")
  const[dogePrice, setDogePrice] = useState("")
  fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(response => response.json())
    .then(data => setDogeDesc(data.description.en))
  
  fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then(response => response.json())
    .then(data => setDogeData(data.image.small))
  
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(response => response.json())
      .then(data => setDogeName(data.name))
  
      fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
      .then(response => response.json())
        .then(data => setDogePrice("Last Doge Price: $" + data.market_data.current_price.usd))
  
   
  
  return (
    <body>
    
    <div class="container">
      <div class="sliderBox">
        <img class="logo1" src={dogeData} />
        
     
          <div class="btcDesc">
          <h1 class="newHeader" >{dogeName} </h1>
            <p dangerouslySetInnerHTML={{ __html: dogeDesc}}/>
          </div>

          <div class="rightButton">
          </div>
          <img class="logo2" src={dogeData} />
      
    </div>
  </div>
      <p class="p-text">{dogePrice}</p>
    <script src="script.js" async defer></script>
  </body>
  )
}

export default Dogeslide