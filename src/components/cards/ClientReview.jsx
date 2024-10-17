import { Star } from "lucide-react";
import Image from "next/image";

export default function ClientReview({
  reviewText = "",
  name = "",
  rate = 0,
  noMaxWidth = false,
  image = '',
  profession = ''
}) {
  return (
    <div className="bg-white p-[3rem] drop-shadow-lg rounded-md">
      <div className="grid grid-cols-6 items-center">
        <div className="col-span-1">
          <Image src={image} width={60} height={60} style={{'height': '60px'}} alt='image' className="rounded-full drop-shadow-md" />
        </div>
        <div className="col-span-5 ms-4">
          <h5 className="text-sm font-bold">{ name }</h5>
          <span className="text-sm/[12px] text-gray-400">{ profession }</span>
          </div>
        <div className="col-span-full mt-[2rem] text-gray-700">
          <p className="text-sm">{reviewText}</p>
        </div>
      </div>
    </div>
  );
}
