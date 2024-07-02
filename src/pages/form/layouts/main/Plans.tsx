import { useState } from 'react'
import Index from '../../Index'
import { PlanType } from '../../../../props/FormProps'
interface PlanImgType extends PlanType {
  src: string
}
const Plans = () => {
  const [ischecked, setIsChecked] = useState(false)
  const data: PlanImgType[] = [
    {
      src: 'src/assets/images/icon-arcade.svg',
      text: 'Arcade',
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      src: 'src/assets/images/icon-advanced.svg',
      text: 'Advanced',
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      src: 'src/assets/images/icon-pro.svg',
      text: 'Pro',
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  ]
  return (
    <Index
      headings={{
        primary: 'Select your plan',
        secondary: 'You have the option of monthly or yearly billing.',
      }}
      nextButton='/add-ons'
      prevButton='/profile'
    >
      <section className='flex flex-col gap-8'>
        <section className='flex justify-between'>
          {data.map((item, index) => {
            return (
              <section key={index} className='border-2 border-slate-400 rounded-md h-48 w-40 flex flex-col justify-between items-start py-4 pl-4 '>
                <img src={item.src} alt='not-existed' />
                <div>
                  <p>{item.text}</p>
                  <p>${ischecked ? item.price.yearly : item.price.monthly}/{ischecked ? 'yr': 'mo'}</p>
                </div>
              </section>
            )
          })}
        </section>
        <div className='flex justify-center py-2 rounded-md bg-blue-400 w-full'>
          <div className='flex gap-4'>
            <p className='font-bold'>Monthly</p>
            <input type='checkbox' className='toggle toggle-error' onChange={(e) => setIsChecked(e.target.checked)} defaultChecked={ischecked} />
            <p className='font-bold'>Yearly</p>
          </div>
        </div>
      </section>
    </Index>
  )
}

export default Plans
