import {Nav} from '../components/navbar'
import{Footer} from '../components/footer'
import styles from '../components/home/home.module.css'






export default function Home (){
    return( 
        <div className={styles.home_container}>
            
            <Nav className={styles.home_container_nav}>
                      
            </Nav> 

                <div >
                    <main className={styles.main_container}>
                       <h1>Main Container</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sapiente, repellendus consequuntur, incidunt eligendi placeat illum harum beatae voluptate ullam cum expedita. Eaque dignissimos vel, sapiente facilis alias consectetur nemo repudiandae doloremque eligendi officiis culpa ducimus? Quaerat cum, aliquid omnis, culpa deleniti voluptates ipsum nobis adipisci nesciunt, illo cumque. Unde vel accusamus quas officiis doloribus quod eum asperiores ducimus cum minus, nam iure iste eligendi molestias beatae facilis optio voluptate perspiciatis at ipsa consequuntur! Ab explicabo repellat architecto minus illum, animi porro odio odit asperiores molestias eum, earum totam assumenda hic necessitatibus voluptatem modi reiciendis eaque voluptate repudiandae. Nostrum aspernatur beatae, nulla aut minus magni quos cumque tempora recusandae ex explicabo nemo qui quidem soluta, reiciendis, at veniam distinctio iusto commodi ipsa? Culpa maiores quisquam deleniti vitae, quo doloremque debitis laboriosam neque, rerum accusantium ex numquam odio ut quis eveniet. Atque, itaque repellendus! Quae rem itaque debitis error laboriosam totam?</p>

                    </main>
                </div>
            
                
                            
                       
                     
            
            
            
            <Footer
            
                className={styles.home_container_footer}>
                
            </Footer>

            <style jsx>
            {`
            *{
                background-color:black;
            }
            
            
            `}
            </style>

        </div>
        

    )
} 