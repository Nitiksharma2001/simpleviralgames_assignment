import { Link } from 'react-router-dom'
import Sidebar from './layouts/Sidebar'
import { CreateContextType, FormDataType, IndexProps } from '../../props/FormProps'
import { useContext, useEffect } from 'react'
import { FormContext } from '../../hooks/formContext'

const Index = ({ headings, nextButton, prevButton, children }: IndexProps) => {
  const { setFormData, setIsMonthly } = useContext(FormContext) as CreateContextType
  useEffect(() => {
    const data = localStorage.getItem('formData')
    const isMonthly = localStorage.getItem('isMonthly')
    if (data) {
      setFormData(JSON.parse(data) as FormDataType)
    }
    if (isMonthly) {
      setIsMonthly(isMonthly === 'true')
    }
  }, [])
  return (
    <>
      <section className='hidden lg:flex font-ubuntu lg:items-center h-full lg:justify-center'>
        <section className='flex bg-white rounded-lg shadow-2xl w-2/3 h-3/4'>
          <section className="bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover w-[30%]">
            <Sidebar />
          </section>
          <section className='w-[70%]'>
            <section className='flex flex-col justify-between h-full mx-20 py-12 gap-4'>
              <section>
                <p className='text-2xl font-bold'>{headings.primary}</p>
                <p className='text-slate-400'>{headings.secondary}</p>
              </section>
              {children}
              <section className='flex font-normal justify-between'>
                {prevButton !== 'none' && (
                  <Link to={prevButton} className='btn btn-primary text-white'>
                    Back
                  </Link>
                )}
                {nextButton !== 'none' && (
                  <Link to={nextButton} className='btn btn-primary text-white'>
                    {nextButton === '/confirm' ? 'Confirm' : 'Next Steps'}
                  </Link>
                )}
              </section>
            </section>
          </section>
        </section>
      </section>

      <section className="lg:hidden font-ubuntu bg-[url('src/assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-contain h-full flex justify-center shadow-2xl">
        <Sidebar />
        <section className='rounded-lg shadow-2xlw-4/5 h-[75%] mt-20 w-[80%] bg-white'>
          <section className='w-full h-full p-4 '>
            <section className='flex flex-col justify-between lg:gap-12 h-full gap-4'>
            <section>
                <p className='text-2xl font-bold'>{headings.primary}</p>
                <p className='text-slate-400'>{headings.secondary}</p>
              </section>
              {children}
              <section className='flex font-normal justify-between'>
                {prevButton !== 'none' && (
                  <Link to={prevButton} className='btn btn-primary text-white'>
                    Back
                  </Link>
                )}
                {nextButton !== 'none' && (
                  <Link to={nextButton} className='btn btn-primary text-white'>
                    {nextButton === '/confirm' ? 'Confirm' : 'Next Steps'}
                  </Link>
                )}
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default Index
