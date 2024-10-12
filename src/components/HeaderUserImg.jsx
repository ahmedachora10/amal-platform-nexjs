import useAuth from "@/app/_hook/useAuth";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function HeaderUserImg() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center bg-gray-400 border rounded-full cursor-pointer w-11 h-11">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {user?.image ? (
            <Image
              src={user?.image}
              width={480}
              height={480}
              className="object-cover w-full h-full rounded-full"
              draggable={false}
              alt=""
            />
          ) : (
            <p>No User</p>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Student</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => router.push("/student/profile")}
              className="cursor-pointer"
            >
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/student/courses")}
              className="cursor-pointer"
            >
              <span>Courses</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                logout();
              }}
              className="text-white cursor-pointer bg-destructive"
            >
              <LogOut className="w-4 h-4 mr-2 " />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
