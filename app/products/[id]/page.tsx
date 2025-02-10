import { notFound } from 'next/navigation';
import Image from 'next/image';
import {IProduct} from "@/src/types";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

async function fetchProductById(id: string): Promise<IProduct | null> {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data: IProduct = await res.json();

    if (!data) {
        return null;
    }

    return data;
}

export default async function ProductPage({ params }: PageProps) {
    const id = (await params).id
    const product = await fetchProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-8 mt-16">
            <div className="w-4/5 flex flex-col md:flex-row items-center gap-8">
                <div className="border-4 rounded-md border-blue-500">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={400}
                        height={400}
                    />
                </div>

                <div className="w-4/5 text-gray-700">
                    <h1 className="text-3xl font-bold text-blue-600 mb-8">{product.title}</h1>
                    <p className="text-gray-900 font-bold text-2xl mb-4">Price: ${product.price}</p>
                    <p className="text-gray-900 font-bold text-xl mb-4">In Stock: {product.stock}</p>
                    <p className="text-gray-900 font-bold text-xl mb-4">Brand: {product.brand}</p>
                    <p className="text-xl mb-4">{product.description}</p>
                </div>
            </div>
        </div>
    );
}
