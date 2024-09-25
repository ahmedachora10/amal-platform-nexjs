import ImageEffect1 from "../ui/image_effect_1";

export default function UserPositionSection({ position = "Home", pageName = "Home Page" }) {
    return (
        <section className="flex flex-col gap-3 justify-center items-center bg-[#F2F7FD] w-screen min-h-[15vh] relative max-w-full">
            <ImageEffect1 />
            <h2 className="text-2xl">{pageName}</h2>
            <p className="text-xs">{position}</p>
        </section>
    )
}