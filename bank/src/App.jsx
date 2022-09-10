import React from 'react'
import styles from './styles'
import {Button,Business,Billing,CTA,CardDeal,Clients,FeedbackCard,Footer,GetStarted,Hero,Navbar,Stats,Testimonials,} from './components'

function App() {
  return(
    <div className=" bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>

        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>

        </div>

      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

          <Business/>
          
          <Testimonials/>
          <CTA/>
          <Billing/>
          <CardDeal/>
          <Clients/>
          <Stats/>
          <FeedbackCard/>
          <Footer/>

        </div>

      </div>
    </div>

)
}

export default App