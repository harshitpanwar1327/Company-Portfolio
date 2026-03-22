import {lazy, useState} from 'react'
import { Phone, Mail, ArrowRight } from "lucide-react"
import emailjs from '@emailjs/browser'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { Element } from 'react-scroll'
import { Helmet } from 'react-helmet-async'
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase/Firebase.js"

const Navigation = lazy(() => import('../components/Navigation.jsx'))
const Advertisement = lazy(() => import('../section/Advertisement'))
const Reviews = lazy(() => import('../section/Reviews'))
const Footer = lazy(() => import('../components/Footer.jsx'))

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          user_email: user.email,
          user_name: data.name,
          user_phone: data.phone,
          message: data.message,
        },
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );

      toast.success("Email sent successfully");
      reset();
      setIsSubmitting(false);

    } catch (error) {
      console.log(error);
      toast.error("Email not sent!");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact CodeWeave | Start Your SaaS Project</title>
        <meta name="description" content="Contact CodeWeave to build your SaaS product, ERP system, or custom web application. Let's turn your idea into reality." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Element name='contact' className='relative w-screen px-4 md:px-12 lg:px-20 pb-8 bg-black overflow-hidden flex flex-col justify-between gap-16'>
        <Navigation />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-white">
          <div className='flex flex-col gap-8'>
            <h1 className='text-5xl md:text-6xl font-semibold'>Let's get in touch</h1>
            <p className='text-justify'>Whether you have a question, a project in mind, or just want to say hello, we’d love to hear from you. 
            Our team is always ready to discuss new opportunities, provide support, and explore how we can work together to bring your ideas to life. Feel free to reach out through the form or the contact details below.</p>
            <hr className='text-white/50'/>
            <p className='flex items-center gap-3'>
              <Phone className='w-5 h-5'/>
              <a href="tel:+918595994381" className="hover:text-white/80 transition duration-300">+91 8595994381,</a>
              <a href="tel:+919311201990" className="hover:text-white/80 transition duration-300">+91 9311201990</a>
            </p>
            <p className='flex items-center gap-3'>
              <Mail className='w-5 h-5'/>
              <a href="mailto:codeweave1327@gmail.com" className="hover:text-white/80 transition duration-300">codeweave1327@gmail.com</a>
            </p>
          </div>

          <form className='bg-neutral-900 p-8 rounded-2xl space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2'>
              <label>Name</label>
              <input type="text" placeholder='Jane Smith' className='w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white' required
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z\s]{3,50}$/,
                    message: "Name should contain only letters and atleast to letters"
                  }
                })}
              />
              {errors.name && (<p className="text-red-500 text-xs">{errors.name.message}</p>)}
            </div>

            <div className='flex flex-col gap-2'>
              <label>Phone</label>
              <input type="tel" placeholder='+91 85xxxxxxxx' className='w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white' required
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(\+91[-\s]?)?[6-9]\d{9}$/,
                    message: "Enter a valid phone number"
                  }
                })}
              />
              {errors.phone && (<p className="text-red-500 text-xs">{errors.phone.message}</p>)}
            </div>

            <div className='flex flex-col gap-2'>
              <label>Message</label>
              <textarea placeholder="Tell us about your requirements..." className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white" required rows={4} {...register("message")}/>
            </div>

            <button className={`flex items-center justify-between p-1 rounded-full font-semibold w-full ${isSubmitting ? 'bg-gray-400 !cursor-not-allowed' : 'bg-white hover:bg-gray-200 group'}`}>
              <p className='text-black px-3 mx-auto'>{isSubmitting ? 'Sending...' : 'Submit'}</p>
              <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
            </button>
          </form>
        </div>
      </Element>

      <Reviews />
      <Advertisement />
      <Footer />
    </>
  )
}

export default Contact