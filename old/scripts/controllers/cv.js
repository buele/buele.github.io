'use strict';

/**
 * @ngdoc function
 * @name bueleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bueleApp
 */
angular.module('bueleApp')
  .controller('CVCtrl', function ($scope,$location, $anchorScroll) {
  	$location.hash('topapp');
	$anchorScroll();
  $scope.experiences =
  [
  	{ 
			title:"Coder",
			company: "Serco S.P.A.",
			time: " December 2014 – Present  Italy ",
			skills:["Dissemination system software development for European Space Agency","Java, Spring, OWL, TestNG","Javascript (OOP), AngularJS, Polymer 1.0, HTML5, CSS3, LESS, bower/npm, Web component tester"]

		},
  	{ 
			title:"Freelancer Coder",
			company: "Raffaele Bua",
			time: " February 2013 – December 2014  Italy ",
			skills:["Backend Rest-ful developer: PHP, SQL, Doctrine, Slim, Node, Express",
			"Client web developer: MVC AngularJS, EmberJS, jQuery, Html5"]

		},
		{ 
			title:"Full-stack web developer",
			company: "DI-SIDE",
			time: "November 2012 – February 2013 (4 months) Sestu",
			skills:["Full-stack web developer (Symfony 2) in Scrum environment"]
		},{

			title: "Front end software Developer",
			company: "modomodo",
			time: "January 2012 – October 2012 (10 months) Milan Area, Italy",
			skills: ["Front end web software developer"]
		},{
			title:"Software Developer",
			company:"Handcrafted software srl / BlackSheepLab",
			time: "April 2011 – November 2011 (8 months) Venice Area, Italy",
			skills: ["iOS Developer: Objective-C, C/C ", "Backend Java Developer: Java Servlets, Tomcat, MYSQL"]
		},
		{
			title:"Bachelor’s degree in Computer science engineering (Final mark: 109/110)",
			company:"University of Pisa",
			time: "2004 – 2010 (6 years) Pisa"
		},
		{
			title: "Thesis - Multithreaded environment code parallelisation for electro-magnetic fields calculation",
			company: "University of Pisa",
			skills:["C", "POSIX", "Multithreading Programming"]
		}


	];   
});
