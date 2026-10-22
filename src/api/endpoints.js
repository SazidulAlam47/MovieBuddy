export const TVMAZE_BASE_URL = "https://api.tvmaze.com";

export const SHOWS_URL = `${TVMAZE_BASE_URL}/shows`;

export const getSearchUrl = (query) =>
    `${TVMAZE_BASE_URL}/search/shows?q=${encodeURIComponent(query.trim())}`;
