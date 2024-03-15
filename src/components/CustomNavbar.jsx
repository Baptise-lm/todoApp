import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownMenu, DropdownItem, DropdownTrigger, Avatar, Dropdown } from '@nextui-org/react'
import { useState } from 'react'
import { AcmeLogo } from './AcmeLogo'
import { useAuth } from '../hooks/authHooks'

function CustomNavBar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { authData, logout } = useAuth()

  const isLoggedIn = authData?.token && authData?._user

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Todos
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive>
          <Link href='/auth' aria-current='page'>
            Auth
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {
        isLoggedIn
          ? (
            <NavbarContent as='div' justify='end'>
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    name='Jason Hughes'
                    size='sm'
                    src='https://i.ibb.co/1TCCdd4/benn-Copie.jpg'
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                  <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='font-semibold'>Signed in as a CHAD and as</p>
                    <p className='font-semibold'>hammer@face.com</p>
                  </DropdownItem>
                  <DropdownItem key='logout' color='danger' onPress={logout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
            )
          : (

            <NavbarContent justify='end'>
              <NavbarItem className='hidden lg:flex'>
                <Link href='#'>Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color='primary' href='#' variant='flat'>
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
            )
}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full'
            href='/'
            size='lg'
          >
            Todos
          </Link>
        </NavbarMenuItem>
        {/* <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full'
            href='/auth'
            size='lg'
          >
            Auth
          </Link>
        </NavbarMenuItem> */}
      </NavbarMenu>
    </Navbar>
  )
}

export default CustomNavBar
