export type StrapiImage = {
    id: number;
    alternativeText: string;
    url: string;
    formats?: Record<string, {
        url: string;
        width: number;
        height: string;
    }>
}

export type Event = {
    id: number;
    Title: string;
    Description: string;
    Venue: string;
    City: string;
    Date: string;
    Time: string;
    createdAt: string;
    updatedAt: string;
    slug: string;
    registrationLink?: string;
    image: StrapiImage
}

export type StrapiResponse<T> =  {
    data: T[]
}