import { User } from "@/api/user";
import useSWR, { mutate } from "swr";

export default function useAuth() {
    /**
        * @type {[import("@/types/User").User|null, (user:import("@/types/User").User) => void]}
     */
    const { isLoading, data } = useSWR("/api/user", User.getUser);

    const changeInfo = (name, email, phone) => {
        return User.changeInfo(name, email, phone).then(() => {
            mutate("/api/user", { ...data, name, email, phone });
        });
    }

    return {
        // user: {
        //     id: 5,
        //     name: "user name",
        //     email: "user email",
        //     phone: "user phone",
        //     emailVerifiedAt: new Date(),
        //     role: "Student",
        //     isBlocked: false,
        //     image: "https://example.com/photo.png",
        // },
        user: data,
        login: async (username, password) => {
            const result = await User.login(username, password);
            if (result.status) {
                mutate("/api/user", result.user);
            }
        },
        logout: async () => {
            await User.logout();
            mutate("/api/user", null);
        },
        csrf: User.csrf,
        changeInfo,
        changePassword: User.changePassword,
        isLoading,
    };

}