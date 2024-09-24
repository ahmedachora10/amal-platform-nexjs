import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import icon from "../../test.jpeg";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import profile from "@/actions/profile";

export default function Profile() {
    return (
        <div>
            <h3 className="text-blue-950 font-bold mb-5">My Profile</h3>
            <div className="grid grid-cols-6 border-2 rounded items-center">
                <div className="col-span-5">
                    <div className="flex items-center p-6">
                        <Image
                            src={icon}
                            width={80}
                            alt="test"
                            height={80}
                            className="rounded-full"
                        />
                        <div className="ms-5">
                            <h4 className="font-extrabold text-lg text-blue-950">
                                Ahmed Achfakay
                            </h4>
                            <span className="text-xs text-gray-400">
                                Leeds, United Kingdom
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    {/* <Button variant="outline" className="border rounded-full">
                        <Link href="/student/profile" className="grid grid-cols-2">
                            <Pencil size={15} />
                            <span>Edit</span>
                        </Link>
                    </Button> */}

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="border rounded-full grid grid-cols-2">
                                    <Pencil size={15} />
                                    <span>Edit</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-white">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here.
                                </DialogDescription>
                            </DialogHeader>
                            <form className="grid gap-4 py-4">
                                    <Input
                                        id="name"
                                        placeholder="Name"
                                        defaultValue="Pedro Duarte"
                                        className="col-span-3"
                                    />
                                    <Input
                                        id="username"
                                        placeholder="Username"
                                        defaultValue="@peduarte"
                                        className="col-span-3"
                                    />
                            </form>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="grid grid-cols-6 border-2 rounded items-start mt-6 p-6">
                <div className="col-span-5">
                    <h6 className="font-bold text-lg text-blue-950 mb-5">
                        Personal Informations
                    </h6>
                    <div className="flex items-start justify-start">
                        <div className="col-6 me-6">
                            <span className="text-sm block text-gray-500">First Name</span>
                            <span className="text-md block font-bold mb-4">Ahmed</span>
                            <span className="text-sm block text-gray-500">Email</span>
                            <span className="text-md block font-bold mb-4">
                                ahmed@ahmed.com
                            </span>
                        </div>
                        <div className="col-6">
                            <span className="text-sm block text-gray-500">Last Name</span>
                            <span className="text-md block font-bold mb-4">Achfakay</span>
                            <span className="text-sm block text-gray-500">Phone No.</span>
                            <span className="text-md block font-bold mb-4">+21209848838</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <Button variant="outline" className="border rounded-full">
                        <Link href="/student/profile" className="grid grid-cols-2">
                            <Pencil size={15} />
                            <span>Edit</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
