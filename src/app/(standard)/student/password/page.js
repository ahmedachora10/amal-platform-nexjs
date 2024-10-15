'use client';

import useAuth from "@/app/_hook/useAuth";
import FormError from "@/components/FormError";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function PasswordResetPage() {
    const { changePassword } = useAuth();
    const [err, setErr] = useState("");
    const [isChanging, setIsChanging] = useState(false);
    const router = useRouter();

    /**
     * 
     * @param {FormData} formdata 
     */
    const onChangeData = (formdata) => {
        const
            oldPassword = formdata.get("old_password"),
            newPassword = formdata.get("new_password"),
            confirmPassword = formdata.get("password_confirmation");

        if (newPassword !== confirmPassword) return setErr("Passwords do not match");
        changePassword(oldPassword, newPassword, confirmPassword).then(res => {
            if (res.errors) return Object.values(res.errors).forEach(err => toast.error(err || 'Something went wrong!', {className: "bg-red-500 text-white" }));

            if (!res.status) return toast.error(res.message || 'Something went wrong!', {variant: "destructive"});
            router.replace("/student/profile");
        });

    }

    return (
        <form className="grid grid-cols-2 gap-4" action={onChangeData}>
            <input name="old_password" className="col-span-2 p-4 outline-none border border-[#084C94] rounded-lg w-full" placeholder="Password" onChange={err ? () => setErr("") : undefined} />
            <input name="new_password" className="p-4 outline-none border border-[#084C94] rounded-lg w-full" placeholder="New Password" onChange={err ? () => setErr("") : undefined} />
            <input name="password_confirmation" className="p-4 outline-none border border-[#084C94] rounded-lg w-full" placeholder="Password Again" onChange={err ? () => setErr("") : undefined} />
            <div className="col-span-2">
                <FormError err={err} />
            </div>
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
                <Button type="submit" className={"rounded-lg min-w-24 " + (isChanging ? "bg-slate-200" : "bg-[#F9B03F] hover:bg-[#ffbb55]")}>Save</Button>
                <Button type="button" onClick={() => router.replace("/student/profile")} variant={"outline"} className="border border-[#084C94] rounded-lg min-w-24">Cancel</Button>
            </div>
        </form>

    )
}