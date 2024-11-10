import Cuisines from '@/components/Cuisines'
import HeroSection from '@/components/HeroSection'
import HomyCeleberation from '@/components/HomyCeleberation'
import HomyMessage from '@/components/HomyMessage'
import HomyWorks from '@/components/HomyWorks'
import Nutrition from '@/components/Nutrition'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

const Home = () => {
  return (
    <div className='font'>
        <HeroSection/>
        <Services/>
        <Nutrition/>
        <HomyWorks/>
        <HomyMessage/>
        <HomyCeleberation/>
        <Testimonials/>
        <Cuisines/>
        <div className='sm:h-[50vh] min-h-fit p-8 secondaryFont text-center text-[4rem]'>
            <h1>From Kitchen to Plate, </h1>
            <h1 className='text-red-500'>Just the Way You Like It!</h1>
        </div>
    </div>
  )
}

export default Home