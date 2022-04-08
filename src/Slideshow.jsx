import { useEffect, useState } from 'react'

function Slideshow(props) {
const[data, setData]= useState(" ");
  const [btcDesc, setBtcDesc] = useState("");
  const [btcName, setBtcName] = useState("")
  const[btcPrice, setBtcPrice] = useState("")
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(response => response.json())
    .then(data => setBtcDesc(data.description.en))
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then(response => response.json())
    .then(data => setData(data.image.small))
  
    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(response => response.json())
      .then(data => setBtcName(data.name))
  
      fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then(response => response.json())
        .then(data => setBtcPrice("Last Bitcoin Price: $" + data.market_data.current_price.usd))
  
   
  
  return (
    <body>
    
    <div class="container">
      
      <div class="sliderBox">
        
        <img class="logo1" src={data} />
       
      
     
          <div class="btcDesc">
          
        <h1 class="newHeader" >{btcName} </h1>
      
         <p><div dangerouslySetInnerHTML={{ __html: btcDesc}}/></p>
        </div>
       
       
        
        <div class="rightButton">
          
        </div>
        <img class="logo2" src={data} />
      
    </div>
  </div>
      <p class="p-text">{btcPrice}</p>
    <script src="script.js" async defer></script>
  </body>
  )
}

export default Slideshow