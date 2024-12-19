'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import accountProcess from '@/public/images/home-4-img/account-process.png'
import rightArrowDark from '@/public/images/home-4-img/account-right-arrow-dark.png'
import rightArrow from '@/public/images/home-4-img/account-right-arrow.png'
import accountSolutions from '@/public/images/home-4-img/account-solutions.png'
import account from '@/public/images/home-4-img/account.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const ProcessInstallation = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)

  const processItems = [
    {
      id: 1,
      lightImg: account,
      darkImg: account,
      title: 'Discover and strategy',
      arrow: rightArrow,
      darkArrow: rightArrowDark,
    },
    {
      id: 2,
      lightImg: accountProcess,
      darkImg: accountProcess,
      title: 'Design and Develop',
      arrow: rightArrow,
      darkArrow: rightArrowDark,
    },
    {
      id: 3,
      lightImg: accountSolutions,
      darkImg: accountSolutions,
      title: 'Deploy and Support',
    },
  ]

  return (
    <section className="container mt-20 pt-10">
      <motion.div
        className="mx-auto mb-25 max-w-[620px] text-center"
        initial="initial"
        animate={controlAnimation}
        ref={ref}
        variants={fadeUpAnimation}>
        <p className="section-tagline">Process</p>
        <h2 className="mb-8">Follow the minimalistic process of exceptional Drupal solutions</h2>
      </motion.div>
      <motion.div
        className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-25 md:gap-5 lg:gap-12"
        initial="initial"
        animate={controlAnimation}
        ref={ref}
        variants={fadeUpAnimation}>
        {processItems?.map((process) => (
          <div key={process.id} className="flex items-center gap-5">
            <figure className="relative flex h-[110px] w-[110px] shrink-0 scale-100 items-center justify-center rounded-full bg-white p-2.5 shadow-nav  transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200 max-lg:p-2 ">
              <div className="h-full rounded-full border border-dashed border-gray-100 p-6 dark:border-gray-100 dark:border-opacity-15 max-lg:p-5">
                <Image
                  src={process.lightImg}
                  width={40}
                  height={40}
                  placeholder="blur"
                  alt="account Light"
                  className="inline-block  dark:hidden"
                />
                <Image
                  src={process.darkImg}
                  width={40}
                  height={40}
                  placeholder="blur"
                  alt="account Dark"
                  className="hidden  dark:inline-block"
                />
              </div>
            </figure>
            <h3 className="leading-8">{process.title}</h3>
            <div className="h-auto w-12">
              {process.arrow && (
                <>
                  <Image
                    src={process.arrow}
                    alt="Arrow Icon"
                    width={100}
                    height={100}
                    quality={60}
                    className="h-full w-full dark:hidden"
                  />
                  <Image
                    src={process.darkArrow}
                    alt="Arrow Icon"
                    width={100}
                    height={100}
                    quality={60}
                    className="hidden h-full w-full dark:inline-block "
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default ProcessInstallation
