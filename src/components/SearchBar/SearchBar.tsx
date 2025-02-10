import React, { ChangeEvent } from "react";

interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
    return (
        <div>
            <label htmlFor="search" className="mr-2">Search</label>
            <input
                id="search"
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={onSearchChange}
                className="border p-2 rounded"
            />
        </div>
    );
};