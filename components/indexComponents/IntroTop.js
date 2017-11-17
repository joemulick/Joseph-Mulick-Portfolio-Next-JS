import { Row, Col } from 'reactstrap'

const IntroTop = (props) => (
<div>
 <Row>
    <Col>

      <div className="intro-top-outer-container">

        <div className="intro-textandphoto-container">

          <div className="text-div-container text-center">
            <h1 className="nameLine">My name is Joe Mulick</h1>
            <h2 className="nameLine-desc text-center">Full Stack Javascript Web Developer</h2> 
            <h2 className="nameLine-location text-center">Los Angeles California</h2>
          </div>

          <div className="me-photo-div">
            <img className="me-photo" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg" />
          </div>



        </div> 

      </div>

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
                      .img-row-container{
                        margin: 100px 0;
                      }

                      @media screen (max-width: 550px) {
                        nameLine-location {
                          font-size: 0.5em !important;
                        }
                        nameLine-desc{
                          font-size: 0.5em!important;
                        }
                      }


                  `}</style>
</div>
)

export default IntroTop