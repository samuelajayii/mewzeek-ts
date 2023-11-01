import { Link } from "react-router-dom"
import { ZodType, z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

const SignInForm = () => {
    interface FormData {
        email: string;
        password: string;
    }

    const schema: ZodType<FormData> = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(20)
    }) 

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({ resolver: zodResolver(schema) })
    const submitData = (data: FormData) => {
        console.log(data)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submitData)} className="flex flex-col mt-5">
                <label className="font-semibold text-center md:text-left">Your Email Address</label>
                <input {...register('email')} type="email" placeholder="eg. johndoe@gmail.com" className="border outline-none py-2 px-5 rounded-3xl w-80 my-3"></input>
                {errors.email && <span className="text-red-700">{errors.email.message}</span>}
                <label className="font-semibold mt-1 text-center md:text-left">Choose a password</label>
                <input {...register('password')} type="password" placeholder="min. 8 characters"  className="border outline-none py-2 px-5 rounded-3xl w-80 my-3"></input>
                {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                <button type="submit" className="bg-black rounded-full text-white py-2.5 mt-2 mb-4 transition-all duration-300 hover:shadow-xl hover:scale-110">Continue</button>
            </form>
            <Link to="/signup" className="underline font-semibold text-gray-400">Go Back</Link>
        </div>
    )
}

export default SignInForm