import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from '@nextui-org/react'
import { useState } from 'react'
import { AcmeLogo } from './AcmeLogo'

function CustomNavBar () {
  const [isMenuOpen, setIsMenuOpen] = useState()
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>COCK TO DO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Todos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/auth' aria-current='page'>
            Auth
          </Link>
        </NavbarItem>
      </NavbarContent>
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
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full'
            href='/auth'
            size='lg'
          >
            Auth
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default CustomNavBar
