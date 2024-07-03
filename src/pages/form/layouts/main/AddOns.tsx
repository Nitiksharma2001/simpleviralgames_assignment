import { useContext, useState } from 'react'
import { FormContext } from '../../../../hooks/formContext'
import { AddOneType, CreateContextType } from '../../../../props/FormProps'
import Index from '../../Index'

interface checkedAddOnsType extends AddOneType {
  isChecked: boolean
}
const AddOns = () => {

  const {setFormData, isMonthly}  = useContext(FormContext) as CreateContextType
  const [data, setData] = useState<checkedAddOnsType[]>([
    {
      primary: 'Online service',
      secondary: 'Access to multiplayer games',
      price: {
        monthly: 1,
        yearly: 10
      },
      isChecked: false
    },
    {
      primary: 'Larger storage',
      secondary: 'Extra 1TB of cloud save',
      price: {
        monthly: 2,
        yearly: 20
      },
      isChecked: false
    },
    {
      primary: 'Customizable Profile',
      secondary: 'Custom theme on your profile',
      price: {
        monthly: 2,
        yearly: 20
      },
      isChecked: false
    },
  ])
  const onAddOnHandler = (item: checkedAddOnsType) => {
    const newData = data.map((currentItem) => {
      if (currentItem === item) {
        return { ...currentItem, isChecked: !currentItem.isChecked }
      }
      return currentItem
    })
    setData(newData)
    setFormData(prev => {
      return {
        ...prev, addOnsDetails: newData.filter(data => data.isChecked === true).map(data => {
          const {isChecked, ...rest} = data
          return rest
        })
      }
    })
  }
    
  
  return (
    <Index
      headings={{
        primary: 'Pick add-ons',
        secondary: 'Add-ons help enhance your gaming experience.',
      }}
      nextButton='/summary'
      prevButton='/plans'
    >
      <section className='flex flex-col gap-4'>
        {data.map((item, index) => {
          return (
            <section className={`border-2 border-slate-400 ${item.isChecked ? 'border-blue-500 bg-blue-50': ''} rounded-md flex justify-between items-center py-2 px-2`} key={index}>
              <input type='checkbox' className='checkbox checkbox-primary' defaultChecked={item.isChecked} onChange={() => onAddOnHandler(item)}/>
              <div>
                <p className='text-blue-600 font-bold'>{item.primary}</p>
                <p className='text-slate-500'>{item.secondary}</p>
              </div>
              <p className='text-blue-600'>${isMonthly ? item.price.monthly : item.price.yearly}/{isMonthly ? 'mo':'yr'}</p>
            </section>
          )
        })}
      </section>
    </Index>
  )
}

export default AddOns
