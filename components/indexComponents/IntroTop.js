import { Row, Col, Media } from 'reactstrap'

const IntroTop = (props) => (
<div>
 <Row>
    <Col xs="12" sm="12" md="12" lg={{ size: 5, offset: 1}}>
          <div className="left-intro-div text-center">
            <h1 className="nameLine">My name is Joe Mulick</h1>
            <h2 className="nameLine-desc text-center">Full Stack Javascript Web Developer</h2> 
            <h2 className="nameLine-location text-center">Los Angeles California</h2>
          </div>
    </Col>
    <Col xs="12" sm="12" md="12" lg="6">
        <Media>
          <Media left middle style={{margin: "auto"}}>
            <Media object style={{ maxHeight: "140px", borderRadius: "50%", margin: "auto"}}  src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg" alt="Photo-Of-Joe-Mulick" />
          </Media>
        </Media>
    </Col>
  </Row>

  <div className="img-row-container">
    <Row>
      <Col xs="12" sm="12" md="12" lg="6">
        <img className="mern-stack" height="auto" width="100%" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035229/mern_n2shda.png" alt="photo-of-mern-stack" />
      </Col>

      <Col xs="12" sm="12" md="12" lg="6">
        <img className="los-angeles" height="auto" width="100%" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510361407/LAsmlgreyone_oswasr.png" alt="photo-of-los-angeles" />
      </Col>
    </Row>
  </div>
                    <style jsx>{`
                      .nameLine {
                        text-align: center;
                      }
                      .me-photo{
                        display: block;
                        max-height: 140px;           
                        width: auto;
                        border-radius: 50%;
                        margin: auto;
                      }
                      .img-row-container{
                        margin: 100px 0;
                      }
                      @media screen (max-width: 550px) {
                        .nameLine-location {
                          font-size: 0.5em !important;
                        }
                        .nameLine-desc{
                          font-size: 0.5em!important;
                        }
                        .left-intro-div{
                          margin: auto;
                        }
                      }
                      @media screen (max-width: 991px) {
                        .left-intro-div{
                          margin-bottom: 50px;
                        }
                      }
                  `}</style>
</div>
)

export default IntroTop