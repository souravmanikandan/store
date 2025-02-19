import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const Home = lazy(() => import('./Pages/Home'))
  const Links = lazy(() => import('./Pages/LinksPage'))
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/Links' element={<Links />} />
      </Routes>
    </Suspense>
  )
}

export default App
