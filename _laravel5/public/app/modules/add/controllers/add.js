(function (window) {

    angular.module(window.appName).controller("AddController", function ($scope, dictionaryService) {

        console.log("AddController");

        $scope.addWord = function () {
            var rus = $scope.rus;
            var en = $scope.en;
            if (dictionaryService.addWordToLesson(en, rus)) {
                $scope.rus = '';
                $scope.en = '';
            }
        }
    });

})(window);