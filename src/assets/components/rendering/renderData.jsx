import * as React from 'react';
import Button from '@mui/material/Button';
import useLecture from "../../hooks/useLecture"

export default function RenderBooks({books}) {
   const {añadirLista, lectureList} = useLecture()

   const fullList = books.filter(items => {
    return !lectureList.some(item  => {
      return item.book.ISBN === items.book.ISBN
    })
   })

    return(
        <ul>
          {fullList.map(book => (
            <li key={book.book.ISBN}>
              <img src={book.book.cover} alt={book.book.title} loading='lazy'></img>
              <div className='buttonData'>
                <Button onClick={() => añadirLista(book)} variant="outlined">Añadir</Button>
                <Button variant="outlined">Detalles</Button>
              </div>
            </li>
          ))}
        </ul>
      )
}

