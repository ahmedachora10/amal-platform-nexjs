
export default function TitleWithLine({ title = "" }) {
    return (
        <p className="flex items-center gap-5">{title.toUpperCase()} <hr className="w-8 border border-[#002147]" /></p>
    )
}