import Index from '../../Index'

const Confirmation = () => {
  return (
    <Index
      headings={{
        primary: '',
        secondary: '',
      }}
      nextButton='none'
      prevButton='none'
    >
      <section className='flex flex-col justify-center items-center gap-4 mt-12 '>
        <img src="src/assets/images/icon-thank-you.svg" alt="not-existed" />
        <p className='text-center font-bold text-blue-700 text-3xl'>Thank you!</p>
        <p className='text-center text-slate-500'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
         
      </section>
    </Index>
  )
}

export default Confirmation
