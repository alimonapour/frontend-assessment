import { useEffect, useState } from 'react'
import DoctorHead from './components/DoctorHead/DoctorHead'
import Service from './components/service'
import logo from './logo.svg'

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/profile.json')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  if (!data) return null
  return (
    <div className='h-screen bg-slate-100'>
      <header className='flex h-16 bg-white opacity-60'>
        <div className='container flex items-center justify-between mx-auto'>
          <div className='flex items-center gap-2'>
            <img src={logo} alt='' />
            <div className='w-20 h-3 rounded-full bg-slate-100' />
          </div>
          <nav className='flex gap-5'>
            <div className='w-20 h-3 rounded-full bg-slate-100' />
            <div className='w-20 h-3 rounded-full bg-slate-100' />
            <div className='w-20 h-3 rounded-full bg-slate-100' />
          </nav>
          <div className='rounded-md w-28 h-9 bg-slate-100' />
        </div>
      </header>
      <main className='container grid grid-cols-3 pt-10 mx-auto gap-7'>
        <div className='flex flex-col col-span-2 gap-5'>
          <DoctorHead data={data} />
          <div className='bg-white rounded-lg h-96 bg-opacity-60' />
          <div className='h-56 bg-white rounded-lg bg-opacity-60' />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='bg-white rounded-lg bg-opacity-60 h-52' />
          <Service waitingTime={data?.waitingTime} />
        </div>
      </main>
    </div>
  )
}

export default App
