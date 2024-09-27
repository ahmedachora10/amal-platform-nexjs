export enum UserRole {
    STUDENT = "Student",
}

export interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
    emailVerifiedAt: Date | null,
    role: UserRole,
    isBlocked: boolean,
    image: string | null
}

export type RequiredRegisterData = {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
    phone: string;
}