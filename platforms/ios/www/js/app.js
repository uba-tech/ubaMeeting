// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })
            
            .state('app.login', {
            	url: "/login",
            	templateUrl: "templates/login.html",
            	controller: "AppCtrl"
            })
            
            .state('intro', {
            	url: "/intro",
    			templateUrl: 'templates/intro.html',
    			controller: 'IntroCtrl'
  			})

            .state('app.schedule', {
                url: "/schedule",
                views: {
                    'menuContent': {
                        templateUrl: "templates/schedule.html",
                        controller: 'ScheduleCtrl'
                    }
                }
            })

            .state('app.session-detail', {
                url: "/session-detail/:sessionId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/detail.html",
                        controller: 'SessionDetailCtrl'
                    }
                }
            })

            .state('app.vendors', {
                url: '/vendors',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/vendors.html',
                        controller: 'VendorCtrl'
                    }
                }
            })

            .state('app.vendor-detail', {
                url: "/vendor-detail/:vendorId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/vendorDetail.html",
                        controller: 'VendorDetailCtrl'
                    }
                }
            })

            .state('app.presentations', {
                url: '/presentations',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/presentations.html',
                        controller: 'PresentationCtrl'
                    }
                }
            })
            
            .state('app.presentation-detail', {
                url: "/presentation-detail/:presentationId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/presentationDetail.html",
                        controller: 'PresentationDetailCtrl'
                    }
                }
            })
            
            .state('app.speakers', {
                url: '/speakers',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/speakers.html',
                        controller: 'SpeakerCtrl'
                    }
                }
            })
            
            .state('app.speaker-detail', {
                url: "/speaker-detail/:speakerId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/speakerDetail.html",
                        controller: 'SpeakerDetailCtrl'
                    }
                }
            })
            
            .state('app.feedback', {
                url: '/feedback',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/feedback.html',
                        controller: 'FeedbackCtrl'
                    }
                }
            })
            
            .state('app.feedback-detail', {
                url: "/feedback-detail/:evaluationId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/feedbackDetail.html",
                        controller: 'FeedbackDetailCtrl'
                    }
                }
            })
            
            .state('app.map', {
                url: '/map',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/map.html'
                    }
                }
            })

            .state('app.information', {
                url: '/information',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/information.html'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/intro');
    });
