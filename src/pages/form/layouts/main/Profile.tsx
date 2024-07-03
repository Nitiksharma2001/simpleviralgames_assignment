import { useContext } from 'react'
import Index from '../../Index'
import { CreateContextType  } from '../../../../props/FormProps'
import { FormContext } from '../../../../hooks/formContext'

const Profile = () => {
  const {formData, setFormData}  = useContext(FormContext) as CreateContextType
  const inputEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => {
      const newData = {
        ...prev, userDetails: {
          ...prev.userDetails,
          [e.target.name]: e.target.value
        }
      }
      localStorage.setItem('formData', JSON.stringify(newData))
      return newData
    })
  }
  return (
    <Index 
      headings={{
          primary: 'Personal info',
          secondary: 'Please provide your name, email address, and phone number.'
      }} 
      nextButton='/plans' prevButton='none'>
        <section className='flex flex-col gap-4'>
          <section className='flex flex-col gap-2'>
            <label className='font-bold text-blue-700' htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.userDetails.name}
              onChange={inputEventHandler}
              placeholder='e.g. Stephen King'
              className='input input-bordered input-primary w-full'
            />
          </section>
          <section className='flex flex-col gap-2'>
            <label className='font-bold text-blue-700' htmlFor='email-address'>Email Address</label>
            <input
              type='text'
              id='email-address'
              name='email'
              value={formData.userDetails.email}
              onChange={inputEventHandler}
              placeholder='e.g. stephenking@lorem.com'
              className='input input-bordered input-primary w-full'
            />
          </section>
          <section className='flex flex-col gap-2'>
            <label className='font-bold text-blue-700' htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              id='phone'
              name='phone'
              value={formData.userDetails.phone}
              onChange={inputEventHandler}
              placeholder='e.g. +1 234 567 890'
              className='input input-bordered input-primary w-full'
            />
          </section>
        </section>
    </Index>
  )
}

export default Profile
