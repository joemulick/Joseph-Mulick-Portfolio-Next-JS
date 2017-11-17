import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'
import IntroTop from '../components/indexComponents/IntroTop.js'
import AboutMe from '../components/indexComponents/AboutMe.js'
import MySkillset from '../components/indexComponents/MySkillset.js'
import MyProjects from '../components/indexComponents/MyProjects.js'
import ContactMe from '../components/indexComponents/ContactMe.js'


export default () => (
  <div>

  <Layout>
    
    <div className="top-section-container">
      <IntroTop />
    </div>

      <div>
        <h2><span>About Me</span></h2>
      </div>

    <div className="section-container">
    <AboutMe />
    </div>

      <div>
        <h2><span>My Skillset</span></h2>
      </div>

    <div className="section-container text-center">
    <MySkillset />
    </div>

      <div>
        <h2><span>My Projects</span></h2>
      </div>

    <div>
    <MyProjects />
    </div>

      <div>
        <h2><span>Contact Me</span></h2>
      </div>

    <div className="section-container">
    <ContactMe />
    </div>

  </Layout>

      <div className="back-to-top-container">
        <h2><span>Back To Top</span></h2>
      </div>

      <style jsx>{`
                  h2 {
                    width: 100%; 
                    text-align: center; 
                    border-bottom: 1px solid #000; 
                    line-height: 0.1em;
                    margin: 10px 0 20px; 
                  }
                  h2 span {
                    background:#fff; 
                    padding:0 10px; 
                  }
                 .back-to-top-container {
                  max-width: 96%;
                  margin: auto;
                 }
                 .section-container{
                  margin: 100px 0;
                 }
                 .top-section-container{
                  margin: 25px 0 0 0;
                 }
                 .skillset-container{
                  margin-top: 35px;
                 }         
      `}</style>

  </div>
)
