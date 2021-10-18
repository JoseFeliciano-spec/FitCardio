import styles from "./AppBar.module.css";

const AppBar = ()=>{
    return(
        <div>
            <div className={styles.appbar_Ul}>
                <h1 className={styles.title_appbar}>
                    Fit Cardio
                </h1>

                <ul>
                    <li>Ejercicios</li>
                    <li>Entrenadores</li>
                    <li>Precio</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
}

export default AppBar;

