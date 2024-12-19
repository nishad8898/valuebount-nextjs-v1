'use client'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import { CryptoIconOne, CryptoIconThree, CryptoIconTwo } from '@/data/svgImages'

export const TabItemList = [
  {
    id: 1,
    title: 'Finance',
    description:
      'Secure, Scalable Drupal solutions tailored to the unique needs of the financial sector, ensuring compliance, performance, and seamless Drupal migrations for a future-ready digital experience.',
    itemOneText: 'Secure',
    itemTwoText: 'Scalable',
    itemThreeText: 'Seamless Drupal migrations',
  },
  {
    id: 2,
    title: 'Hi-tech',
    description:
      'Unlock the full potential of Drupal technologies, delivering custom solutions that drive innovation, growth, and exceptional customer satisfaction.',
    itemOneText: 'Innovation',
    itemTwoText: 'Growth',
    itemThreeText: 'Exceptional Customer Satisfaction',
  },
  {
    id: 3,
    title: 'Pharma',
    description:
      'Drupal consulting services that ensure security, regulatory compliance, and seamless integration to enhance data management and user experience in the pharma research industry.',
    itemOneText: 'Security',
    itemTwoText: 'Regulatory Compliance',
    itemThreeText: 'Seamless Integration',
  },
  {
    id: 4,
    title: 'Ed-tech',
    description:
      'Secure, Scalable Drupal solutions tailored to the unique needs of the financial sector, ensuring compliance, performance, and seamless Drupal migrations for a future-ready digital experience',
    itemOneText: 'Accessible',
    itemTwoText: 'Dynamic',
    itemThreeText: 'Secure Platforms',
  },
]

const TabContent = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <>
      <div className="mb-8 rounded-[90px] bg-white p-2.5 shadow-box dark:bg-dark-200">
        <div className=" h-full rounded-large border border-dashed border-gray-100 p-2.5 text-center dark:border-borderColor-dark ">
          <ul className="flex items-center gap-3 overflow-auto">
            {TabItemList.map((tabItem, index) => (
              <li
                className={cn('tab group', selectedTab === index ? 'tab-active' : '')}
                key={tabItem.id}
                onClick={() => setSelectedTab(index)}>
                <span className="cursor-pointer rounded-[60px] border border-borderColor-dark px-5 py-2 font-medium leading-[22px] transition-colors duration-500  hover:bg-paragraph hover:text-white hover:duration-500 group-[.tab-active]:border-paragraph group-[.tab-active]:bg-paragraph group-[.tab-active]:text-white dark:border-borderColor-dark dark:hover:bg-primary dark:hover:text-paragraph dark:group-[.tab-active]:border-primary dark:group-[.tab-active]:bg-primary dark:group-[.tab-active]:text-paragraph ">
                  {tabItem.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="tab-content">
        {TabItemList.map((tabContents, index) => (
          <div className={`${selectedTab === index ? '' : 'hidden'}`} key={tabContents.id}>
            <p className="mb-8 max-md:mb-6">{tabContents.description}</p>
            <ul className="[&>*:not(:last-child)]:mb-6 max-md:[&>*:not(:last-child)]:mb-4">
              {tabContents.itemOneText && (
                <li className="flex items-center gap-x-2 ">
                  <span className="shadow-icon  item-center relative flex justify-center gap-6 rounded-full bg-white dark:bg-dark-200">
                    <CryptoIconOne />
                  </span>
                  <span className="dark:text-white">{tabContents.itemOneText} </span>
                </li>
              )}
              {tabContents.itemTwoText && (
                <li className="flex items-center gap-x-2">
                  <span className=" shadow-icon  item-center relative flex justify-center rounded-full bg-white dark:bg-dark-200">
                    <CryptoIconTwo />
                  </span>
                  <span className="dark:text-white"> {tabContents.itemTwoText} </span>
                </li>
              )}
              {tabContents.itemThreeText && (
                <li className="flex items-center gap-x-2 ">
                  <span className=" shadow-icon  item-center relative flex justify-center rounded-full bg-white dark:bg-dark-200">
                    <CryptoIconThree />
                  </span>
                  <span className="dark:text-white"> {tabContents.itemThreeText} </span>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default TabContent
