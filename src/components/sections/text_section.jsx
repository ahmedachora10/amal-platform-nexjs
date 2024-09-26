/**
 * @param {{title: string, content: string, id: string, isContainer: boolean}}
 */
export default function TextSection({ title = "", content = "", id = "", isContainer = false }) {
    return (
        <div className={"flex flex-col gap-5" + (isContainer ? " sm:container sm:mx-auto mx-4" : "")} id={id}>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: content.replaceAll("\n", "<br/>") }}></p>
        </div>
    )
}