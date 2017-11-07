import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'


export default () => (
  <Layout>
    
    <Row>
          <Col>
          	<h1 className="nameLine">My name is Joe Mulick</h1>
          	<h2 className="nameLine">Full Stack Javascript Web Developer, Los Angeles California</h2>
          	<style jsx>{`
		      .nameLine {
		        text-align: center;
		      }
		    `}</style>
          </Col>
          <Col>
          	<img src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg" />
          </Col>
    </Row>

  </Layout>
)
