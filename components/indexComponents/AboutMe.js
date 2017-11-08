import Link from 'next/link'
import { Row, Col  } from 'reactstrap'

const AboutMe = (props) => (


<Row className="about-me-container">

	<Col>
		<div className="text-container">
		    <p>I am a full stack web developer and entrepreneur from Los Angeles, 
		    California. I am passionate about web development and enjoy discovering
		    new technologies which I can use to develop websites and useful web 
		    applications in my spare time. I am driven and always looking to tackle 
		    the next challenge.
		    </p>
	    </div>

	    <div className="text-container">
		    <p>I attended UCLA extension coding bootcamp which was a tremendous experience 
		    where I learned to create and impliment full stack web applications using the 
		    most relevent web technologies. See my skill set below,
		    <a href="https://github.com/joemulick" target="blank"> or check out my github</a>
		    </p>
	    </div>

	    <style jsx>{`
                  .text-container {
                    text-align: center;
                  }
                              
        `}</style>

    </Col>

</Row>

)

export default AboutMe