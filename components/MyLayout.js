import Head from 'next/head'
import { Container } from 'reactstrap'
import { initGA, logPageView } from '../utils/analytics'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
        <div>
          <Head>
            <title>Joseph Mulick Portolio & Blog || React.js / Next.js </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
            <meta name="google-site-verification" content="f_tg1hS9okaYh61Se_ln5zu_MKJDI_EnmLR72icNWIU" />
          </Head>
          <Container>
            {this.props.children}
          </Container>
        </div>
    )
  }
}