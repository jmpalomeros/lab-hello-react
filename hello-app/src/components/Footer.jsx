import imgIcon1 from "../images/icon1.png"
import imgIcon2 from "../images/icon2.png"
import imgIcon3 from "../images/icon3.png"
import imgIcon4 from "../images/icon4.png"

function Footer() {
  return (
    <div className="cards">
    <div><img src={imgIcon1} alt="icon1" /> 
    <h5>Declarative</h5>
    <p>React makes it painless to create interactive UIS</p>
    </div>
    <div><img src={imgIcon2} alt="icon2" /> 
    <h5>Components</h5>
    <p> Build encapsulated components that manage their state  </p>
    </div>
    <div><img src={imgIcon3} alt="icon3" /> 
    <h5>Single-Way</h5>
    <p> A set of immutable values are passed to the component´s   </p>
    </div>
    <div><img src= {imgIcon4} alt="icon4"/>
    <h5>JSX</h5> 
    <p>Statically-typed, designed to run on modern browsers </p>
    </div>
    
    
    
    </div>
  )
}

export default Footer