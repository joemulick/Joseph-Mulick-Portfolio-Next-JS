 import { Row, Col } from 'reactstrap'

const IntroTop = (props) => (
 <Row>
          <Col xs={6}>

            <div className="text-div-container">
            <h1 className="nameLine">My name is Joe Mulick</h1>
            <h2 className="nameLine">Full Stack Javascript Web Developer, Los Angeles California</h2>
            </div>
          </Col>
          <Col xs={6}>
            <div className="photo-div-container">
            <img className="me-photo" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg" />

              <style jsx>{`
                  .nameLine {
                    text-align: center;
                  }
                  .text-div-container {
                    margin: auto;
                  }
                  .photo-div-container{
                    margin: auto;
                  }
                  .me-photo{
                    max-height: 215px;
                    max-width: 215px;
                    border-radius: 50%;
                    margin: auto;
                  }
                  
              `}</style>
            </div>

          </Col>
  </Row>
)

export default IntroTop