import styles from "./StandardButton.module.css";

function StandardButton({onclick, text}){
    return(
        <div className={styles.btn} onclick={onclick}>
            {text}
        </div>
    );
}

export default StandardButton;