import { useContext } from 'react'
import Index from '../../Index'
import { FormContext } from '../../../../hooks/formContext'
import { CreateContextType } from '../../../../props/FormProps'
import { Link } from 'react-router-dom'

const Summary = () => {
  const {formData, isMonthly}  = useContext(FormContext) as CreateContextType
  return (
    <Index
      headings={{
        primary: 'Finishing up',
        secondary: 'Double-check everything looks OK before confirming.',
      }}
      nextButton='/confirm'
      prevButton='/add-ons'
    >
      <section className='flex flex-col gap-4 '>
        <section className='bg-blue-50 p-4 rounded-lg flex flex-col gap-4'>
          <section className='flex justify-between'>
            <div>
              <p className='font-bold text-blue-600'>{formData.planDetails.text}({isMonthly ? 'Montly' : 'Yearly'})</p>
              <Link to='/plans' className='text-slate-500 underline'>change</Link>
            </div>
            <p className='font-bold text-blue-600'>${isMonthly ? formData.planDetails.price.monthly : formData.planDetails.price.yearly}/{isMonthly ? 'mo':'yr'}</p>
          </section>
          <hr />
          <section>
            {
              formData.addOnsDetails.map(item => {
                return <div className='flex justify-between text-slate-500'>
                  <p>{item.primary}</p>
                  <p className='font-bold'>${isMonthly ? item.price.monthly:item.price.yearly}/{isMonthly ? 'mo':'yr'}</p>
                </div>
              })
            }
          </section>
        </section>
        <section className='flex justify-between p-4'>
          <p className='text-slate-500'>Total ({isMonthly ? 'montly' : 'per year'})</p>
          <p className='text-blue-700 font-bold text-2xl'>${formData.addOnsDetails.reduce((acc, curr) => acc + (isMonthly ? curr.price.monthly: curr.price.yearly), isMonthly ? formData.planDetails.price.monthly: formData.planDetails.price.yearly)}/{isMonthly ? 'mo':'yr'}</p>
        </section>
      </section>
    </Index>
  )
}

export default Summary
