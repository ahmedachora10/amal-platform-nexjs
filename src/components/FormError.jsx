export default function FormError({ err }) {
    return (
        <>
            {err && <p className="text-red-700">{err}</p>}
        </>
    )
}