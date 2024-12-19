import { cn } from '@/utils/cn'
import getMarkDownData from '@/utils/getMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const FinancialBlog = ({ className = 'dark:bg-dark pb-150 pt-150' }) => {
  const blogs = getMarkDownData('content/blogs')

  return (
    <section className={cn('relative bg-white max-md:pb-20', className)}>
      <div className="absolute left-0 right-0 top-1/2 h-full w-full -translate-y-1/2 bg-[url('/images/service-bg.png')] bg-[length:600px_1800px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">Financial blog tips and tricks</p>
          <h2>Our recent news & insights</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:flex-col">
            <div className="h-[350px] w-[350px] rounded-full bg-[url('/images/hero-gradient.png')] blur-[80px] lg:h-[442px] lg:w-[442px] lg:blur-[145px] "></div>
            <div className="h-[350px] w-[350px] rounded-full bg-[url('/images/hero-gradient.png')] blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
            <div className="h-[350px] w-[350px] rounded-full bg-[url('/images/hero-gradient.png')] blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
          </div>
          <div className=" grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {blogs?.slice(0, 3).map((blogItems) => (
              <article
                className="cursor-pointer rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
                key={blogItems.slug}>
                <div className="h-full rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                  <Image
                    src={blogItems.data.thumbnail}
                    alt="service logo"
                    className="mb-6 w-full rounded-md"
                    width={339}
                    height={198}
                  />
                  <div>
                    <Link href={`/tags/${blogItems.data.tags}`} className="badge">
                      {blogItems.data.tags}
                    </Link>
                    <Link href={`/blog/${blogItems.slug}`} className="block">
                      <h3 className="mb-3 font-semibold leading-[1.33]">{blogItems.data.title}</h3>
                    </Link>
                    <div className="mb-4 flex items-center gap-x-2 ">
                      <p>{blogItems.data.author}</p>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                          <circle cx="2.5" cy="3" r="2.5" fill="" className="fill-[#D8DBD0] dark:fill-[#3B3C39]" />
                        </svg>
                      </span>
                      <p>{blogItems.data.date}</p>
                    </div>
                    <ReactMarkdown>{blogItems.content.slice(0, 70)}</ReactMarkdown>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialBlog
