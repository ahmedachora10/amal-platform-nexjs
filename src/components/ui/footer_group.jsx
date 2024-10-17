import Link from "next/link";

/**
 * 
 * @param {import("@/types/footer_group").FooterGroup} params
 */
export default function FooterGroup(params) {
    const { title, links } = params;

    return (
        <div className="col-span-full sm:col-span-2">
            <div className="flex gap-4 items-center mb-[2.5rem]">
                <div className="h-[1.3rem] border-2 rounded-xl border-blue-600"></div>
                <h3 className="font-semibold-bold text-lg whitespace-nowrap">{title}</h3>
            </div>

            <div className="flex flex-col justify-center gap-5">
                {links.map(value => (
                    <div className="flex gap-4 items-center" key={value.linkText + value.link}>
                        {value.iconComponent}
                        {value.link ? <Link className="text-gray-600" href={value.link}>{value.linkText}</Link> : <p className="text-gray-600">{value.linkText}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}