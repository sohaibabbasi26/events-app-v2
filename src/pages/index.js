
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage/main';


const inter = Inter({ subsets: ['latin'] })

export default function Home({Component, pageProps}) {
  return (
    <div className={styles.body}>
        {/* <NavbarHome />
        <Body /> */}
        <HomePage />
    </div>
  )
}
