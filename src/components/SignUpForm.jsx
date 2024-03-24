import { Button, Input, Link } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../hooks/authHooks'

function SignUpForm () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  })

  const { signup } = useAuth()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(formData)
    // j'ai testé de placé le login dans plusieurs parties du code
    // login(formData)
  }

  return (

    <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit}>
      <Input
        name='firstName'
        type='firstName'
        label='FirstName'
        variant='flat'
        onChange={handleChange}
        value={formData.firstname}
      />
      <Input
        name='lastName'
        type='lastName'
        label='LastName'
        variant='flat'
        onChange={handleChange}
        value={formData.lastName}
      />
      <Input
        name='phone'
        type='phone'
        label='Phone'
        variant='flat'
        onChange={handleChange}
        value={formData.phone}
      />
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
        Sign Up
      </Button>
      <Button as={Link} color='primary' href='/auth' variant='flat'>
        Log In
      </Button>
    </form>
  )
}

export default SignUpForm
