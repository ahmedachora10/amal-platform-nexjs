import OpenBox from "@/components/ui/open_box";

/**
 * 
 * @param {{data: import("@/types/static/about").AboutFaq[]}} props 
 */
export default function AboutFaqs({ data }) {
    return (
        <div>
            {
                data.map((value, i) => (
                    <OpenBox title={value.question} content={value.answer} key={i} />
                ))
            }
        </div>
    )
}