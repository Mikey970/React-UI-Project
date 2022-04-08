import { useEffect, useState } from 'react'

function Polkaslide(props) {
const[polkaData, setPolkaData]= useState(" ");
  const [polkaDesc, setPolkaDesc] = useState("");
  const [polkaName, setPolkaName] = useState("")
  const[polkaPrice, setPolkaPrice] = useState("")

  fetch("https://api.coingecko.com/api/v3/coins/polkadot")
    .then(response => response.json())
    .then(data => setPolkaDesc(data.description.en))
  
  fetch("https://api.coingecko.com/api/v3/coins/polkadot")
  .then(response => response.json())
    .then(data => setPolkaData(data.image.small))
  
    fetch("https://api.coingecko.com/api/v3/coins/polkadot")
    .then(response => response.json())
      .then(data => setPolkaName(data.name))
  
      fetch("https://api.coingecko.com/api/v3/coins/polkadot")
      .then(response => response.json())
        .then(data => setPolkaPrice("Last Polkadot Price: $" + data.market_data.current_price.usd))
  
  
   
  
  return (
    <body>
    
    <div class="container">
      
      <div class="sliderBox">
        <img class="logo1" src={polkaData} />
        
          <div class="btcDesc">
          <h1 class="newHeader" >{polkaName} </h1>
            <p dangerouslySetInnerHTML={{ __html: polkaDesc}}/>
        </div>
        <div class="rightButton">
  
        </div>
        <img class="logo2" src={polkaData} />
      
    </div>
  </div>
      <p class="p-text">{polkaPrice}</p>
    <script src="script.js" async defer></script>
  </body>
  )
}

export default Polkaslide