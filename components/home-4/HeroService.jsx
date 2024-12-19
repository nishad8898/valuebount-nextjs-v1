import { HeroDarkShapeSVG } from '@/data/svgImages'
import FadeUpAnimation from '../animations/FadeUpAnimation'

const HeroService = () => {
  return (
    <section
      className="hero max-mb:pb-[70px] max-mb:pb-[70px] relative overflow-hidden  pb-0 pt-[230px] dark:bg-dark-300 max-lg:pb-25 max-lg:pt-[160px]"
      id="scene">
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <HeroDarkShapeSVG />
      </div>
      <FadeUpAnimation className="container">
        <div className="relative z-10 text-center ">
          <p className="mb-8 font-medium uppercase max-lg:mb-4">CAPABILITIES</p>
          <h1 className="mb-12 max-md:mb-8">
            Unlock business value with scalable <br /> Drupal solutions.
          </h1>
          <p className="mx-auto mb-12 max-w-[590px] max-md:mb-8">
            Unlock business value with scalable Drupal solutions, seamless migrations, and expert support, driving
            innovation at the intersection of people and technology.
          </p>

          <div className="mx-auto flex flex-col items-center justify-center gap-4 md:flex-row">
            <button className="btn">Get Started</button>
            {/* <button className="btn-outline px-1">Get a Demo</button> */}
          </div>
        </div>
      </FadeUpAnimation>
    </section>
  )
}

export default HeroService
