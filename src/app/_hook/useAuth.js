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

    return {
        user,
        login: User.login,
        logout: User.logout,
        csrf: User.csrf,
        isLoading,
    };

}