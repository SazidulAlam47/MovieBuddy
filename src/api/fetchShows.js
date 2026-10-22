import { SHOWS_URL } from "./endpoints";

export const fetchShows = async () => {
    const response = await fetch(SHOWS_URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch shows: ${response.status}`);
    }
    return response.json();
};
