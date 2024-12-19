'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import imageOnlineValueDark from '@/public/images/about/onlinePayment-dark.png'
import imageOnlineValue from '@/public/images/about/onlinePayment.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const CoreValueAnimation = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <motion.div
      className="relative flex items-center justify-end max-md:justify-center"
      ref={ref}
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}>
      <Image
        src={imageOnlineValue}
        alt="banking image"
        className="max-w-[250px] dark:hidden lg:max-w-[320px] xl:max-w-[420px]"
      />
      <Image
        src={imageOnlineValueDark}
        alt="banking image"
        className="hidden max-w-[250px]  dark:inline-block lg:max-w-[320px] xl:max-w-[420px]"
      />
      <div className="absolute bottom-8 left-0 right-auto top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px]"></div>
    </motion.div>
  )
}

export default CoreValueAnimation
