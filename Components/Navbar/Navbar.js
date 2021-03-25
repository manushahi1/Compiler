import "materialize-css/dist/css/materialize.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/Link";
import Dropdown from "../Dropdown";
import styles from "./Navbar.module.css";
// import { redirect } from "next/dist/next-server/server/api-utils";
// import { getRedirectStatus } from "next/dist/lib/load-custom-routes";

function Navbar(props) {
  // const[login_status,update_l_s]=useLocalStorage(
  //   "login_status",[loginn, logoutt]
  // );
  // const onClick=()=>{
  //   if(login_status===loginn){
  //    return <redirect to="/practice"></redirect>


  //   }else if(login_status===logoutt){
  //     return <redirect to="/login"></redirect>

  //   }
  // }
  // const [authTokens, setAuthTokens] = useState();

  // const setTokens = (data) => {
  //   localStorage.setItem("authTokens", JSON.stringify(data));
  //   setAuthTokens(data);
  // }

  // useEffect(()=> {
  //   let jsonToken = localStorage.getItem('authTokens', JSON.stringify(authTokens))
  //   console.log('JSON TOKEN  -----' + jsonToken)
  //   setAuthTokens(jsonToken)
  // })
  const selectedlang = (lang) => {
    console.log('recived from child', lang)
    props.lan(lang);
  }
  
  return (
    <nav>
      <div className="nav-wrapper ">
        <a href="/" className="brand-logo">
          MnR
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link href="/Signup">
              <a>Sign Up/Login</a>
            </Link>
          </li>

          {/* <li>
            <Link  href="/login">
              <a>Sign In</a>
            </Link>
          </li> */}
          <li>
            <Link
            //  onClick={ ()=>onClick}  
             href="/practice">
              <a>Practice</a>
            </Link>
          </li>

          <li className={styles.dropd}>
            <Dropdown 
             selectedlang = {selectedlang}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
