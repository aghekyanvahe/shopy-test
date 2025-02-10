'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, FilterDropdown, Pagination, SearchBar } from "@/src/components";
import {useEffect} from "react";
import {IProduct} from "@/src/types/product";
import { useProducts } from '@/src/hooks';

const Products =() =>  {
    const searchParams = useSearchParams();
    const page = searchParams.get("page");

    const {
        products,
        currentPage,
        sortBy,
        order,
        searchQuery,
        handlePageChange,
        isNextDisabled,
        handleSortChange,
        handleSearchChange
    } = useProducts(page);

    const router = useRouter();

    useEffect(() => {
        if (currentPage !== 1) router.push(`/products?page=${currentPage}`);
    }, [currentPage, router]);

    return (
        <div className="min-h-screen bg-gray-100 p-8 mt-12">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">Our Products</h1>

            <div className="flex items-center gap-6 mb-4">
                <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
                <FilterDropdown sortBy={sortBy} order={order} onSortChange={handleSortChange} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product: IProduct) => (
                    <Card product={product} key={product.id} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                isPreviousDisabled={currentPage === 1}
                isNextDisabled={isNextDisabled}
            />
        </div>
    );
}

export default Products;