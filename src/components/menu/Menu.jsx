import "./menu.scss";
import { useParams } from "react-router";
export default function Menu(props) {
  const { id } = useParams();
  return (
    <div className={"menu " + (props.menuOpen && "active")}>
      <ul>
        <li>
          <i class="fas fa-id-badge"></i>
          <span>{id}</span>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <i class="fas fa-motorcycle"></i>
          <a href="#hero">Performance</a>
        </li>

        <li onClick={()=>props.setMenuOpen(false)}>
          <i class="fas fa-percentage"></i>
          <a href="#tables">Tableaux Comparatifs</a>
        </li>
      
      </ul>
    
      
    </div>
  )
}
