import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <>
      <div className='relative z-50'>
        <div className='absolute'>
          <Navbar />
        </div>
      </div>

      <div>
        <div className='overflow-hidden'>
          <div className='relative h-screen'>
            <img 
              src="/main-bg.png" 
              alt="bg" 
              className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image' 
              width='4377' 
            />
          </div>
        </div>
      </div>
    </>
  )
}
