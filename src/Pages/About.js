import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './About.css';

function About() {
return (
	<div className="Type">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString("Pikowawi is an online inventory Management Tool")
		
	.pauseFor(1000)
	.deleteAll()
	.typeString("Have A Good day")
	.start();
	}}
	/>
	</div>
);
}

export default About;
