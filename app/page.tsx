'use client'
import Link from 'next/link';
import React, { useEffect } from "react";
import {Card} from "@/src/components";
import {IProduct} from "@/src/types/product";
import {fetchProducts} from "@/src/services";

const LandingPage = () => {
    const [products, setProducts] = React.useState<IProduct[]>([])

    useEffect(() => {
        fetchProducts(1, 3, 'title', 'asc').then(({ products }) => {
            setProducts(products)
        });
    }, [])

    return (
        <div className="text-gray-900">
            <section className="mt-20 py-8 flex flex-col gap-2 justify-center items-center text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Shopy</h2>
                <p className="text-lg text-gray-700 mb-8">Browse a wide variety of amazing products that suit all your
                    needs!</p>

                <Link
                    href="products"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full text-xl hover:bg-blue-700 transition-all"
                >
                    Explore Products
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {products.map((product) => <Card product={product} key={product.id}/>)}
                </div>
            </section>
        </div>
    );
}

export default LandingPage