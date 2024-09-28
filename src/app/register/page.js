'use client';
import { User } from "@/api/user";
import FormError from "@/components/FormError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const [err, setErr] = useState("");
    const router = useRouter();

    /**
     * 
     * @param {FormData} form 
     */
    const onSubmit = async (form) => {
        const
            name = form.get("name"),
            email = form.get("email"),
            phoneNumber = form.get("phone-number"),
            password = form.get("password"),
            passwordConfirmation = form.get("password-confirmation");

        if (!name) return setErr("name is required");
        if (!email) return setErr("email is required");
        if (!phoneNumber) return setErr("phone number is required");
        if (!password) return setErr("password is required");
        if (password !== passwordConfirmation) return setErr("password not match password confirmation");

        const res = await User.register({
            name,
            email,
            phone: phoneNumber,
            password,
            password_confirmation: passwordConfirmation
        });

        if (!res.status) return setErr(res.message || "there is unknown problem with this user register");
        router.push("/login");
    }

    return (
        (
            <section className="flex justify-center items-center h-screen w-screen">
                <div className="bg-white p-6 sm:p-[3rem] border w-[90%] sm:w-[26rem] rounded">
                    <h2 className="font-normal text-xl mb-2">Sign up to continue</h2>
                    <p className="text-gray-400 text-sm"> Already have an account? <Link href="/login">Login</Link></p>

                    <form className="mt-[3rem]" action={onSubmit}>
                        <div className="my-3">
                            <Input id="username" name="name" type="text" placeholder='Your name' className='border-2 py-5' />
                        </div>
                        <div className="my-3">
                            <Input id="email" name="email" type="text" placeholder='Email' className='border-2 py-5' />
                        </div>
                        <div className="my-3">
                            <Input id="phone-number" name="phone-number" type="text" placeholder='Phone No.' className='border-2 py-5' />
                        </div>
                        <div className="my-3">
                            <Input id="password" name="password" type="password" placeholder='Password' className='border-2 py-5' />
                        </div>

                        <div className="my-3">
                            <Input id="password-confirmation" name="password-confirmation" type="password" placeholder='Password Confirmation' className='border-2 py-5' />
                        </div>

                        <FormError err={err} />

                        <Button variant="outline" className='bg-primary mt-[2.5rem] text-white w-full rounded' >
                            Register
                        </Button>

                        <div className="grid grid-cols-2 mt-6">
                            <Button variant="outline" className='bg-secondary text-black me-1 rounded' >
                                <Link href='/login'>
                                    Google
                                </Link>
                            </Button>
                            <Button variant="outline" className='bg-primary text-white ms-1 rounded' >
                                <Link href='/login'>Facebook</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        )
    )
};