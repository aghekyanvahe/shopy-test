import {useState, useEffect, useCallback, ChangeEvent} from "react";
import { IProduct } from "@/src/types";
import { PER_PAGE } from "../shared";
import {fetchProducts} from "@/src/services";

export const useProducts = (pageParam: string | null, initialSearchQuery = '') => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const [sortBy, setSortBy] = useState("title");
    const [order, setOrder] = useState("asc");
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(initialSearchQuery);

    useEffect(() => {
        const page = pageParam ? parseInt(pageParam as string, 10) : 1;
        setCurrentPage(page);
    }, [pageParam]);

    const loadProducts = useCallback(async () => {
        const { products, total } = await fetchProducts(currentPage, PER_PAGE, sortBy, order, debouncedSearchQuery);
        setProducts(products);
        setTotalProducts(total);
    }, [currentPage, debouncedSearchQuery, order, sortBy]);

    useEffect(() => {
        loadProducts().catch(err => {
            throw err;
        });
    }, [currentPage, sortBy, order, debouncedSearchQuery, loadProducts]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const isNextDisabled = currentPage * PER_PAGE >= totalProducts;

    const handleSortChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const [newSortBy, newOrder] = e.target.value.split("-");
        setSortBy(newSortBy);
        setOrder(newOrder);
    }, []);

    const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    }, []);

    return {
        products,
        currentPage,
        totalProducts,
        sortBy,
        order,
        searchQuery,
        debouncedSearchQuery,
        handlePageChange,
        isNextDisabled,
        handleSortChange,
        handleSearchChange,
        setSearchQuery,
    };
}
