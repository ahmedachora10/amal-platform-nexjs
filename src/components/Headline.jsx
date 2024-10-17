'use client'

export default function Headline({ title = '', subTitle = '' }) {
    return (
        <div>
            <span className="text-black-300 text-md font-medium">{subTitle}</span>
            <h1 className="text-3xl text-black-800 font-extrabold">{title}</h1>
        </div>
    );
}