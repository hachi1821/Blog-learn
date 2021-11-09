import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItLogo from '../../assets/logout.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

const NavbarMenu = () => {
	const {
		authState: {
			user: { username }
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser()

	return (
		<Navbar className="navbar navbar-expand-lg navbar-dark bg-success">
			<Navbar.Brand className='font-weight text-black'>
				<img
					src={learnItLogo}
					alt='learnItLogo'
					width='32'
					height='32'
					className='mr-2'
				/>

			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto' >
					<Nav.Link
						className='font-weight-bolder '
						to='/dashboard'
						as={Link}

					>
						CONTENT
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder'
						to='/about'
						as={Link}
					>
						CONTACT
					</Nav.Link>
				</Nav>

				<Nav>
					<Nav.Link className='font-weight-bolder text-white' disabled>
						Welecome : {username}
					</Nav.Link>
					<Button
						variant='danger'
						className='font-weight-bolder text-white'
						onClick={logout}
						font-size='24'
						font-weight='600'
					>
						<img
							src={logoutIcon}
							alt='logoutIcon'
							width='30'
							height='30'
							className='mr-2'
						/>
						Logout
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavbarMenu
