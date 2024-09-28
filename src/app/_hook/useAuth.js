import { User } from "@/api/user";
import { useState, useEffect } from "react";


export default function useAuth() {
    const [isLoading, setIsLoading] = useState(true);
    /**
        * @type {[import("@/types/User").User|null, (user:import("@/types/User").User) => void]}
     */
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            User.getUser().then(data => {
                setUser(data);
                setIsLoading(false);
            });
        }
    }, [user]);

    const changeInfo = (name, email, phone) => {
        return User.changeInfo(name, email, phone).then(() => {
            setUser({ ...user, name, email, phone });
        })
    }

    return {
        user: {
            id: 5,
            name: "user name",
            email: "user email",
            phone: "user phone",
            emailVerifiedAt: new Date(),
            role: "Student",
            isBlocked: false,
            image: "https://example.com/photo.png",
        },
        // user,
        login: User.login,
        logout: User.logout,
        csrf: User.csrf,
        changeInfo,
        changePassword: User.changePassword,
        isLoading,
    };

}