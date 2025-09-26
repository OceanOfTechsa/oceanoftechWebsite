export interface IReview {
    name: string,
    surname: string,
    details: string,
    rating: number,
    avatar: string,
    date: string,
    title?: string,
    categories: string[];
}