import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import StickyNav from './components/Navbar/StickyNav'

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
          <div className='relative'>
            <img 
              src="/main-bg.png" 
              alt="bg" 
              className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image' 
              width='4377' 
            />
          </div>

          <div className='hero-section px-3 '>
            <Hero/>
          </div>

          <StickyNav/>
        </div>
      </div>
    </>
  )
}
