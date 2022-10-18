import React from 'react';
import styles from './style';
import {Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials,} from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden text-white'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats className='hidden_state'/>
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials className='hidden_state'/>
          <Clients className='hidden_state'/> 
          <CTA className='hidden_state'/> 
          <Footer /> 
        </div>
      </div>
    </div>
  )
}

export default App