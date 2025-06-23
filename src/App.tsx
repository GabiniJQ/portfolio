import HomePage from '@/pages/home'
import Layout from '@/shared/components/Layout'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
