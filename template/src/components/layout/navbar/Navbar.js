import StandardButton from "../../common/buttons/StandardButton/StandardButton";
import styles from "./Navbar.module.css";

function Navbar(){
    return(
        <div className={styles.navcontainer}>
            <h5>Home</h5>
            <div className={styles.buttoncontainer}>
                <div >
                    <StandardButton text={"login"}/>
                </div>
                <div className={styles.spacer}></div>
            </div>
        </div>
        
        
    );
}

export default Navbar;