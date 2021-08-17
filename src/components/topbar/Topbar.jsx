import "./topbar.scss";
import { useParams } from "react-router";
export default function Topbar(props) {

  const { id } = useParams();

  return (
    <div className={"topbar " + (props.menuOpen && "active")}>

      <div className="wrapper">
        <div className="left">
           <div className="itemContainer">
            
            
            <img className="logoPic" src="images/jumia-logo.png" alt="logo" />
            

          </div>
          <div className="logo">G H A N D R I</div>
          <div className="itemContainer">
            <i class=" icon fas fa-id-badge"></i>
            <span className="contentTag">{id}</span>

          </div>
          
        </div>
        <div className="right">

          <div className="hamburger" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          

        </div>
      </div>
      
    </div>
  )
}
