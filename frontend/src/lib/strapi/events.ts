import { fetchApi } from "./fetchData";
import { Event, StrapiResponse } from "./types";

export const getEvents = async () => {
    const res = await fetchApi<StrapiResponse<Event>>("events", {
        params: {
            "populate": "*",
            "sort": "Date:desc"
        },
        next: {
            revalidate: 3600
        }
    })

    return res.data
}

export const getStrapiMedia = (url: string) => {
    if (url.startsWith("http") || url.startsWith("https")) return url
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}` 
}