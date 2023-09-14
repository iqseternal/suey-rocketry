
declare global {
  var React: any;
}


import banner1 from '../../../public/banner1.jpg';
import styles from './index.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <p>
            <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.bTTn1-D9WG6TCaI-9t9iDQAAAA?w=149&h=150&c=7&r=0&o=5&pid=1.7" alt="" />
          </p>
          <h1>Rocketry</h1>
          <h2>Providing Rocket like Power for Creation.</h2>
          <p>
            <button>Component</button>
            <button className={styles.guide}>Guide</button>
          </p>
        </div>
      </div>
      <div className={styles.content}>

      </div>
    </>
  )
}

