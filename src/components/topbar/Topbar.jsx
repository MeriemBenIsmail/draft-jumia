import "./topbar.scss";

export default function Topbar(props) {
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
            <span className="contentTag">563-GH ---- Tarek Bergachi</span>

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
