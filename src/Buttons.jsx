import { BrowserReact as Router } from 'react-router-dom'
import { Link, Routes, Route } from "react-router-dom"
function Buttons(props) {

  return(
  <div class="topButtons">
      <ul class="buttonList">
   <li class="listItem"><button class="buttonItem leftButton"><Link to='/bitcoin' class="linkItem"> Bitcoin</Link></button></li>
   <li class="listItem"><button class="buttonItem buttonRight"><Link to='/ethereum' class="linkItem">Ethereum</Link></button></li>
   <li class="listItem"><button class="buttonItem button3"><Link to='/dogecoin'class="linkItem" >Dogecoin</Link></button></li>
   <li class="listItem"><button class="buttonItem button4" ><Link to='/polkadot' class="linkItem">Polkadot</Link></button></li>
 </ul>

    </div>
  )
}

export default Buttons

