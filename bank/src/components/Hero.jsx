import React from 'react'
import styles from '../styles'
import { robot,discount } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='Home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div 
            className='flex flex-row items-center py-[6px] px-[4px] bg-discount-gradient rounded-[10px] mb-2 '>
                <img src={discount} className="w-[32px] h-[32px]"/>
                <p className={`${styles.paragraph}`}>
                    <span className="text-white">20%</span> Discount For {" "}
                   <span className="text-white">2 Months</span> New Accounts

                </p>
            

            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 fonts-poppins fonts-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[42px] text-white'>
                    The Future of<br className='sm:block hidden'/>{" "}<span className='text-gradient'>Mobile Money</span>  
                </h1>
                <div className='ss:flex hidden md:mr-4  mr-0'>
                    <GetStarted/>
                </div>
             

            </div>
            <h1 className=' fonts-poppins fonts-semibold ss:text-[68px] ss:leading-[100px] leading-[75px] text-[42px] text-white w-full'>
                    Transfer.

            </h1>
            <p className={`${styles.paragraph} max-width-[470px] mt-5`}>
                “We will be the preferred provider of targeted financial service<br/>
                 in our communities based on strong customer relationships.<br/>
                 in our communities based on strong customer relationships
            </p>
        </div>
        
    </section>
  )
}

export default Hero