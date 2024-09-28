'use client';
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Image from "next/image";
import icon from "@/app/test.jpeg";
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
import useAuth from "@/app/_hook/useAuth";
import { useState, useRef } from "react";

export default function Profile() {
    const [isUpdatingData, setIsUpdatingData] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const updateFormRef = useRef();
    const { user } = useAuth();

    /**
     * 
     * @param {FormData} formdata 
     */
    const onChangeData = (formdata) => {
        changeInfo(
            formdata.get("name") || user.name,
            formdata.get("email") || user.email,
            formdata.get("phone") || user.phone,
        ).then(() => setIsUpdatingData(false));
        setDialogOpen(false)
    }


    return user && (
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
                                {user.name}
                            </h4>
                            <span className="text-xs text-gray-400">
                                Leeds, United Kingdom
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">

                    <Dialog open={dialogOpen}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="border rounded-full grid grid-cols-2" onClick={() => setDialogOpen(true)}>
                                <Pencil size={15} />
                                <span>Edit</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-white" onClose={() => setDialogOpen(false)}>
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here.
                                </DialogDescription>
                            </DialogHeader>
                            <form className="grid gap-4 py-4" action={onChangeData} ref={updateFormRef} onSubmit={() => setIsUpdatingData(true)}>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className="col-span-3"
                                    defaultValue={user.name}
                                />

                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Name"
                                    className="col-span-3"
                                    defaultValue={user.email}
                                />

                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="Name"
                                    className="col-span-3"
                                    defaultValue={user.phone}
                                />
                            </form>
                            <DialogFooter>
                                <button type="submit" className={"bg-primary text-white px-3 py-2 transition-colors " + (isUpdatingData ? "bg-gray-200 text-black" : "")} onClick={() => {
                                    updateFormRef.current.requestSubmit();
                                }}>Save changes</button>
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
                            <span className="text-md block font-bold mb-4">{user.name.slice(0, user.name.indexOf(" "))}</span>
                            <span className="text-sm block text-gray-500">Email</span>
                            <span className="text-md block font-bold mb-4">
                                {user.email}
                            </span>
                        </div>
                        <div className="col-6">
                            <span className="text-sm block text-gray-500">Last Name</span>
                            <span className="text-md block font-bold mb-4">{user.name.slice(user.name.indexOf(" "))}</span>
                            <span className="text-sm block text-gray-500">Phone No.</span>
                            <span className="text-md block font-bold mb-4">{user.phone}</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <Button variant="outline" className="border rounded-full grid grid-cols-2" onClick={() => setDialogOpen(true)}>
                        <Pencil size={15} />
                        <span>Edit</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
