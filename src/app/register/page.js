import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Register(){
    return (
            <section className="flex justify-center items-center h-screen w-screen">
                <div className="bg-white p-6 sm:p-[3rem] border w-[90%] sm:w-[26rem] rounded">
                    <h2 className="font-normal text-xl mb-2">Sign up to continue</h2>
                    <p className="text-gray-400 text-sm"> Already have an account? <Link href="/login">Login</Link></p>

                    <div className="mt-[3rem]">
                        <div className="my-3">
                            <Input id="username" type="text" placeholder='Your name' className='border-2 py-5' />
                        </div>
                        <div className="my-3">
                            <Input id="email" type="text" placeholder='Email' className='border-2 py-5' />
                        </div>
                        <div className="my-3">
                            <Input id="phone-number" type="text" placeholder='Phone No.' className='border-2 py-5' />
                        </div>
                        <div className="my-3">
                            <Input id="password" type="password" placeholder='Password' className='border-2 py-5' />
                        </div>

                        <Button variant="outline" className='bg-primary mt-[2.5rem] text-white w-full rounded' >
                            <Link href='/login'>Register</Link>
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
                    </div>
                </div>
            </section>
    );
};