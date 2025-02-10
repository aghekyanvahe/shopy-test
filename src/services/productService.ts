export const fetchProducts = async (page: number, pageSize: number, sortBy: string, order: string, searchQuery = '') => {
    const url = `https://dummyjson.com/products/search?q=${searchQuery}&skip=${(page - 1) * pageSize}&limit=${pageSize}&sortBy=${sortBy}&order=${order}`;
    const data = await fetch(url).then((res) => res.json());

    return { products: data.products, total: data.total };
}
