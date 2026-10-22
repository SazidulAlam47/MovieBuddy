import { getSearchUrl } from "./endpoints";

export const searchShows = async (query) => {
    if (!query || !query.trim()) return [];

    const response = await fetch(getSearchUrl(query));
    if (!response.ok) {
        throw new Error(`Failed to search shows: ${response.status}`);
    }

    const data = await response.json();
    return Array.isArray(data)
        ? data.map((item) => item.show || item)
        : [];
};
