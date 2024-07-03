import { createContext, useState } from 'react'
import { CreateContextType, FormDataType } from '../props/FormProps'

export const FormContext = createContext<CreateContextType | null>(null)

const FormProvider = ({ children }: { children: JSX.Element }) => {
  const [isMonthly, setIsMonthly] = useState(true)
  const [formData, setFormData] = useState<FormDataType>({
    userDetails: {
      name: '',
      email: '',
      phone: '',
    },
    addOnsDetails: [],
    planDetails: {
      text: '',
      price: {
        monthly: 0,
        yearly: 0,
      },
    },
  })

  return <FormContext.Provider value={{ formData, setFormData, isMonthly, setIsMonthly }}>{children}</FormContext.Provider>
}

export default FormProvider
