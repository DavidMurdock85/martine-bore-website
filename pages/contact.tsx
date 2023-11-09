import { useForm, SubmitHandler } from 'react-hook-form'
import { PageWrapper } from '@mb/components/PageWrapper'

type Inputs = {
  firstName: string
  lastName: string
  body: string
  email: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <PageWrapper
      description="A contact form for Martine Boré Antiques"
      title="Contact Martine Boré Antiques"
    >
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start mb-4">
            <h2 className="mb-4 mt-10">Contact us</h2>
            <p>
              Please fill out your name, email, and a brief description, and we
              will get back to you within 24 hours.
            </p>
          </div>
          <div className="flex flex-col w-100">
            {errors.firstName && (
              <span className="text-red-600">This field is required</span>
            )}
            <label>First Name</label>
            <input
              className="bg-slate-100 ml-2"
              defaultValue=""
              {...register('firstName', { required: true })}
            />
          </div>
          <div className="flex flex-col w-100">
            {errors.lastName && (
              <span className="text-red-600">This field is required</span>
            )}
            <label>Last Name</label>
            <input
              className="bg-slate-100 ml-2"
              defaultValue=""
              {...register('lastName', { required: true })}
            />
          </div>
          <div className="flex flex-col w-100 h-1/4">
            {errors.body && (
              <span className="text-red-600">This field is required</span>
            )}
            <label>Body</label>
            <input
              className="bg-slate-100 ml-2 h-40"
              defaultValue=""
              {...register('body', { required: true })}
            />
          </div>
          <div className="flex flex-col w-100 h-1/4">
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
            <label>Email</label>
            <input
              className="bg-slate-100 ml-2"
              defaultValue=""
              {...register('email', { required: true })}
            />
          </div>

          <input className="" type="submit" />
        </form>
      </div>
    </PageWrapper>
  )
}
