import { Row, Col } from 'reactstrap'

const IntroTop = (props) => (
<div>
 <Row>
    <Col>

      <div className="intro-top-container">

        <div className="text-div-container">
          <h1 className="nameLine">My name is Joe Mulick</h1>
          <h2 className="nameLine">Full Stack Javascript Web Developer</h2> 
          <h2 className="nameLine">Los Angeles California</h2>
        </div>

        <div className="me-photo-div">
          <img className="me-photo" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg" />
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
                      .text-div-container {
                        margin: auto;
                        width: 75%;
                      }
                      .me-photo{
                        max-width: 40%;
                        margin-left: 10%;
                        height: auto;
                        border-radius: 50%;
                      }
                      .me-photo-div{
                        width: auto;
                      }
                      .intro-top-container{
                        max-width: 85%;
                        display:flex;
                        flex-direction:row;
                        justify-content: space-around;
                        margin: 45px auto;
                      }
                      
                  `}</style>
</div>
)

export default IntroTop