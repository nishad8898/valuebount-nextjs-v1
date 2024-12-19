'use client'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const ServiceContent = ({ data }) => {
  const [modal, setModal] = useState(false)
  const openModal = (e) => {
    e.preventDefault()
    setModal(!modal)
  }

  return (
    <>
      {modal ? (
        <div className="modal-bg">
          <div className="modal-align">
            <div className="modal-content">
              <span className="modal-close" onClick={openModal}>
                <FontAwesomeIcon icon={faX} />
              </span>
              <div className="modal-video-align">
                <ReactPlayer url={data.videoLink} className="modal-video-item" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <section className="relative pb-150 pt-[0px] max-md:overflow-hidden max-md:pb-20 max-md:pt-10">
        <div className="absolute -top-8 left-0 right-0 h-full w-full bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70 sm:hidden"></div>
        <div className="container relative z-10 mx-auto" style={{ width: '55%' }}>
          <div className="grid auto-rows-max gap-y-15 max-md:gap-8">
            <div className="relative">
              <div className="singlePage relative max-md:mt-20">
                <h2>{data.title}</h2>
                <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                  <Image
                    src={data.featureImage}
                    alt="service images"
                    className="w-full rounded"
                    width={788}
                    height={450}
                  />
                </div>
                <p>{data.serviceDetailsOne}</p>
                <p>{data.serviceDetailsTwo}</p>

                <h3>What to Expect</h3>
                <p dangerouslySetInnerHTML={{ __html: data.serviceExpectation }} />
                <ul>
                  {data.serviceExpectationList &&
                    data.serviceExpectationList.map((items, index) => <li key={index}> {items.item} </li>)}
                </ul>

                <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                  <Image
                    src="/images/services/video-bg.png"
                    alt="service images"
                    className="w-full rounded"
                    width={788}
                    height={450}
                  />
                </div>

                <h3>Seamless Drupal Solutions</h3>
                <p dangerouslySetInnerHTML={{ __html: data.serviceQualifications }} />
                <ul>
                  {data.serviceQualificationsList &&
                    data.serviceQualificationsList.map((items, index) => <li key={index}> {items.item} </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceContent
