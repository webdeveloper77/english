englishApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

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
                templateUrl: "views/lesson.html"
            });

});