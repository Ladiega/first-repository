import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css'
import footericonPic from '../../public/img/icon.png'
import footericonPic2 from '../../public/img/instaLogo.png'



export function Footer(){
    return(
       
       <div className={styles.global_footer}>
       
                <footer className={styles.footer_container}
                        className={styles.footer_icons}>
                        <div className="imgfooter1_container">
                            <Link href="https://dsolid.co/" >
                                <a  >
                                        <Image 
                                                
                                                className={styles.footer_icon_img1}
                                                
                                                src={footericonPic}
                                                alt="ds-logo"
                                                width={30}
                                                height={30}
                                        />
                                    
                                </a>
                            </Link>
                        </div>
                                <div className="imgfooter2_container" 
                                     className={styles.footer_icons}>
                                    <Link href="https://www.instagram.com/dsolid_co/" >
                                    <a  >
                                        <Image 
                                                
                                               
                                                className={styles.footer_icon_img2}
                                                
                                                src={footericonPic2}
                                                alt="instaLogo"
                                                width={30}
                                                height={25}
                                                
                                        />
                                    
                                    </a>
                                    </Link>
                                </div>


                    
                    
                


                </footer>
    </div>        
    )
}