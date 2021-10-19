import styles from "./MainContent.module.css";
import {motion} from "framer-motion";

const MainContent = ()=>{
    return (
        <div>
            <motion.div 
                className={styles.container_tag}
                initial={{
                    x: -200,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    animationIterationCount: "infinite",
                    transition: {
                        x: {
                            velocity: -100,
                            stiffness: 1000
                        }
                    },
                    opacity: 1
                }}
                transition={{
                    duration: .2,
                }}
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
        </div>
    )
}

export default MainContent;