import Link from 'next/link'
import styles from '../components/styles.module.css'
import Image from 'next/image'
import profilePic from '../public/img/icon.png'


export default function Home(){
    return(
        <div className={styles.hello}>
            <Link href="/">
                <a className={styles.p}>Back To Home</a>
            
            </Link>


            
            <p >Home Page dsolid Demo-Nextj.s</p>

        <div>
        <>
      <h1>My Homepage</h1>
      <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // Optionally allows to add a blurred version of the image while loading
        // placeholder="blur"
      />
      <p>Welcome to my homepage!</p>
    </>

        </div>
        
        
        
        </div>
        

  
    )
}


