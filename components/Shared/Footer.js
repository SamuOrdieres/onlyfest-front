import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'



export default function Footer() {

    return(

        <footer className={styles.footer}>
        <a
          href="https://samuordieres.com?utm_source=onlyfest&utm_medium=onlyfest-web&utm_campaign=footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by:{' '}
          <span className={styles.logo}>
            <Image src="https://onlyfest.es//images/logo-black-horizontal.png" alt="OnlyFest Logo" width={72} height={36} />
          </span>
        </a>
      </footer>

    )
}
