import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../hooks/authHooks'

function LoginForm () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
  }

  return (
    <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit}>
      <Input
        name='email'
        type='email'
        label='Email'
        variant='flat'
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        variant='flat'
        onChange={handleChange}
        value={formData.password}
      />
      <Button type='submit' variant='solid' color='primary'>
        Log In
      </Button>
    </form>
  )
}

export default LoginForm
