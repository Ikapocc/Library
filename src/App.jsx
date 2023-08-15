import './App.css'
import LectureProvider from './assets/components/context/contextLecture'
import Head from './assets/components/header/header'
import RenderBooks from './assets/components/rendering/renderData'
import RenderList from './assets/components/rendering/renderList'
import useFilter from './assets/hooks/useFilter'
import books from "./assets/jsons/books.json"

function App() {
  const dataBooks = books.library
  const {BooksFilter} = useFilter()

  const filtro = BooksFilter(dataBooks)
  const totalBooks = filtro.length

  return (
    <LectureProvider>
      <header>
        <Head 
          numero={totalBooks}
        />
      </header>

      <main>
        <RenderBooks 
          books={filtro}
        />

        <RenderList />
      </main>
      
    </LectureProvider>
  )
}

export default App
