'use client';
import { Button } from "../ui/button";
import MainLinks from "../ui/main-links";
import AuthButtons from "../AuthButtons";
import { useState } from "react";
import { Menu } from "lucide-react";
import Modal from "../Modal";
import useAuth from "@/app/_hook/useAuth";
import LoggedInOnly from "../LoggedInOnly";
import Image from "next/image";
import HeaderRightBarSkeleton from "../ui/skeletons/HeaderRightBar";

export default function Header() {
    const [isOpened, setIsOpened] = useState(false);
    const { user, isLoading } = useAuth();

    return (
        <header className="bg-white py-3 w-screen">
            <div className="container mx-auto hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="logo">Logo</div>

                    <div className="menu">
                        <MainLinks />
                    </div>

                    {
                        isLoading ? (
                            <HeaderRightBarSkeleton />
                        ) : (
                            <>
                                {
                                    user ? <></> : (
                                        <div className="auth">
                                            <div className="flex items-center justify-start">
                                                <AuthButtons />
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    user?.image ? (
                                        <LoggedInOnly noRedirect>
                                            <div className="hidden md:flex items-center justify-center w-11 h-11 border bg-gray-400 rounded-full cursor-pointer relative">
                                                <Image src={user?.image} width={480} height={480} className="max-w-full max-h-full rounded-full" draggable={false} alt="" />
                                            </div>
                                        </LoggedInOnly>
                                    ) : <></>
                                }

                            </>
                        )
                    }
                </div>
            </div>

            <div className="md:hidden flex justify-end px-8">
                <Button onClick={() => setIsOpened(true)}><Menu /></Button>
                {
                    isOpened && (
                        <Modal className="" onClose={() => setIsOpened(false)}>
                            <div className="flex flex-col list-none gap-4 items-center w-screen shadow p-7 mx-auto">
                                <MainLinks noContainer />
                                <AuthButtons />
                            </div>
                        </Modal>
                    )
                }
            </div>
        </header>
    );
}