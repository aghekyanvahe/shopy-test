import React from "react";

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
    isPreviousDisabled: boolean;
    isNextDisabled: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange, isPreviousDisabled, isNextDisabled }) => {
    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={isPreviousDisabled}
                className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
            >
                &lsaquo;
            </button>
            <span className="mx-4 self-center text-lg">{currentPage}</span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={isNextDisabled}
                className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
            >
                &rsaquo;
            </button>
        </div>
    );
};