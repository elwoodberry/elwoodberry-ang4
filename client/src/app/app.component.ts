import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	// PROPERTIES
	profile: any[];
	stackLogos: any[];
	github: any[];
	employers: any[];
	social: any[];

	constructor() {
		this.profile = [{
			firstName: "Elwood",
			middleName: "S.",
			lastName: "Berry III",
			title: "Full Stack JavaScript Developer",
			summary: "M.E.A.N Stack JavaScript Developer working in NodeJS, Express, Angular 2, MongoDB, Angular Material 2, Karma, Jasmine, StripeJS, etc.",
			address: "Blacklick, OH 43004",
			country: "United States Of America",
			phone: "(469) 609-7444",
			email: "me@elwoodberry.com"
		}];

		this.stackLogos = [
			{
				title: "tech-stack-mongodb",
				url: "https://www.mongodb.com/",
				imgLocation: "assets/img/tech-stack/01-mongo-db.png"
			},
			{
				title: "tech-stack-express",
				url: "http://expressjs.com/",
				imgLocation: "assets/img/tech-stack/02-express.png"
			},
			{
				title: "tech-stack-nodejs",
				url: "https://nodejs.org/en/",
				imgLocation: "assets/img/tech-stack/03-node.png"
			},
			{
				title: "tech-stack-angular",
				url: "https://angular.io/",
				imgLocation: "assets/img/tech-stack/04-angular.png"
			},
			{
				title: "tech-stack-typescript",
				url: "https://www.typescriptlang.org/",
				imgLocation: "assets/img/tech-stack/05-typescript.png"
			},
			{
				title: "tech-stack-jquery",
				url: "https://jquery.com/",
				imgLocation: "assets/img/tech-stack/06-jquery.png"
			},
			{
				title: "tech-stack-sass",
				url: "http://sass-lang.com/",
				imgLocation: "assets/img/tech-stack/07-sass.png"
			},
			{
				title: "tech-stack-google",
				url: "https://cloud.google.com/",
				imgLocation: "assets/img/tech-stack/08-google.png"
			}
		];

		this.github = [
			{
				title: "ElwoodBerry.com",
				url: "https://github.com/elwoodberry/elwoodberry",
				img: "assets/img/elwoodberry.png",
				description: "A simple solution to the distribution and display of my most current resume and portfolio projects.",
				stack: [
					{
						name: "Angular (v4)", 
						url: "https://www.npmjs.com/package/angular"
					},
					{
						name: "Node.js", 
						url: "https://nodejs.org"
					},
					{
						name: "Express.js", 
						url: "https://www.npmjs.com/package/express"
					}
				]
			},
			{
				title: "NFXN: Desktop App",
				url: "https://github.com/elwoodberry/elwoodberry",
				img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Forex.jpg",
				description: "Intended to be an independent desktop application that monitors custom price patterns.",
				stack: [
					{
						name: "Electron.js", 
						url: "https://www.npmjs.com/package/electron"
					},
					{
						name: "Angular (v4)", 
						url: "https://www.npmjs.com/package/angular"
					},
					{
						name: "Moment.js", 
						url: "https://www.npmjs.com/package/moment"
					}
				]
			},
			{
				title: "NFXN: Price Capture",
				url: "https://github.com/elwoodberry/elwoodberry",
				img: "http://www.wikinvest.com/images/0/08/Price_pattern.png",
				description: "Every second this script will scrape currency pair price data for multiple pairs. Every minute this script will evalutate the high, low, open and close price for each pair and log the price in a database.",
				stack: [
					{
						name: "Moment.js", 
						url: "https://www.npmjs.com/package/moment"
					},
					{
						name: "Cheerio", 
						url: "https://www.npmjs.com/package/cheerio"
					},
					{
						name: "Request", 
						url: "https://www.npmjs.com/package/request"
					}
				]
			},
			{
				title: "SimpleStrips.com Single Page Application(SPA)",
				url: "https://github.com/elwoodberry/elwoodberry",
				img: "https://www.attachmate.com/blogs/legacymodernization/wp-content/uploads/lm/web-form.jpg",
				description: "Diabetic medical supply distribution company simple vendor intake solution. Resposive web based desktop and mobile solution for the management of vendor data, appointments with vendors and sales data.",
				stack: [
					{
						name: "Angular (v4)", 
						url: "https://www.npmjs.com/package/angular"
					},
					{
						name: "NG Bootstrap", 
						url: "https://www.npmjs.com/package/ng-bootstrap"
					},
					{
						name: "Moment.js", 
						url: "https://www.npmjs.com/package/moment"
					}
				]
			}
		];

		this.employers = [
			{
				name: "mcdonalds",
				img: "assets/img/employers/01-mcdonalds.png",
				url: "https://www.mcdonalds.com/us/en-us/careers/training-and-education.html"
			},
			{
				name: "mediaGeneral",
				img: "assets/img/employers/02-media-general.png",
				url: "http://www.nexstar.tv"
			},
			{
				name: "ignite",
				img: "assets/img/employers/03-ignite-technologies.png",
				url: "http://www.ignitetech.com"
			},
			{
				name: "jcpenney",
				img: "assets/img/employers/04-jcpenney.png",
				url: "http://www.jcpenney.com"
			},
			{
				name: "globecomm",
				img: "assets/img/employers/05-globecomm.png",
				url: "http://www.globecomm.com"
			},
			{
				name: "verizon",
				img: "assets/img/employers/06-verizon.png",
				url: "http://fios.verizon.com/"
			},
			{
				name: "burgerKing",
				img: "assets/img/employers/07-burger-king.png",
				url: "https://www.bk.com"
			},
			{
				name: "bankofamerica",
				img: "assets/img/employers/08-bank-of-america.png",
				url: "https://www.bankofamerica.com"
			}
		];

		this.social = [
			{
				url: "https://www.linkedin.com/in/iamelwood/",
				class: "fa-linkedin"
			},
			{
				url: "https://plus.google.com/105777790091945308585",
				class: "fa-google-plus"
			},
			{
				url: "https://www.youtube.com/channel/UCTMTVUJ4UTBNBWZC13Y0wyg",
				class: "fa-youtube"
			},
			{
				url: "https://twitter.com/elwoodberry",
				class: "fa-twitter"
			}
		];

		// console.log("Title: " + this.stackLogos[0].title);

		// LINK TO RESUME - http://bit.ly/2prschc 

	}

	launchResume = function(){
		console.log("Launch External Resume...")
	};




}
