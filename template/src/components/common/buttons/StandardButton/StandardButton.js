import styles from "./StandardButton.module.css";

function StandardButton({onClick, text}){
    return(
        <div className={styles.btn} onClick={onClick}>
            {text}
        </div>
    );
}

export default StandardButton;