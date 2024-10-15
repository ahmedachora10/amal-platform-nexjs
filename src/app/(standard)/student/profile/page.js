"use client";
import useAuth from "@/app/_hook/useAuth";
import icon from "@/app/test.jpeg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const [isUpdatingData, setIsUpdatingData] = useState(false);
  const [isUpdatingImage, setIsUpdatingImage] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpenImage, setDialogOpenImage] = useState(false);
  const updateFormRef = useRef();
  const { user, changeInfo, changeImage } = useAuth();

  /**
   *
   * @param {FormData} formdata
   */
  const onChangeData = (formdata) => {
    changeInfo(
      formdata.get("name") || user.name,
      formdata.get("email") || user.email,
      formdata.get("phone") || user.phone
    ).then((data) => {
      toast.success(data?.message || "Updated Successfully");
      setIsUpdatingData(false);
    });
    setDialogOpen(false);
  };
  const onChangeImage = (formdata) => {
    changeImage(formdata.get("image") || null).then((data) => {
      toast.success(data?.message || "Updated Successfully");
      setIsUpdatingImage(false);
    });
    setDialogOpenImage(false);
  };

  return (
    user && (
      <div>
        <h3 className="mb-5 font-bold text-blue-950">My Profile</h3>
        <div className="grid items-center grid-cols-6 border-2 rounded">
          <div className="lg:col-span-5 col-span-4">
            <div className="flex items-center p-6">
              <Image
                src={user?.image}
                width={80}
                alt="test"
                height={80}
                className="rounded-full"
              />
              <div className="ms-5">
                <h4 className="text-lg font-extrabold text-blue-950">
                  {user.name}
                </h4>
                <span className="text-xs text-gray-400">
                  Leeds, United Kingdom
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 col-span-2 flex justify-end me-6">
            <Dialog open={dialogOpenImage}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border rounded-full flex items-center gap-1.5"
                  onClick={() => setDialogOpenImage(true)}
                >
                  <Pencil size={15} />
                  <span className="md:block hidden">Edit Image</span>
                </Button>
              </DialogTrigger>
              <DialogContent
                className="sm:max-w-[425px] bg-white"
                onClose={() => setDialogOpenImage(false)}
              >
                <DialogHeader>
                  <DialogTitle>Edit Image</DialogTitle>
                  <DialogDescription>
                    Change your profile image here.
                  </DialogDescription>
                </DialogHeader>
                <form
                  className="grid gap-4 py-4"
                  action={onChangeImage}
                  onSubmit={() => setIsUpdatingImage(true)}
                >
                  <div className="flex items-center gap-1.5 flex-col">
                    <Image
                      alt="User Image"
                      src={user.image}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                    <Input id="image" type="file" name="image" />
                  </div>
                  <DialogFooter>
                    <button
                      type="submit"
                      className={
                        "bg-primary text-white px-3 py-2 transition-colors " +
                        (isUpdatingImage ? "bg-gray-200 text-black" : "")
                      }
                    >
                      Save changes
                    </button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid items-start grid-cols-6 p-6 mt-6 border-2 rounded">
          <div className="col-span-5">
            <h6 className="mb-5 text-lg font-bold text-blue-950">
              Personal Informations
            </h6>
            <div className="flex items-start justify-start">
              <div className="col-6 me-6">
                <span className="block text-sm text-gray-500">First Name</span>
                <span className="block mb-4 font-bold text-md">
                  {user?.name?.slice(0, user?.name?.indexOf(" "))}
                </span>
                <span className="block text-sm text-gray-500">Email</span>
                <span className="block mb-4 font-bold text-md">
                  {user.email}
                </span>
              </div>
              <div className="col-6">
                <span className="block text-sm text-gray-500">Last Name</span>
                <span className="block mb-4 font-bold text-md">
                  {user?.name?.slice(user?.name?.indexOf(" "))}
                </span>
                <span className="block text-sm text-gray-500">Phone No.</span>
                <span className="block mb-4 font-bold text-md">
                  {user.phone}
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-end">
            <Dialog open={dialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="grid md:grid-cols-2 border rounded-full"
                  onClick={() => setDialogOpen(true)}
                >
                  <Pencil size={15} />
                  <span className="md:block hidden">Edit</span>
                </Button>
              </DialogTrigger>
              <DialogContent
                className="sm:max-w-[425px] bg-white"
                onClose={() => setDialogOpen(false)}
              >
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here.
                  </DialogDescription>
                </DialogHeader>
                <form
                  className="grid gap-4 py-4"
                  action={onChangeData}
                  ref={updateFormRef}
                  onSubmit={() => setIsUpdatingData(true)}
                >
                  <Label>Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="col-span-3"
                    defaultValue={user.name}
                  />

                  <Label>Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Name"
                    className="col-span-3"
                    defaultValue={user.email}
                  />

                  <Label>Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Name"
                    className="col-span-3"
                    defaultValue={user.phone}
                  />
                </form>
                <DialogFooter>
                  <button
                    type="submit"
                    className={
                      "bg-primary text-white px-3 py-2 transition-colors " +
                      (isUpdatingData ? "bg-gray-200 text-black" : "")
                    }
                    onClick={() => {
                      updateFormRef.current.requestSubmit();
                    }}
                  >
                    Save changes
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    )
  );
}
