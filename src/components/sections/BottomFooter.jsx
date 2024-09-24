import MainLinks from "../ui/main-links";

export default function BottomFooter() {
    return (
        <div className="flex items-center justify-evenly text-white bg-black py-2">
            <p>copyright 2021 by edumint.com</p>
            <MainLinks />
        </div>
    )
}