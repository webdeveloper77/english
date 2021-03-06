(function (window) {


    angular
            .module(window.appName)
            .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

                $locationProvider.html5Mode(true);

                $urlRouterProvider.otherwise("home");

                $stateProvider
                        .state('home', {
                            url: "/",
                            templateUrl: "views/main.html"
                        })

                        .state('add', {
                            url: "/add",
                            templateUrl: "modules/add/views/add.html"
                        })

                        .state('lesson', {
                            url: "/lesson",
                            templateUrl: "modules/lesson/views/lesson.html"
                        });

            });


})(window);