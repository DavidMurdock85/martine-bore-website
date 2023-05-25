import { useForm, SubmitHandler } from 'react-hook-form'
import { PageWrapper } from '@mb/components/PageWrapper'
//import { sendContactRequest } from "@mb/services/SupportService";

type Inputs = {
  firstName: string
  firstNameRequired: string
  lastName: string
  lastNameRequired: string
  body: string
  bodyRequired: string
  email: string
  emailRequired: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('firstName')) // watch input value by passing the name of it
  console.log(watch('lastName'))
  console.log(watch('body'))
  console.log(watch('email'))

  return (
    <PageWrapper
      description="A contact form for Martine Boré Antiques"
      title="Contact Martine Boré Antiques"
    >
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start mb-4">
          <h2>Contact us</h2>
          <p>
            Having trouble? Want to ask a question? Something you want to know
            more about? Get in touch!
          </p>
        </div>

        {/*Input Fields*/}

        {/*First Name Input*/}
        <div>
          <label>First Name</label>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register('firstName')} />
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('firstNameRequired', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.firstNameRequired && <span>This field is required</span>}
        </div>

        {/*Last Name Input*/}

        <div>
          <label>Last Name</label>
          <input defaultValue="test" {...register('lastName')} />
          <input {...register('lastNameRequired', { required: true })} />
          {errors.lastNameRequired && <span>This field is required</span>}
        </div>

        {/*Body Input*/}

        <div>
          <label>Body</label>
          <input defaultValue="test" {...register('body')} />
          <input {...register('bodyRequired', { required: true })} />
          {errors.bodyRequired && <span>This field is required</span>}
        </div>

        {/*Email Input*/}

        <div>
          <label>Email</label>
          <input defaultValue="test" {...register('email')} />
          <input {...register('emailRequired', { required: true })} />
          {errors.emailRequired && <span>This field is required</span>}
        </div>

        {/*put button here*/}
        <input type="submit" />
      </form>
    </PageWrapper>
  )
}
