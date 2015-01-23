angular.module('starter.controllers', ['ionic'])

	.config(function ($compileProvider){
  		// Set the whitelist for certain URLs just to be safe
  		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
	})
	
	.controller('IntroCtrl', function($scope, $location) {
	  // Called to navigate to the main app
	  var startApp = function() {
	    $location.path('/app/schedule');
	
	    // Set a flag that we finished the tutorial
	    window.localStorage['didTutorial'] = true;
	  };
	
	  // Check if the user already did the tutorial and skip it if so
	  if(window.localStorage['didTutorial'] === "true") {
	    startApp();
	    return;
	  };
	
	  // Move to the next slide
	  $scope.next = function() {
	    $scope.$broadcast('slideBox.nextSlide');
	  };
	
	
	  // Our initial right buttons
	  var rightButtons = [
	    {
	      content: 'Next',
	      type: 'button-positive button-clear',
	      tap: function(e) {
	        // Go to the next slide on tap
	        $scope.next();
	      }
	    }
	  ];
	  
	  // Our initial left buttons
	  var leftButtons = [
	    {
	      content: 'Skip',
	      type: 'button-positive button-clear',
	      tap: function(e) {
	        // Start the app on tap
	        startApp();
	      }
	    }
	  ];
	
	  // Bind the left and right buttons to the scope
	  $scope.leftButtons = leftButtons;
	  $scope.rightButtons = rightButtons;
	
	
	  // Called each time the slide changes
	  $scope.slideChanged = function(index) {
	
	    // Check if we should update the left buttons
	    if(index > 0) {
	      // If this is not the first slide, give it a back button
	      $scope.leftButtons = [
	        {
	          content: 'Back',
	          type: 'button-positive button-clear',
	          tap: function(e) {
	            // Move to the previous slide
	            $scope.$broadcast('slideBox.prevSlide');
	          }
	        }
	      ];
	    } else {
	      // This is the first slide, use the default left buttons
	      $scope.leftButtons = leftButtons;
	    }
	    
	    // If this is the last slide, set the right button to
	    // move to the app
	    if(index == 2) {
	      $scope.rightButtons = [
	        {
	          content: 'Get Started!',
	          type: 'button-positive button-clear',
	          tap: function(e) {
	            startApp();
	          }
	        }
	      ];
	    } else {
	      // Otherwise, use the default buttons
	      $scope.rightButtons = rightButtons;
	    }
	  };
	})

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $window) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
        
        $scope.openUrl = function() {
    		var ref = window.open('http://mobile.ubabenefits.com/UBAConIntro/UBAConPresentations/tabid/137/Default.aspx', '_system', 'location=yes');
    	};
    	
    	$scope.openFeedback = function() {
    		var refFeedback = window.open('http://mobile.ubabenefits.com/UBAConIntro/UBAConFeedback/tabid/139/Default.aspx', '_system', 'location=yes');
    	};
    })
    

    .controller('ScheduleCtrl', function ($scope, Schedule) {
        $scope.sessions = Schedule.all();
    })

    .controller('SessionDetailCtrl', function ($scope, $stateParams, Schedule) {
        $scope.session = Schedule.get($stateParams.sessionId);
    })


    .controller('VendorCtrl', function ($scope, Vendors) {
        $scope.vendors = Vendors.all();
    })

    .controller('VendorDetailCtrl', function ($scope, $stateParams, Vendors) {
        $scope.vendor = Vendors.get($stateParams.vendorId);
    })
    
    .controller('SpeakerCtrl', function ($scope, Speakers) {
        $scope.speakers = Speakers.all();
    })

    .controller('SpeakerDetailCtrl', function ($scope, $stateParams, Speakers) {
        $scope.speaker = Speakers.get($stateParams.speakerId);
    })
    
    .controller('PresentationCtrl', function ($scope, $window, Presentations) {
        $scope.presentations = Presentations.all();
        
        $scope.openUrl = function() {
    		var ref = window.open('http://mobile.ubabenefits.com/UBAConIntro/UBAConPresentations/tabid/137/Default.aspx', '_blank', 'location=yes', 'hidden=no');
    		ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
         	ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
         	ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
         	ref.addEventListener('exit', function(event) { alert(event.type); });
    	};
    })

    .controller('PresentationDetailCtrl', function ($scope, $stateParams, Presentations) {
        $scope.presentation = Presentations.get($stateParams.presentationId);
    })
    
    .controller('FeedbackCtrl', function ($scope, Evaluations) {
        $scope.feedbacks = Evaluations.all();
    })
    
    .controller('FeedbackDetailCtrl', function ($scope, $stateParams, Evaluations) {
        $scope.feedback = Evaluations.get($stateParams.evaluationId);
    });
    


