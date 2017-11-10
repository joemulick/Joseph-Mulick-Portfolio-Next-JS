import { Row, Col  } from 'reactstrap'

const ContactMe = (props) => (


<Row>

	<Col>
		<div>
			<img className="contact-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-email_rdpr8q.png" />
	    </div>
    </Col>
	<Col>
		<div>
			<img className="contact-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-linkedin_tqrwjt.png" />
	    </div>
    </Col>
	<Col>
		<div>
			<img className="contact-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-github-non_uv4dzi.png" />
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