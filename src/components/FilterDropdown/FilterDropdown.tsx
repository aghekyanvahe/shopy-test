import React, {ChangeEvent, useMemo} from "react";

interface FilterDropdownProps {
    sortBy: string;
    order: string;
    onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ sortBy, order, onSortChange }) => {
    const selectValue = useMemo(() => `${sortBy}-${order}`,
        [order, sortBy]
    )

    return (
        <div>
            <label htmlFor="sort" className="mr-2">Sort By:</label>
            <select
                id="sort"
                onChange={onSortChange}
                className="border p-2 rounded"
                value={selectValue}
            >
                <option value="title-asc">Title: A to Z</option>
                <option value="title-desc">Title: Z to A</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>
    );
};
