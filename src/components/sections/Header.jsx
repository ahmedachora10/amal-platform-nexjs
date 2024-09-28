'use client';
import { Button } from "../ui/button";
import MainLinks from "../ui/main-links";
import AuthButtons from "../AuthButtons";
import { useState } from "react";
import { Menu } from "lucide-react";
import Modal from "../Modal";
import useAuth from "@/app/_hook/useAuth";
import LoggedInOnly from "../LoggedInOnly";

export default function Header() {
    const [isOpened, setIsOpened] = useState(false);
    const { user } = useAuth();

    return (
        <header className="bg-white py-3">
            <div className="container mx-auto hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="logo">Logo</div>
                    <div className="menu">
                        <MainLinks />
                    </div>
                    <div className="auth">
                        <div className="flex items-center justify-start">
                            <AuthButtons />
                        </div>
                    </div>
                    {
                        user.image ? (
                            <LoggedInOnly noRedirect>
                                <div className="hidden md:block">
                                    <img src={user.image} className="max-w-16 max-h-16 rounded-full" draggable={false} />
                                </div>
                            </LoggedInOnly>
                        ) : null
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