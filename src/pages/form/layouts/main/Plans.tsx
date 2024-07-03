import { useContext } from 'react'
import Index from '../../Index'
import { CreateContextType, PlanType } from '../../../../props/FormProps'
import { FormContext } from '../../../../hooks/formContext'
interface PlanImgType extends PlanType {
  src: string
}
const Plans = () => {
  const {formData, setFormData, isMonthly, setIsMonthly}  = useContext(FormContext) as CreateContextType
  const onPlanHandler = (item: PlanType) => {
    setFormData(prev => {
      return {
        ...prev, planDetails: item
      }
    })
  }
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
              <section className={`cursor-pointer border-2 ${formData.planDetails.text === item.text ? 'border-blue-700 bg-blue-100' : 'border-slate-400' } rounded-md h-48 w-40 flex flex-col justify-between items-start py-4 pl-4`} onClick={() => onPlanHandler(item)} key={index}>
                <img src={item.src} alt='not-existed' />
                <div>
                  <p className='text-blue-600 font-bold text-xl'>{item.text}</p>
                  <p className='text-slate-400 font-bold'>${isMonthly ? item.price.monthly : item.price.yearly}/{isMonthly ? 'mo':'yr'}</p>
                </div>
              </section>
            )
          })}
        </section>
        <div className='flex justify-center py-2 rounded-md bg-blue-100 w-full'>
          <div className='flex gap-4'>
            <p className='font-bold'>Monthly</p>
            <input type='checkbox' className='toggle toggle-error' onChange={(e) => setIsMonthly(!e.target.checked)} defaultChecked={!isMonthly} />
            <p className='font-bold'>Yearly</p>
          </div>
        </div>
      </section>
    </Index>
  )
}

export default Plans
