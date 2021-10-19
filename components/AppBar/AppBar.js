import styles from "./AppBar.module.css";
import { useState } from "react";
import {motion} from "framer-motion";


const AppBar = ()=>{

    const [active, setActive] = useState(false);


    /* const x  = ["0%","-20%", "-50%", "-1000%"]; */
    const x = ["0%", "100%"];
   /*  const borderRadius = ["0%", "20%","50%", "100%"]; */
    const variants = {
        open: {
            x: 0,
            /* borderRadius: borderRadius, */
            opacity: 1,
            /* transition: {
                x: { stiffness: 1000, velocity: -100 }
            } */
            transition:{
                x:  {stiffness: 1000, velocity: -100}
            }
        },
        closed: {
            x: "100%",
            transition : {x: { stiffness: 1000}},
           /*  borderRadius: borderRadius.reverse(), */
            opacity: 0
        }
    };

    return(
        <div>
            {
                <motion.div
                    transition={{ duration: 0.5 }}
                    className={styles.drawer}
                    animate={active ? "open" : "closed"}
                    variants={variants}
                >
                    <a
                        onClick={
                            ()=>{setActive(!active)}
                        }
                        style={{
                            background: "white",
                            position: "fixed",
                            right: 0
                        }}    
                    >
                        Cerrar
                    </a>
                </motion.div>
               
            }

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
                <a onClick={()=>{setActive(true)}} className={styles.button_appbar}>
                    menu
                </a>
            </div>
        </div>
    );
}

export default AppBar;

