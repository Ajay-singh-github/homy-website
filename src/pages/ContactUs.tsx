import Contact from '@/components/Contact'
import contactusimg from "../assets/contactusImg.svg"
const ContactUs = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-8 sm:p-16 lg:p-32 gap-8 '>
        <div className='col-span-1'>
            <h2 className='secondaryFont font-bold text-[2rem] text-red-500'>Contact Us</h2>
            <p>
            We’re here to help! Whether you have questions, feedback, or need assistance, feel free to reach out. Our team is ready to assist you with anything you need.
            </p>
            <img src={contactusimg} alt="contact-us" />
        </div>
        <Contact/>
    </div>
  )
}

export default ContactUs