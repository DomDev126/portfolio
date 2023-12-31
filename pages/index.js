/* eslint-disable */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Email, Twitter, Dribbble, LinkedIn, Github, Arrow } from '../components/icons'

export default function Home() {



  return (
    <div className={styles.container}>
      <Head>
        <title>Panshak Solomon - Conservation | Urban Ecology | Citizen Science </title>
        <meta name="description" content="Panshak Solomon - Conservation Biologist / Software Developer" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="panshak" data-color="#FFDD00" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
       Panshak S.K.
        </h1>

        <p className={styles.description}>
        My resaerch interests focus mainly on urban ecology and citizen science. I have been conducting field surveys, analyzing large datasets, and utilizing GIS and statistical software to contribute to the scientific understanding of urban ecosystems. 
       <span>
       <a style={{color: '#0070F3', paddingRight: '8px'}} href="https://doi.org/10.1016/j.ufug.2021.127092" target="_blank"> You can read my recent publication here.</a>
       </span>
       I currently work with the A.P. Leventis Ornithological Research institute at the University of Jos Biological Conservatory.
        In my free time, I love to build tools for biodiversity conservation.
        </p>
       
       <div className={styles.avatar}>
          <img className={styles.picture} src="https://i.postimg.cc/Qd7QjBr5/Peekay2.jpg" alt="Panshak Solomon" />
       </div>


        {/* <div>
            <Projects />
        </div> */}

        {/* <div className={styles.buttonContainer}>
          <a className={styles.button} href="https://www.scrept.com" target="_blank">View Portfolio <span><Arrow /></span> </a>
        </div> */}

      <div className={styles.socials}>
          <ul className={styles.autoGrid}>

          {/* <a target="_blank" href="https://github.com/Panshak" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <Github />
              </li>
            </a> */}

            <a target="_blank" href="mailto:ipanshak@gmail.com" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <Email />
              </li>
            </a>

            <a target="_blank" href="https://linkedin.com/in/Panshak" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <LinkedIn />
              </li>
            </a>

            {/* <a target="_blank" href="https://dribbble.com/panshak" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <Dribbble />
              </li>
            </a> */}


            <a target="_blank" href="https://twitter.com/panshak_" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <Twitter />
              </li>
            </a>

          </ul>

      </div>

      </main>

      <footer className={styles.footer}>
        <p>©Panshak Solomon</p>
        
      </footer>
    </div>
  )
}
