import React from 'react'

import {
  // BrowserRouter,
  // Route,
  RouterProvider,
  // Routes,
  createBrowserRouter
  // createHashRouter,
  // RouterProvider,
} from 'react-router-dom'
import InitFlexible from '../hooks/flexible'

import RootView from '../views/root'
import NotFound from '../views/404'
import Error from '../views/error'
import ExpressView from '../views/express'

import ComponentView from '../views/component'
import ButtonView from '../views/button'

/*
import { useNavigate } from 'react-router-dom';
// 在组件里面
const navigate = useNavigate();
// 通过navigate() 跳转页面，参数可以放在state里。
navigate('/your-route-path', { state: { object: object}});

// 下个页面获取state.
import { useLocation } from 'react-router-dom';
let location = useLocation();
const { object } = location.state;
*/

/*
const Root1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootView />} />
        <Route path="404" element={<NotFound />} />
        <Route path="error" element={<Error />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}
const Users = () => {
  return (
    <div>
    嵌套路由
    <Routes>
      <Route path=":id" element={<UserProfile />} />
      <Route path="me" element={<OwnUserProfile />} />
    </Routes>
    </div>
  )
}
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <ExpressView /> },
      { path: 'error', element: <Error /> },
      { path: 'express', element: <ExpressView /> }
    ]
  },
  { path: '/error', element: <Error /> },
  {
    path: '/component',
    element: <ComponentView />,
    children: [
      { path: '', element: <ButtonView /> },
      { path: 'button', element: <ButtonView /> }
    ]
  }
])

const Root = () => {
  React.useEffect(() => {
    InitFlexible()
  }, [])
  return <RouterProvider router={router} />
}

export default Root
