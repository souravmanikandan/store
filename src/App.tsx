import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const Home = lazy(() => import('./Pages/Home'))
  const Images = lazy(() => import('./Pages/ImagesPage'))
  const Links = lazy(() => import('./Pages/LinksPage'))
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path='/store/' element={<Home />}/>
        <Route path='/store/images' element={<Images />}/>
        <Route path='/store/Links' element={<Links />} />
      </Routes>
    </Suspense>
  )
}

export default App
