export interface IUser {
    _id: string;
    name: string;
    surname: string;
    email: string;
    position: string;
    about: string;
    avatar: string;
    role: number;
    type: number
    team: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    socials: string[];
}