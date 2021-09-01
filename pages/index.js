
import Head from 'next/head'
import Layout from '../components/layout'




import {Nav} from '../components/navbar'
import styles from '../components/index.module.css'




function HomePage (){
    return( 
        
       
    
    
    <div className={styles.container_index}>
       
        
            <Head>
                <title>dc-solid-index</title>
                <link rel="icon" href="../public/img/icon.png"
          />

            </Head>
            
        
           
            <Nav></Nav>
            
   
      
    </div>
      
    )
   


 
}
export default HomePage



