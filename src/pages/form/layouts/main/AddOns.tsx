import { useContext, useEffect, useState } from 'react'
import { FormContext } from '../../../../hooks/formContext'
import { AddOneType, CreateContextType } from '../../../../props/FormProps'
import Index from '../../Index'

interface checkedAddOnsType extends AddOneType {
  isChecked: boolean
}
const AddOns = () => {
  const {formData, setFormData, isMonthly}  = useContext(FormContext) as CreateContextType
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
  useEffect(() => {
    setData(data.map(item => {
      if(formData.addOnsDetails.find(addon => addon.primary === item.primary)){
        return {...item, isChecked: true}
      }
      return item
    }))

  }, [formData])
  const onAddOnHandler = (item: checkedAddOnsType) => {
    const newData = data.map((currentItem) => {
      if (currentItem === item) {
        return { ...currentItem, isChecked: !currentItem.isChecked }
      }
      return currentItem
    })
    setData(newData)
    setFormData(prev => {
      const newDataLocal = {
        ...prev, addOnsDetails: newData.filter(data => data.isChecked === true).map(data => {
          const {isChecked, ...rest} = data
          return rest
        })
      }
      localStorage.setItem('formData', JSON.stringify(newDataLocal))
      return newDataLocal
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
            <section className={`border-2 lg:gap-0 gap-2 border-slate-400 ${item.isChecked ? 'border-blue-500 bg-blue-50': ''} rounded-lg flex justify-between items-center py-2 px-2`} key={index}>
              <input type='checkbox' className='checkbox checkbox-primary' checked={item.isChecked} onChange={() => onAddOnHandler(item)}/>
              <div>
                <p className='text-blue-600 font-bold lg:text-xl text-md'>{item.primary}</p>
                <p className='text-slate-500 lg:text-lg text-md'>{item.secondary}</p>
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
