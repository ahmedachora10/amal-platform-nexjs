/**
 * 
 * @param {import("@/types/footer_group").FooterGroup} params 
 */
export default function FooterGroup(params) {
    const { title, links } = params;

    return (
        <div className="max-w-[8.33vw] flex items-center gap-7 flex-col">
            <div className="flex gap-4 items-center">
                <div className="h-[1.3rem] border-2 rounded-xl border-blue-600"></div>
                <h3 className="font-semibold-bold text-lg whitespace-nowrap">{title}</h3>
            </div>

            <div className="flex flex-col justify-center gap-5">
                {links.map(value => (
                    <div className="flex gap-4 items-center" key={value.linkText + value.link}>
                        {value.iconComponent}
                        {value.link ? <a href={value.link}>{value.linkText}</a> : <p>{value.linkText}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}