import React from 'react'
import { useRoutes } from 'react-router-dom'
import { HomePage, SigninPage, SignupPage } from '../pages'

const RoutesComponent = () => {
  return (
    <div>
      {useRoutes([
        {path:"/signin", element:<SigninPage/>},
        {path:"/signup", element:<SignupPage/>},
        {path:"/", element:<HomePage/>}
      ])}
    </div>
  )
}

export default RoutesComponent
