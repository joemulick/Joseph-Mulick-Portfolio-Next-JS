import Header from './Header'
import Head from 'next/head'
import { Container } from 'reactstrap'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
<div>
    <Head>
      <title>Joseph Mulick Portolio & Blog || Next.js / React.js </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <Container>
      {props.children}
    </Container>
  </div>
)

export default Layout
