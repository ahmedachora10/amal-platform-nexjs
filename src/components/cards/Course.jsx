"use client";
import { User } from "@/api/user";
import useAuth from "@/app/_hook/useAuth";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

/**
 *
 * @param {import("@/types/cards/CourseProps").CourseProps} props
 * @returns
 */
export default function Course(props) {
  const router = useRouter();
  const { user } = useAuth();
  const [pending, setPending] = useState(false);

  /**
   * @type {[import("@/types/cards/CourseProps").CourseProps, (value: import("@/types/cards/CourseProps").CourseProps) => void]}
   */
  const [course, setCourse] = useState(props);
  const {
    image,
    category,
    title,
    price,
    rating,
    link,
    isSubscribed,
    subscriptions,
    courseId,
  } = course;

  const enrollCourse = () => {
    if (!user) router().push('/login');
    setPending(true);

    const enrollData = {
      course_id: courseId,
      price: price.toFixed(2),
      student_id: user?.id,
    };

    User.enrollCourse(enrollData).then((res) => {
      setPending(false);
    });
  };

  return (
    <div className="bg-white p-4 rounded w-[18rem] border">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="object-cover rounded-xl max-h-40"
          width={255}
          height={255}
        />
        <div className="absolute top-0 right-0 p-2 px-2 text-xs font-bold bg-orange-500 rounded-tr-xl text-blak">
          <Link href={link}>{category}</Link>
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center justify-start text-sm">
          <Star size={20} />
          <span className="ms-2 me-4 text-">{rating}</span>
          <span className="text-gray-500">({subscriptions} user)</span>
        </div>

        <span className="font-bold text-primary me-1">{price}$</span>
      </div>
      <h5 className="my-3 text-sm font-bold text-gray-800">
        {category} | {title}
      </h5>
      <div className="grid grid-cols-2 gap-1 mt-6">
        <Button
          variant="outline"
          className="text-xs cursor-pointer text-gray rounded-bl-xl"
          asChild
          onClick={() => router.push(link)}
        >
          <p>More Details</p>
        </Button>

        <Button
          variant="outline"
          className={
            "text-white rounded-br-xl text-xs cursor-pointer " +
            (isSubscribed
              ? "hover:bg-primary hover:text-white bg-opacity-90 text-white bg-primary cursor-alias "
              : "bg-primary") +
            (pending ? " bg-gray-300 hover:bg-gray-300 text-black" : "")
          }
          asChild
          onClick={isSubscribed ? router.push(link) : enrollCourse}
        >
          <p>{isSubscribed ? "Owned" : "Buy Now"}</p>
        </Button>
      </div>
    </div>
  );
}
