import { useContext } from "react";
import { filterCreate } from "../components/context/contextFilter";

export default function useFilter() {
    const {filterType, setFilterType} = useContext(filterCreate)

    const BooksFilter = (books) => {
        return books.filter(book => book.book.pages >= filterType.pages[0] && filterType.pages[1] >= book.book.pages  && 
            (book.book.genre === filterType.genre || filterType.genre === "all"))
    }

    return {filterType, setFilterType, BooksFilter}
}