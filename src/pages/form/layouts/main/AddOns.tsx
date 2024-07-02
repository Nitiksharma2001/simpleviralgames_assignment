import Index from '../../Index'

const AddOns = () => {
  
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
        {[1, 1, 1].map(() => {
          return (
            <section className='border-2 border-slate-400 rounded-md flex justify-between items-center py-2 px-2 '>
              <input type='checkbox' defaultChecked className='checkbox checkbox-primary' />
              <div>
                <p>Online service</p>
                <p>Access to multiplayer games</p>
              </div>
              <p>+$1/mo</p>
            </section>
          )
        })}
      </section>
    </Index>
  )
}

export default AddOns
