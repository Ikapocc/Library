import useLecture from "../../hooks/useLecture"


export default function RenderList() {

    const {lectureList, limpiarLista, removerLibro} = useLecture()

    return(
        <aside>
            <section className='list'>
                <div className='listHead'>
                    <h1>Lista de lectura</h1>
                    <button onClick={() => limpiarLista()} className="deleteButton">X</button>
                </div>
                <ul>
                    {lectureList?.map(book => (
                        <li key={book.book.ISBN}>
                            <img src={book.book.cover}></img>
                            <button onClick={() => removerLibro(book)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    )
}