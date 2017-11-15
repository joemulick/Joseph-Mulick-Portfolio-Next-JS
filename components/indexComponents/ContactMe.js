import { Row, Col  } from 'reactstrap'

const ContactMe = (props) => (


<Row>

	<Col>
		<div className="text-center">
			<a href="mailto:joemulick@gmail.com" target="_blank"><img className="contact-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-email_rdpr8q.png" /></a>
	    </div>
    </Col>
	<Col>
		<div className="text-center">
			<a href="https://www.linkedin.com/in/joemulick/" target="_blank"><img className="contact-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-linkedin_tqrwjt.png" /></a>
	    </div>
    </Col>
	<Col>
		<div className="text-center">
			<a href="https://github.com/joemulick" target="_blank"><img className="contact-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-github-non_uv4dzi.png" /></a>
	    </div>
    </Col>
    	<style jsx>{`
            .contact-img {
                    max-height: 75px;
                    max-width: 75px;
            }
                              
        `}</style>
</Row>

)

export default ContactMe