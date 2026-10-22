export const getRandomItems = (items = [], count = 6) => {
    if (!Array.isArray(items) || items.length === 0) return [];
    const pool = [...items];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count);
};

export default getRandomItems;
