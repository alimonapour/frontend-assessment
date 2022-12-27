import React, { useState } from 'react'
import { SaveIcon, ShareIcon, ViewIcon, TrustIcon, LikeIcon } from '../icons'

const DoctorHead = ({ data }) => {
  const [save, setSave] = useState(data.isBookmarked)

  const handleSaveButtonClick = () => {
    setSave(!save)
  }

  const handleShareClick = () => {
    const ShareData = {
      title: data.name,
      url: data.profileUrl,
    }
    window.navigator.share(ShareData)
  }

  let waitingTimeTextArray = [
    'Less than half an hour',
    'Less than an hour',
    'Less than two hours',
    'More than two hours',
  ]
  let waitingTimeText = waitingTimeTextArray[data.waitingTime]

  return (
    <div className='flex border border-[#F1F5F9]'>
      <div className='w-full flex flex-col justify-around rounded p-4 bg-white'>
        <div className='flex items-center justify-between my-1.5'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <SaveIcon fill={save} />{' '}
              <h4
                className='cursor-pointer ml-1 text-xs font-medium'
                onClick={handleSaveButtonClick}
              >
                Save
              </h4>
            </div>
            <div className='flex items-center ml-2'>
              <ShareIcon
                className='cursor-pointer'
                onClick={handleShareClick}
              />
              <h4
                onClick={handleShareClick}
                className='cursor-pointer ml-1 text-xs font-medium'
              >
                Share
              </h4>
            </div>
          </div>

          <div className='flex items-center'>
            <ViewIcon />
            <h4 className='ml-1 text-xs font-medium'>
              {data.viewCount / 100 / 10.0 + 'k'}
            </h4>
          </div>
        </div>

        <div className='flex items-center bg-[#F8FAFC] p-3 rounded'>
          <img
            className='w-24 h-auto rounded-full border-2 border-blue-500'
            src={data.image}
            alt={data.name}
          />
          <div className='flex flex-col ml-3'>
            <div className='flex items-center'>
              <h1 className='text-lg font-bold'>
                {data.name} {data.family}
              </h1>
              <span className='ml-1'>
                {data.satisfaction > 90 &&
                  data.commentsCount >= 100 &&
                  waitingTimeText === 'Less than an hour' && <TrustIcon />}
              </span>
            </div>
            <h1 className='text-base font-light'>{data.expertise}</h1>
          </div>
        </div>
        <div className='flex items-center mx-auto mt-2'>
          <div
            className={
              data.satisfaction > 90
                ? 'flex items-center rounded-3xl py-1 px-2.5 text-white bg-[#16A34A]'
                : 'flex items-center w-16 rounded-3xl py-1 px-2.5 text-white'
            }
          >
            <LikeIcon />
            <span className='ml-0.5 text-xs font-medium'>
              {data.satisfaction}%
            </span>
          </div>
          <h4 className='ml-1 text-sm font-medium'>
            {data.satisfaction > 90 && 'Satisfaction'}{' '}
          </h4>
          <h4 className='ml-1 text-sm font-medium'>
            ({data.commentsCount + ' comments'})
          </h4>
        </div>
      </div>
    </div>
  )
}

export default DoctorHead
