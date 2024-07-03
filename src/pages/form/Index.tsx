import { Link } from 'react-router-dom'
import Sidebar from './layouts/Sidebar'
import { CreateContextType, FormDataType, IndexProps } from '../../props/FormProps'
import { useContext, useEffect } from 'react'
import { FormContext } from '../../hooks/formContext'

const Index = ({ headings, nextButton, prevButton, children }: IndexProps) => {
  const {setFormData, setIsMonthly}  = useContext(FormContext) as CreateContextType
  useEffect(() => {
    const data = localStorage.getItem('formData')
    const isMonthly = localStorage.getItem('isMonthly')
    if(data){
      setFormData(JSON.parse(data) as FormDataType)
    }
    if(isMonthly){
      setIsMonthly(isMonthly === 'true')
    }
  }, [])
  return (
    <section className='font-ubuntu flex items-center h-full justify-center'>
      <section className='flex bg-white rounded-lg shadow-2xl w-2/3 h-3/4'>
        <section className="bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover w-[30%]">
          <Sidebar />
        </section>
        <section className='w-[70%]'>
          <section className='flex flex-col mx-20 mt-12 gap-12'>
            <section>
              <p className='text-3xl font-bold'>{headings.primary}</p>
              <p className='text-slate-400'>{headings.secondary}</p>
            </section>
            {children}
            <section className='flex font-normal justify-between'>
              {prevButton !== 'none' && (
                <Link to={prevButton} className='btn btn-primary text-white'>
                  Back
                </Link>
              )}
                {nextButton !== 'none' && <Link to={nextButton} className='btn btn-primary text-white'>
                  {nextButton === '/confirm' ? 'Confirm': 'Next Steps'}
                </Link>}
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Index
