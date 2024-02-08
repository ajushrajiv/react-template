import { Link } from "react-router-dom";
import StandardButton from "../../common/buttons/StandardButton/StandardButton";
import styles from "./Navbar.module.css";

function Navbar(){
    const handleClick = () => {
        alert("Hello from the login button");
    }

    return(
        <div className={styles.navcontainer}>
            <Link to="/">Home</Link>
            <Link to="info">Info</Link>
            <div className={styles.buttoncontainer}>
                <div >
                    <StandardButton text={"login"} onClick={handleClick}/>
                </div>
                <div className={styles.spacer}></div>
            </div>
        </div>   
    );
}

export default Navbar;