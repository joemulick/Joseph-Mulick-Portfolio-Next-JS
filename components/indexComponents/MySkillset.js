import { Row, Col, Card, CardBody } from 'reactstrap'
import HTML from './svgIcons/HTML.js'
import CSS from './svgIcons/CSS.js'
import JAVASCRIPT from './svgIcons/JAVASCRIPT.js'
import JQUERY from './svgIcons/JQUERY.js'
import BOOTSTRAP from './svgIcons/BOOTSTRAP.js'
import GIT from './svgIcons/GIT.js'
import NODE from './svgIcons/NODE.js'
import MYSQL from './svgIcons/MYSQL.js'
import MONGODB from './svgIcons/MONGODB.js'
import EXPRESS from './svgIcons/EXPRESS.js'
import REACT from './svgIcons/REACT.js'
import AWS from './svgIcons/AWS.js'


const MySkillset = (props) => (

<div>
	<Row>
		<Col>
			<HTML />
		</Col>

		<Col>
			<CSS />
		</Col>

		<Col>
			<JAVASCRIPT />
		</Col>

		<Col>
			<JQUERY />
		</Col>

		<Col>
			<BOOTSTRAP />
		</Col>

		<Col>
			<GIT />
		</Col>
	</Row>
	<Row>
		<Col>
			<NODE />
		</Col>

		<Col>
			<MYSQL />
		</Col>

		<Col>
			<MONGODB />
		</Col>

		<Col>
			<EXPRESS />
		</Col>

		<Col>
			<REACT />
		</Col>

		<Col>
			<AWS />
		</Col>	

	     <style jsx>{`

	                `}</style>
	                
	</Row>
</div>
)

export default MySkillset



