import { useCallback, useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { apiLogin, apiSignUp } from '../services/Api'
import { toast } from 'react-toastify'

function useAuth () {
  const [authData, setAuthData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await apiLogin(credentials)
      setAuthData(response)
      if (response && response.token && response._user) {
        toast.success('Vous êtes connecté !')
      }
      // TODO Appel d'api
    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const signup = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await apiSignUp(credentials)
      setAuthData(response)
      if (response && response.token && response._user) {
        toast.success('Vous êtes connecté !')
      }
      // TODO Appel d'api
    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setAuthData(null)
  }, [])

  useEffect(() => {
    const savedAuth = window.localStorage.getItem('AUTH')
    if (savedAuth) {
      setAuthData(JSON.parse(savedAuth))
    }
  }, [])

  useEffect(() => {
    if (authData) {
      window.localStorage.setItem('AUTH', JSON.stringify(authData))
    } else {
      window.localStorage.removeItem('AUTH')
    }
  }, [authData])

  return { authData, loading, error, login, logout, signup }
}

const useAuthSharable = () => useBetween(useAuth)

export { useAuthSharable as useAuth }
