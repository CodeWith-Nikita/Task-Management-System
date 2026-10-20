import { Route, Routes } from 'react-router'
import SignUpPage from './SignUpPage'

const AppRoutes = () => {
  return (
    <div className='relative'>
      <Routes>
        <Route path="/" element={<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
