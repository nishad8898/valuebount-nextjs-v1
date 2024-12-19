import Image from 'next/image'
import aboutImage from '@/public/images/home-4-img/aboutCrypto.png'
import TabContent from './TabContent'

const AboutCrypto = () => {
  return (
    <section className=" relative overflow-hidden bg-white pb-150 dark:bg-dark-300 max-md:pb-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative flex items-center justify-center max-md:justify-center">
            <Image
              src={aboutImage}
              alt="crypto image"
              className="max-w-[600px] dark:hidden lg:max-w-[320px] xl:max-w-[420px]"
            />
          </div>
          <div>
            <p className="section-tagline">OUR INDUSTRY EXPERTISE AND SOLUTIONS</p>
            <h2 className="mb-8 max-md:mb-4">
              The world&apos;s best enterprises trust <span className="text-[#FF4500]">Value</span>bound
            </h2>
            <TabContent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCrypto
