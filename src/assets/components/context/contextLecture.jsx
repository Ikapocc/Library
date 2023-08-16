import { createContext, useEffect, useState } from "react";

export const lectureCreate = createContext()

export default function LectureProvider({children}) {
    const [lectureList, setLectureList] = useState([])

    const lectureListLength = lectureList.length

    useEffect(() => {
        const storedList = localStorage.getItem("lectureList");
        if (storedList) {
            setLectureList(JSON.parse(storedList));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("lectureList", JSON.stringify(lectureList));
    }, [lectureList]);

    function añadirLista(item) {
        const indexBook = lectureList.findIndex(books => {
            return books.book.ISBN === item.book.ISBN
        })

        if (indexBook < 0) {
            setLectureList(prev => ([
                ...prev,

                {
                    ...item
                }
            ]))
            console.log("Libro añadido a la lista de lectura");
        }else{
            console.log("El libro ya esta en la lista de lectura");
        }
    }

    function limpiarLista() {
        setLectureList([])
    }

    function removerLibro(item) {
        const book = lectureList.find(books => {
            return books.book.ISBN === item.book.ISBN
        })

        if (book) {
            setLectureList(prev => [...prev].filter(item => {
                return item !== book
            }))
        }
    }
    
    return(
        <lectureCreate.Provider value={{
            lectureList, setLectureList, limpiarLista, añadirLista, removerLibro, lectureListLength
        }}>
            {children}
        </lectureCreate.Provider>
    )
}