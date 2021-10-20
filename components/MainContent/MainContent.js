/* eslint-disable jsx-a11y/alt-text */
import styles from "./MainContent.module.css";
import {motion} from "framer-motion";
import image01 from "../../assets/png/01.png"; 
import Image from 'next/image';

const CardContent = ({marginTop = 0, colorText, textPrimary, textSecondary}) => {
    console.log(marginTop);
    return(
        <div 
            style={{
                width: "150px",
                height: "90px",
                background: "#181818",
                borderRadius: "1.5rem",
                marginTop: `${marginTop}rem`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingLeft: "1.5rem",
                zIndex: 101
            }}
        >
            <h3
                style={{
                    width: "100%",
                    textAlign: "start",
                    color : `${colorText}`,
                    fontSize: "30px"
                }}
            >
              {textPrimary}
            </h3>
            <p 
                style={{
                    width: "100%",
                    color: "#fff",
                    opacity: 0.6,
                    textAlign: "start"
                }}
            >
                {textSecondary}
            </p>
        </div>
    );
}

const MainContent = ()=>{
    return (
        <div>
            <motion.div 
                className={styles.container_tag}
                initial={{
                    x: -200,
                    opacity: 0,     
                }}
                animate={{
                    x: 0,
                    transition: {
                        x: {
                            velocity: -100,
                            stiffness: 1000,
                            delay: 0.08
                        },
                        /*   */
                    },
                    opacity: 1,
                }}
                /* transition={{
                    duration: 1,
                }} */
            >
                <div className={styles.tag}>
                    <p>
                        {"new".toUpperCase()}
                    </p>
                </div>
                <p className={styles.description_tag}>
                    Alta intencidad y bajando calorías
                </p>
            </motion.div>

            <div className={styles.body_mainContent}>
                <h2>
                    Ejercicio Cardio
                </h2>
                <div className={styles.imageContainer_mainContent} >
                    <Image 
                        src={image01}
                        layout="fixed"
                        width={400}
                        height={500}
                        className="image_mainContent"
                    />
               </div> 
                <div className={styles.column_mainContent}>
                    <CardContent
                        colorText="#FAE654"
                        textPrimary="38:15"
                        textSecondary="Tiempo"
                    >
                    </CardContent>
                    <CardContent
                        colorText="#E22054"
                        textPrimary="165"
                        marginTop={0.5}
                        textSecondary="Calorias"
                    >
                    </CardContent>
                </div>
            </div>
        </div>
    )
}

export default MainContent;