import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root, { Home, About, Contact, User, GitHub, GetStarted } from './components'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const setFavicon = () => {
  const favicon = document.getElementById('favicon') as HTMLLinkElement

  if (window.matchMedia('(prefers-color-scheme: dark)'))
    favicon.href = '/react-router-logo-dark.svg'; // Dark mode favicon
  else
    favicon.href = '/react-router-logo-light.svg'; // Light mode favicon
}

// Call the function initially
setFavicon()

// Optional: Update favicon on theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon)


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       }
//     ]
//   }
// ])

const gitHubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/SaqibISF')
  return response.json()
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='get-started' element={<GetStarted />} />
    <Route path='user/:id/:username' element={<User />} />
    <Route path='github' element={<GitHub />} loader={gitHubInfoLoader} />
  </Route>
))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
