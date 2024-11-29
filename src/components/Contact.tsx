import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message cannot exceed 1000 characters." }),
})

type FormData = z.infer<typeof formSchema>

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (body: FormData) => {
    setIsSubmitting(true)
    try {
      const {data} = await axios.post('https://13.202.22.147/api/v1/query/create',body)
      console.log(data)
      if (!data) {
        throw new Error('Failed to submit the form')
      }

      // await response.json()
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      reset()
    } catch (error) {
      console.error('Error:', error)
      toast.error("Failed to send your message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 p-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
        </div>
        <div>
          <Textarea
            placeholder="Type your message here."
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <Button type="submit" className="bg-red-500 w-fit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
      <ToastContainer />
    </>
  )
}

export default Contact

