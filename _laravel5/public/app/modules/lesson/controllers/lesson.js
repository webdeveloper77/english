(function (window) {

    angular.module(window.appName).controller("LessonController", function ($scope, dictionaryService, wordPlay) {

        console.log("LessonController");

        var word = dictionaryService.getRundomWord();
        var wp = new wordPlay(word);

        $scope.task = wp.getTask();

        $scope.check = function () {
            wp.checkTask($scope.task);
        }
    });

})(window);