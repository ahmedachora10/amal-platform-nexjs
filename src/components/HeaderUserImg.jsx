import useAuth from "@/app/_hook/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderUserImg() {
    const { user } = useAuth();
    const router = useRouter();

    console.log(user);
    return (
        <div className="flex items-center justify-center w-11 h-11 border bg-gray-400 rounded-full cursor-pointer relative" onClick={() => router.push("/student/profile")}>
            {user?.image ? <Image src={user?.image} width={480} height={480} className="max-w-full max-h-full rounded-full" draggable={false} alt="" /> : <></>}
        </div>
    )
}