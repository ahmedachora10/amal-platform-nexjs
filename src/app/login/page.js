'use client';
import { User } from "@/api/user";
import FormError from "@/components/FormError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../_hook/useAuth";
import { useRouter } from "next/navigation";

export default function Login() {
    const [err, setErr] = useState("");
    const { login } = useAuth();
    const router = useRouter();

    /**
     * 
     * @param {FormData} form 
     */
    const onSubmit = async (form) => {
        const username = form.get("username"), password = form.get("password");
        if (!username || !username.length) return setErr("username is required");
        if (!password || !password.length) return setErr("password is required");

        await User.csrf();

        const res = await login(username, password);


        if (res.status) {
            router.replace("/student/profile");
        }
        else {
            setErr(res.message || "there is unknown a problem with this login, please try again..");
        }

        return res;
    }

    return (
        <section className="flex justify-center items-center h-screen w-screen">
            <div className="bg-white p-[3rem] border w-[26rem] rounded">
                <h2 className="font-normal text-xl mb-2">Login | Welcome Back</h2>
                <p className="text-gray-400 text-sm"> You Do not have an account? <Link href="/register">Register</Link></p>

                <form className="mt-[2.5rem]" action={onSubmit}>
                    <div className="my-3">
                        <Input name="username" id="phone-number" type="text" placeholder='Phone No.' className='border-2 py-5' onChange={err ? () => setErr("") : undefined} />
                    </div>
                    <div className="my-3">
                        <Input name="password" id="password" type="password" placeholder='Password' className='border-2 py-5' onChange={err ? () => setErr("") : undefined} />
                    </div>

                    <FormError err={err} />

                    <Button variant="outline" className='bg-primary mt-[2.5rem] text-white w-full rounded' type="submit">
                        Login
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
    );
};