import FilterComps from "../filterComponents/filterComp";
import useLecture from "../../hooks/useLecture"

export default function Head({numero}) {

    const {lectureListLength} = useLecture()

    return(
        <>
            <h1>{numero - lectureListLength} {numero > 1 ? "libros" : "libro"} disponibles</h1>
                <h2>{lectureListLength} libros en la lista de lectura</h2>
            <FilterComps />
        </>
    )
}