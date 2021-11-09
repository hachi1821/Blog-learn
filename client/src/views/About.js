import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
	return (
		<>
			<Row className='mt-5' style={{ marginRight: 0 }}>
				<Col className='text-center'>
					<Button
						variant='warning'
						href='https://github.com/MaiTrongFit99'
						size='lg'
					>
						Visit my gitb for more info about me
					</Button>
				</Col>
			</Row>
			<Row className='mt-5' style={{ marginRight: 0 }}>
				<Col className='text-center'>
					<Button
						variant='secondary'
						href='https://www.facebook.com/Hayateus'
						size='lg'
					>
						Visit my facebook for more info about me
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default About
