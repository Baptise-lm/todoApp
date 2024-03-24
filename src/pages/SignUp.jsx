import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../hooks/authHooks'
import SignUpForm from '../components/SignUpForm'

function SignUp () {
  const navigate = useNavigate()

  const { authData } = useAuth()

  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])

  return (
    <div className='container mx-auto flex flex-col gap-4 mt-4 px-10 items-center lg:w-1/2'>
      <h1>Inscription</h1>
      <SignUpForm />
    </div>
  )
}

export default SignUp
