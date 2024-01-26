import Container from '@/components/Container'
import BatteryReplacement from '@/components/homeUi/BatteryReplacement'
import useScrollGrow from '@/hooks/useScrollGrow'
import React from 'react'
import {motion} from "framer-motion"
import ChipsetReplacement from './ChipsetReplacement'
import DataRecovery from './DataRecovery'
import StorageReplacement from './StorageReplacement'

const ServicesSection = () => {
      const {componentRef,style}=useScrollGrow()

  return (
    <Container>
      <div className='text-center my-20'>
            <h1 className='text-5xl font-bold'>Services that we provide</h1>
            <p className='mt-10 mb-20 max-w-[80ch] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex, esse aspernatur modi facilis dolore laboriosam totam recusandae minima iure!</p>
      </div>
      <div className='grid grid-cols-12 gap-4'>
            <BatteryReplacement></BatteryReplacement>
           <ChipsetReplacement/>
            <DataRecovery></DataRecovery>
            <StorageReplacement/>
            <motion.div style={style}
      ref={componentRef} className='bg-rose-500/70 h-[150px] lg:h-[415px] rounded-sm col-span-4'></motion.div>
            <motion.div style={style}
      ref={componentRef} className='bg-rose-500/70 h-[150px] lg:h-[415px] rounded-sm col-span-4'></motion.div>
            <motion.div style={style}
      ref={componentRef} className='bg-rose-500/70 h-[150px] lg:h-[415px] rounded-sm col-span-4'></motion.div>
           
      </div>
    </Container>
  )
}

export default ServicesSection