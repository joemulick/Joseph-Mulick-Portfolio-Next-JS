import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'
import IntroTop from '../components/indexComponents/IntroTop.js'
import AboutMe from '../components/indexComponents/AboutMe.js'
import MySkillset from '../components/indexComponents/MySkillset.js'
import MyProjects from '../components/indexComponents/MyProjects.js'
import ContactMe from '../components/indexComponents/ContactMe.js'


export default () => (
  <Layout>
    
    <IntroTop />

      <div>
        <h2><span>About Me</span></h2>
      </div>

    <AboutMe />

      <div>
        <h2><span>My Skillset</span></h2>
      </div>

    <MySkillset />

      <div>
        <h2><span>My Projects</span></h2>
      </div>

    <MyProjects />

      <div>
        <h2><span>Contact Me</span></h2>
      </div>

    <ContactMe />

      <div>
        <h2><span>Back To Top</span></h2>
      </div>

  </Layout>
)
