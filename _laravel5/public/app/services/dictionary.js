(function (window) {
    angular.module(window.appName).service('dictionaryService', function ($localStorage) {
        console.log('dictionaryService');

        $localStorage.dictionary = ($localStorage.dictionary) ? $localStorage.dictionary : {
            lesson: [],
            complited: []
        };
        var dictionary = $localStorage.dictionary;

        this.addWordToLesson = function (en, rus) {
            if (angular.isString(rus) && angular.isString(en)) {
                dictionary.lesson.push({
                    "en": en,
                    "rus": rus,
                    "rus_success":false,
                    "en_success":false,
                    "rus_errors": 0,
                    "en_errors": 0
                });
                return true;
            }
            return false;
        }

        this.getRundomWord = function () {
            var number = Math.floor((Math.random() * dictionary.lesson.length - 1) + 1);
            return dictionary.lesson[number];
        }
    });
})(window);