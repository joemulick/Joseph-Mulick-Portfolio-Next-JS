import { Row, Col } from 'reactstrap'

const IntroTop = (props) => (
<div>
 <Row className="top-row">
    <Col>

      <div className="intro-top-outer-container">

        <div className="intro-textandphoto-container">

          <div className="text-div-container">
            <h1 className="nameLine">My name is Joe Mulick</h1>
            <h2 className="nameLine">Full Stack Javascript Web Developer</h2> 
            <h2 className="nameLine">Los Angeles California</h2>
          </div>

          <div className="me-photo-div">
            <img className="me-photo" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg" />
          </div>

        </div> 

      </div>

    </Col>
  </Row>

  <Row>

    <Col>
      <img className="mern-stack" height="130px" width="auto" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035229/mern_n2shda.png" alt="photo-of-mern-stack" />
    </Col>

    <Col>
      <img className="los-angeles" height="130px" width="auto" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510361407/LAsmlgreyone_oswasr.png" alt="photo-of-los-angeles" />
    </Col>

  </Row>
                        <style jsx>{`

                      .nameLine {
                        text-align: center;
                      }
                      .me-photo{
                        max-height: 140px;           
                        width: auto;
                        margin-left: 20px;
                        border-radius: 50%;
                      }
                      .text-div-container{
                        display: inline-block;
                        flex: 0 0 65%;

                      }
                      .me-photo-div{
                        display: inline-block;
                        flex: 1;
                      }
                      .intro-textandphoto-container{
                        display: flex;
                        margin: auto;
                      }

                      
                  `}</style>
</div>
)

export default IntroTop