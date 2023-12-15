// NAV BAR

// import { Link } from 'react-router-dom';
// import Logo from '../../images/Logo/Logo.png';
// import IconProfile from '../../images/icons/IconProfile/IconProfile.png';
import './NavBar.css'

export default function NavBar() {

  return (
    <nav id="navbar">
      <a href="/home" className="navbar-brand">
        Home
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href="/pdfs" className="navbar-brand">
        PDFs
      </a>
    </nav>
  );
}