(function (window) {
    angular.module(window.appName).service('dictionaryService', function ($localStorage) {
        console.log('dictionaryService');

        $localStorage.dictionary = ($localStorage.dictionary) ? $localStorage.dictionary : [];
        var dictionary = $localStorage.dictionary;


        this.addWord = function (en, rus) {
            if (angular.isString(rus) && angular.isString(en)) {
                dictionary.push({
                    "en": en,
                    "rus": rus,
                    "rus_errors": 0,
                    "en_errors": 0
                });
                return true;
            }
            return false;
        }

        this.getRundomWord = function () {
            var number = Math.floor((Math.random() * dictionary.length-1) + 1);
            console.log(dictionary[number]);
        }
    });
})(window);