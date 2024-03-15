import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { useEffect } from 'react'
import { useAuth } from '../hooks/authHooks'

function Auth () {
  const navigate = useNavigate()

  const { authData } = useAuth()

  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])

  return (
    <div className='container mx-auto flex flex-col gap-4 mt-4 px-10 items-center'>
      <h1>CONNEXION</h1>
      <LoginForm />
    </div>
  )
}

export default Auth
