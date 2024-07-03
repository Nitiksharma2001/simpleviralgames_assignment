export interface IndexProps {
  headings: {
    primary: string
    secondary: string
  }
  nextButton: string
  prevButton: string
  children: JSX.Element
}

export interface CreateContextType {
  formData: FormDataType
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>
  isMonthly: boolean
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FormDataType {
  userDetails: UserDetailsType
  planDetails: PlanType
  addOnsDetails: AddOneType[]
}

export interface PlanType {
  text: string,
  price: {
    monthly: number
    yearly: number
  }
}

export interface UserDetailsType {
  name: string,
  email: string
  phone: string
}

export interface AddOneType {
  primary: string
  secondary: string
  price: {
    monthly: number
    yearly: number
  }
}
