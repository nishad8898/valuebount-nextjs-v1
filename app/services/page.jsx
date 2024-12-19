import HeroService from '@/components/home-4/HeroService'
import ServiceContent from '@/components/service/ServiceContent'
import MembersCounterService from '@/components/shared/MembersCounterService'
import NewsLetter from '@/components/shared/NewsLetter'
import ServiceList from '@/data/serviceData'

const ServicePage = () => {
  const { ServiceData } = ServiceList
  const data = ServiceData.find((post) => post.slug === 'capabilities')

  return (
    <main>
      <HeroService />
      <ServiceContent data={data} />
      <MembersCounterService />
      <NewsLetter />
    </main>
  )
}

export default ServicePage
