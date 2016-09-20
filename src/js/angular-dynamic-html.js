/// <reference path="../../../minute/_all.d.ts" />
var Minute;
(function (Minute) {
    var DynamicHtml = (function () {
        function DynamicHtml($compile) {
            var _this = this;
            this.$compile = $compile;
            this.restrict = 'A';
            this.replace = true;
            this.scope = { dynamicHtml: '=?' };
            this.link = function ($scope, element, attrs) {
                $scope.$watch('dynamicHtml', function (html, last) {
                    element.html(html);
                    _this.$compile(element.contents())($scope);
                });
            };
        }
        DynamicHtml.factory = function () {
            var directive = function ($compile) { return new DynamicHtml($compile); };
            directive.$inject = ["$compile"];
            return directive;
        };
        return DynamicHtml;
    }());
    Minute.DynamicHtml = DynamicHtml;
    angular.module('AngularDynamicHtml', [])
        .directive('dynamicHtml', DynamicHtml.factory());
})(Minute || (Minute = {}));
