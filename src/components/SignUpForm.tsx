import { ZodType, z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom";


function SignInForm() {
    
    interface FormData {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }
    const schema: ZodType<FormData> = z.object({
        firstName: z.string().min(2).max(30),
        lastName: z.string().min(2).max(30),
        email: z.string().email(),
        password: z.string().min(8).max(20)
    });

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({ resolver: zodResolver(schema) })

    const submitData = (data: FormData) => {
        console.log(data)
    }

    return(
        <div className="mt-5">
            <form onSubmit={handleSubmit(submitData)} className="flex flex-col">
                <label className="font-semibold text-center md:text-left">First Name</label>
                <input {...register('firstName')} type="text" placeholder="eg. John" className="border outline-none py-2 px-5 rounded-3xl w-80 my-3"></input>
                {errors.firstName && <span className="text-red-700">{errors.firstName.message}</span>}
                <label className="font-semibold text-center md:text-left">Last Name</label>
                <input {...register('lastName')} type="text" placeholder="eg. Doe" className="border outline-none py-2 px-5 rounded-3xl w-80 my-3"></input>
                {errors.lastName && <span className="text-red-700">{errors.lastName.message}</span>}
                <label className="font-semibold text-center md:text-left">Your Email Address</label>
                <input {...register('email')} type="email" placeholder="eg. johndoe@gmail.com" className="border outline-none py-2 px-5 rounded-3xl w-80 my-3"></input>
                {errors.email && <span className="text-red-700">{errors.email.message}</span>}
                <label className="font-semibold mt-1 text-center md:text-left">Choose a password</label>
                <input {...register('password')} type="password" placeholder="min. 8 characters"  className="border outline-none py-2 px-5 rounded-3xl w-80 my-3"></input>
                {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                <button type="submit" className="bg-black rounded-full text-white py-2.5 mt-2 transition-all duration-300 hover:shadow-xl hover:scale-110">Continue</button>
            </form>
            <p className="mt-2 text-center">Already an exisiting user? <Link to="/signin" className="font-semibold underline text-gray-400">Sign In</Link></p>
        </div>
    )
}

export default SignInForm