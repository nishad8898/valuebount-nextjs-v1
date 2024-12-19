import AboutCoreValue from '@/components/about/AboutCoreValue'
import AboutDetails from '@/components/about/AboutDetails'
import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import CallToAction from '@/components/shared/CallToAction'
import Counter from '@/components/shared/Counter'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import TestimonialSlider from '@/components/shared/TestimonialSlider'
import AboutFeature from '@/data/aboutFeaturesData'

export const metadata = {
  title: 'About',
}
const About = () => {
  const { AboutFeaturesData } = AboutFeature
  return (
    <main>
      <section className="hero relative overflow-hidden pb-[60px] pt-[240px] max-lg:pt-150">
        <div className="container">
          <FadeUpAnimation className="mx-auto text-center">
            <p className="mb-4 font-medium uppercase">ABOUT COMPANY</p>
            <h1 className="mb-10 max-lg:mb-10">
              Redefining Enterprise Solutions with Drupal at{' '}
              <span>
                <span className="text-[#FF4500]">Value</span>bound
              </span>
            </h1>
            <p className="mx-auto mb-12 max-w-[680px] max-lg:mb-10">
              Combining innovation with human potential to create transformative success for our clients.
            </p>
          </FadeUpAnimation>
        </div>
      </section>
      <AboutDetails />
      <PaymentFeatures
        features={AboutFeaturesData}
        sectionTag={'OUR VALUE'}
        sectionTitle={'Our business is steered by our core values'}
        className={'relative bg-white py-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25'}
      />
      <AboutCoreValue />
      <TestimonialSlider />
      <Counter />
      <CallToAction title="Start your Drupal Transformation Today!" />
    </main>
  )
}

export default About
