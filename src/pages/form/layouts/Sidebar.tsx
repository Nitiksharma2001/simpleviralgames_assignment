import { Link, useLocation } from 'react-router-dom'
const Sidebar = () => {
  const location = useLocation()

  const pages = [
    {
      redirect: '/profile',
      text: 'your info',
    },
    {
      redirect: '/plans',
      text: 'select plans',
    },
    {
      redirect: '/add-ons',
      text: 'add-ons',
    },
    {
      redirect: '/summary',
      text: 'summary',
    },
  ]

  return (
    <>
      <section className='lg:hidden absolute top-4 mx-8'>
        <section className='flex gap-4'>
          {pages.map((page, index) => {
            return (
              <Link to={page.redirect} key={index} className='flex gap-4 items-center'>
                <div
                  className={`rounded-3xl px-4 py-2 border-2 ${
                    location.pathname === page.redirect
                      ? ' bg-blue-300'
                      : 'border-white  text-white'
                  }`}
                >
                  {index + 1}
                </div>
              </Link>
            )
          })}
        </section>
      </section>
      <section className='hidden lg:flex lg:justify-center lg:mt-20 lg:gap-4'>
        <section className='flex flex-col gap-4'>
          {pages.map((page, index) => {
            return (
              <Link to={page.redirect} key={index} className='flex gap-4 items-center'>
                <div
                  className={`rounded-3xl px-4 py-2  border-2 ${
                    location.pathname === page.redirect
                      ? ' bg-blue-300'
                      : ' border-white  text-white'
                  }`}
                >
                  {index + 1}
                </div>
                <div>
                  <p className='text-slate-400'>Step {index + 1}</p>
                  <p className='font-bold text-white'>{page.text.toUpperCase()}</p>
                </div>
              </Link>
            )
          })}
        </section>
      </section>
    </>
  )
}
export default Sidebar
