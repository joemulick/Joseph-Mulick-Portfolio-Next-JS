import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Alert } from 'reactstrap'


export default () => (
  <Layout>
    <h1>My Blog</h1>
    <h1>Test from index.js</h1>
    <Alert color="primary">
        This is a primary alert — check it out!
    </Alert>
  </Layout>
)
