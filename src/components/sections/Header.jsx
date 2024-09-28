'use client';
import { Button } from "../ui/button";
import MainLinks from "../ui/main-links";
import AuthButtons from "../AuthButtons";
import { useState } from "react";
import { Menu } from "lucide-react";
import Modal from "../Modal";

export default function Header() {
    const [isOpened, setIsOpened] = useState(false);

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