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
import LoggedOutOnly from "../LoggedOutOnly";
import HeaderUserImg from "../HeaderUserImg";
import useSettings from "@/app/_hook/useSettings";

export default function Header() {
    const [isOpened, setIsOpened] = useState(false);
    const { user, isLoading } = useAuth();
    const { settings } = useSettings();

    return (
        <header className="bg-white py-3 w-screen">
            <div className="container mx-auto hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="logo relative -top-6">
                        <Image src={settings('logo')} width={70} height={70} alt="logo" />
                    </div>

                    <div className="menu">
                        <MainLinks />
                    </div>

                    {
                        isLoading ? (
                            <HeaderRightBarSkeleton />
                        ) : ( !user ?
                                <>
                                    <LoggedOutOnly noRedirect>
                                        <div className="auth">
                                            <div className="flex items-center justify-start">
                                                <AuthButtons />
                                            </div>
                                        </div>
                                    </LoggedOutOnly>
                                    </>
                                :
                                <>
                                    <LoggedInOnly noRedirect>
                                        <HeaderUserImg />
                                    </LoggedInOnly>

                                </>
                        )
                    }
                </div>
            </div>

            <div className="md:hidden flex justify-between px-8">
                <div className="logo relative -top-6">
                    <Image src={settings('logo')} width={70} height={70} alt="logo" />
                </div>
                <div className="flex justify-between">
                    <Button onClick={() => setIsOpened(true)} variant="ghost"><Menu className="text-[#979797] w-8 h-8" /></Button>
                <HeaderUserImg />
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
            </div>
        </header>
    );
}