import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Profile from './components/Profile'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/Quiz" element={<Quiz />}></Route>
      <Route path="/Result/:id" element={<Result />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
)
