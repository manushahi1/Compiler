import "materialize-css/dist/css/materialize.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/Link";
import Dropdown from "../Dropdown";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper ">
        <a href="/" className="brand-logo">
          MnR
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link href="/Signup">
              <a>Sign Up</a>
            </Link>
          </li>

          <li>
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </li>
          <li>
            <Link href="/practice">
              <a>Practice</a>
            </Link>
          </li>

          <li className={styles.dropd}>
            <Dropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
