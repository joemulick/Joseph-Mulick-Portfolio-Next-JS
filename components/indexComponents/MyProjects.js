import { Row, Col  } from 'reactstrap'

const MyProjects = (props) => (

<div>
	<Row>
		<Col>	
			<div className="text-center project-container top-proj-container">
				<h3 class="text-center">This Portfolio Website</h3>			
					<img className="cropped-img-portfolio" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510724797/Cropped_brpac6.png" />
                    <p>This portfolio website was built with the efficient <a href="https://github.com/zeit/next.js/" target="_blank">Next.js framework</a>. Next.js is a framework for server rendered or statically exported react applications.</p>
                    <p><a href="https://github.com/joemulick/Joseph-Mulick-Portfolio-Next-JS" target="_blank" class="btn btn-primary" role="button">Link to the Github Repository</a></p>
            </div>
	    </Col>
	</Row>
	<Row>
		<Col>
			<div className="text-center project-container">
				<h3>Saint Paschal Baylon Church - New Website (In Development)</h3>
				<img className="proj-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035230/SaintPaschalDevelopment_q2ng40.png" />
					<div>
                          <p> This website serves as the general website for all things Saint Paschal Baylon related. It features web scraping and a secured user authentication which allows an admin to login and edit upcoming events other tasks which they may need. 

                           <br/>
                           <br/>

                           This website is in the middle of development but if you wish to host the web application locally you can. Please see the easy to use instructions on the <a href ="https://github.com/joemulick/Saint-Paschal-Baylon-Church" target="blank">github repository</a>.

                           <br/>
                           <br/>

                              Web technologies used for this project:

                              <br/><br/>

                          Node.js <br/>
                          React.js <br/>
                          Express.js <br/>
                          Mongo db <br/>
                          Bootstrap <br/>
                          React-Router <br/>
                          Request + Cheeio (for web scraping) <br/>
                          </p>

                          <br/>
                          <br/>
                          <p><a href="https://github.com/joemulick/Saint-Paschal-Baylon-Church" target="_blank" class="btn btn-primary" role="button">Link to Github repository</a></p>
                    </div>
		    </div>
	    </Col>
	</Row>

	<Row>
		<Col>
			<div className="text-center project-container">
				<h3>Troll Patrul</h3>
				<img className="proj-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293169/TrollPatrul_lpnv0f.png" />
				    <div>
                        <p> Troll Patrul is a website dedicated to the Troll Patrul online community. It has a secured user authentication system that uses BCrypt and is a full stack web application that uses Node.js / Express and Handlebars as the viewengine. The web application was built 100% by me and is hosted at Heroku. The web app can be accessed at the link below the link below. </p> 
                        <p><a href="https://thawing-shelf-21665.herokuapp.com/" target="_blank" class="btn btn-primary" role="button">Link to Hosted Website</a></p>
                        <p><a href="https://github.com/joemulick/TrollPatrol" target="_blank" class="btn btn-primary" role="button">Link to Github Repository</a></p>
                    </div>
		    </div>
	    </Col>
	</Row>

	<Row>
		<Col>
			<div className="text-center project-container">
				<h3>Politihub</h3>
				<img className="proj-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293167/Politihub_gu1dvi.png" />
				 <div>
                    <p> Politihub is a user authenticated React driven full stack web application that allows the user to see all the latest bills that are to be voted on on various levels of government. It allows users to browse between Local, State, House and Senate bills.. It also alows the user to filter their selection by a number of unique parameters. This web application uses React, handlebars, pulls from two separate api’s and has unique user authentication. Project not currently hosted but the source code can be accessed via the link. Directions to set up and run Politihub in your local browser can be found in the github readme file.</p>
                    <p><a href="https://github.com/ElmasSayed/PolitiHub" target="_blank" class="btn btn-primary" role="button">Link to Github Repository</a></p>
                 </div>
		    </div>
	    </Col>
	</Row>

	<Row>
		<Col>
			<div class="text-center bottom-proj-container">
				<h3 class="text-center">Reel Films</h3>
				<img className="proj-img" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293167/ReelFilms_rwgj6z.png" />
				<div class="caption text-center">
                    <p>Reel films is a web application that shows movie trailers based on the a users pre-selected criteria. We sort the movie trailers by genre, rating, year released and much more to tailor a custom trailer watching experience to the end user. We utilized HMTL, CSS, Javascript, jQuery, Ajax API requests. We utilized 3 separate API’s including Youtube’s API, OMBD and The Movie DB. Click on the thumbnail to see the project which is hosted on github pages.</p>
                    <p><a href="https://joemulick.github.io/Reel-Films/" target="_blank" class="btn btn-primary" role="button">Link to Hosted Webpage</a> </p>
                    <p><a href="https://github.com/joemulick/Reel-Films" target="_blank" class="btn btn-primary" role="button">Link to Github Repository</a></p>
                </div>
		    </div>
	    </Col>
	</Row>
	            <style jsx>{`
			
					.proj-img{
						width:100%;
						height:auto;
					}
					.project-container{
						margin: 15px 0 15px 0;
						border-bottom: 0.5px solid;
					}
					.port-proj-container{
						margin: auto;
					}
					.cropped-img-portfolio{
						max-width: 100%;
					}
					.top-proj-container{
						margin: 25px 0px 15px 0px;
					}
					.bottom-proj-container{
						margin: 15px 0px 25px 0px;
					}


                `}</style>
					
</div>

)

export default MyProjects