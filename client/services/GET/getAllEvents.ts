import axios from "axios";

export default async function getAllEvents() {
    try {
        const res = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events`);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
};