import HeroService from '@/components/home-4/HeroService'
import ServiceContent from '@/components/service/ServiceContent'
import MembersCounterService from '@/components/shared/MembersCounterService'
import NewsLetter from '@/components/shared/NewsLetter'
import ServiceList from '@/data/serviceData'

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  }
}

export async function generateStaticParams() {
  const { ServiceData } = ServiceList
  return ServiceData.map((item) => ({
    slug: item.slug,
  }))
}

const ServiceDetails = (props) => {
  const { ServiceData } = ServiceList
  const slug = props.params.slug
  const data = ServiceData.find((post) => post.slug === slug)

  return (
    <main>
      <HeroService />
      <ServiceContent data={data} />
      <MembersCounterService />
      <NewsLetter />
    </main>
  )
}

export default ServiceDetails
