import { User } from "@/api/user";
import useSWR, { mutate } from "swr";

export default function useAuth() {
  /**
   * @type {[import("@/types/User").User|null, (user:import("@/types/User").User) => void]}
   */
  const { isLoading, data } = useSWR("/api/user", () => User.getUser());

  const changeInfo = async (name, email, phone) => {
    return User.changeInfo(name, email, phone).then(() => {
      mutate("/api/user", { ...data, name, email, phone });
    });
  };
  const changeImage = async (image) => {
    return User.changeImage(image).then(() => {
      mutate("/api/user", { ...data, image });
    });
  };

  return {
    user: {
      id: 5,
      name: "user name",
      email: "user email",
      phone: "user phone",
      emailVerifiedAt: new Date(),
      role: "Student",
      isBlocked: false,
      image:
        "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg",
    },
    // TODO:
    // user: data,
    login: async (username, password) => {
      const result = await User.login(username, password);
      if (result.status) {
        mutate("/api/user", result.user);
      }

      return result;
    },
    logout: async () => {
      await User.logout();
      mutate("/api/user", null);
    },
    csrf: User.csrf,
    changeInfo,
    changeImage,
    changePassword: User.changePassword,
    isLoading,
  };
}
