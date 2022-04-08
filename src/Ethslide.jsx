import { useEffect, useState } from 'react'

function Ethslide(props) {
const[ethData, setEthData]= useState(" ");
  const [ethDesc, setEthDesc] = useState("");
  const [ethName, setEthName] = useState("");
  const[ethPrice, setEthPrice] = useState("")
  fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(response => response.json())
    .then(data => setEthDesc(data.description.en))
  fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then(response => response.json())
    .then(data => setEthData(data.image.small))
  
    fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(response => response.json())
      .then(data => setEthName(data.name))
  
      fetch("https://api.coingecko.com/api/v3/coins/ethereum")
      .then(response => response.json())
        .then(data => setEthPrice("Last Eth Price: $" + data.market_data.current_price.usd))
  
       
  
  return (
    <body>
    
    <div class="container">
      
      <div class="sliderBox">
        
        <img class="logo1" src={ethData} />
       
        
     
          <div class="btcDesc">
          <h1 class="newHeader" >{ethName} </h1>
            <p dangerouslySetInnerHTML={{ __html: ethDesc}}/>
        </div>
       
       
        
        <div class="rightButton">
          
        </div>
        <img class="logo2" src={ethData} />
      
    </div>
  </div>
      <p class="p-text">{ethPrice}</p>
    <script src="script.js" async defer></script>
  </body>
  )
}

export default Ethslide