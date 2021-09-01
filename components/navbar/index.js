import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
import iconPic from '../../public/img/icon.png'
import Script from 'next/script'





export function Nav() {
  return (
    <div className={styles.nav_global}>
      <nav className={styles.nav_container}> 
             <div className={styles.logo_container}>
              <Link href="/">
               <a className={styles.logo_container_item} >dsolid_co 

               <Image
                  className = {styles.icon_img}
                  src = {iconPic}
                  alt = "Picture of the author"
                  //width={30} automatically provided
                  //height={30} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // Optionally allows to add a blurred version of the image while loading
                  // placeholder="blur"
               />
               
               
               </a>
               
              </Link>
             
            </div>     
      

            
            
            <div className={styles.items_container}>
              <Link href="/home">
                <a className={styles.nav_item}>HOME</a>
              </Link>
              <Link href="/about">
                <a className={styles.nav_item}>ABOUT</a>
              </Link>
              <Link href="/news">
                <a className={styles.nav_item}>NEWS</a>
              </Link>
              <Link href="/links">
                <a className={styles.nav_item}>LINKS</a>
              </Link>
              <Link href="/contact">
                <a className={styles.nav_item}
                   className={styles.nav_item_contact}
                
                >
                  
                  CONTACT</a>
              </Link>
            </div>

      
      </nav>

    <Script>

      {`
      console.log ('it works!!');
      
      `}
    </Script>
    
    
    </div>    
  
  
  )

}