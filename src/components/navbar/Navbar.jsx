import './navbar.css';
import {Link} from 'react-router-dom';

export default function Header(props) {

  return (
    <>
        <nav className="navbar">

            <div className="navbar-container">

                <Link to="/" className="navbar-logo">

                  <img className="logopic" src="images/jumia-logo.png" alt="" />
                  <span>GHANDRI </span> 
                  
                </Link>


                <ul className='nav-menu'>

                  <li className="nav-item">
                    <Link to="/" className="nav-links">
                      {props.id}
                    </Link>

                  </li>

                </ul>
            </div>

        </nav>
        

    </>
  )
}