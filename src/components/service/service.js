import Button from '../button/button'

export const Service = ({ waitingTime }) => {
  let waitingTimeTextArray = [
    'Less than half an hour',
    'Less than an hour',
    'Less than two hours',
    'More than two hours',
  ]
  let waitingTimeText = waitingTimeTextArray[waitingTime]

  return (
    <div className='flex flex-col gap-4 p-5 bg-white rounded-lg shadow-sm'>
      <h2 className='pb-3 font-bold border-b border-solid border-slate-200'>
        Online Appointments
      </h2>
      <ul className='relative pl-3 flex flex-col gap-1 text-sm before:content before:w-[2px] before:h-full before:bg-slate-200 before:absolute before:left-0'>
        <li>The possibility of getting the earliest appointment</li>
        <li>
          Average waiting time for a visit: <b>{waitingTimeText}</b>
        </li>
      </ul>
      <Button>Get Turn</Button>
    </div>
  )
}

export default Service
