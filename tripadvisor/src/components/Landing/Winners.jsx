import styles from "./Landing.module.css"
import winner_logo from "../../images/Winners/winner_logo.svg"
import green_part from "../../images/Winners/green_part.png"

export const Winners = () => {
    return(<>
        
        <div className={styles.fillwidth}>

           <div className={styles.lftptt}>
           <img className={styles.lftptt_img} src={winner_logo} alt="Winner"/>
           <h2 className={styles.lftptt_h2}>Travellers' Choice Best of the Best</h2>

               <div className={styles.itemfit_algtp}> <a  className={styles.lftptt_button}>See the winners</a>
               </div>
           </div>
          
             
           <div className={styles.rgt}>
           <img className={styles.rgtptt_img} src={green_part} alt="Winner"/>
           </div>
        </div>

        <div>
            
        </div>
  

    </>    
    )
}