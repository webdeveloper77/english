(function (window) {
    angular.module(window.appName).factory('wordPlay', function () {
        console.log('wordPlay');
        return function (word) {
            var self = this;
            this.word = word;
            this.currentTask = null;

            this.noRus = function (word) {
                return {
                    rus: '',
                    en: word.en
                }
            }

            this.noEn = function (word) {
                return {
                    rus: word.rus,
                    en: ''
                }
            }

            this.getTask = function () {
                if (!this.word.en_success && !this.word.rus_success) {
                    var number = Math.floor((Math.random() * 2) + 1);
                    if (number === 1) {
                        return self.noRus(this.word);
                    } else {
                        return self.noEn(this.word);
                    }
                } else if (!this.word.en_success && this.word.rus_success) {
                    return self.noEn(this.word);
                } else {
                    return self.noRus(this.word);
                }
            }

            this.checkTask = function (task) {
                if (task.en === this.word.en && task.rus === this.word.rus) {
                    return true;
                }
            }

            return this;
        };

    });
})(window);