import Image from "next/image";
import Link from "next/link";
import React from "react";
import {IProduct} from "@/src/types";

interface CardProps {
    product: IProduct;
}

export const Card: React.FC<CardProps> = ({product}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
                className="w-full"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-900 font-bold">${product.price}</p>
            <Link href={`/products/${product.id}`}>
                <p className="text-blue-600 hover:underline mt-4 block">View Details</p>
            </Link>
        </div>
    );
}