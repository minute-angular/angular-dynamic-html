/// <reference path="../../../minute/_all.d.ts" />

module Minute {

    export class DynamicHtml implements ng.IDirective {
        restrict = 'A';
        replace = true;
        scope: any = {dynamicHtml: '=?'};

        constructor(private $compile: ng.ICompileService) {
        }

        static factory(): ng.IDirectiveFactory {
            var directive: ng.IDirectiveFactory = ($compile: ng.ICompileService) => new DynamicHtml($compile);
            directive.$inject = ["$compile"];
            return directive;
        }

        link = ($scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            $scope.$watch('dynamicHtml', (html, last) => {
                element.html(html);
                this.$compile(element.contents())($scope);
            });
        }
    }

    angular.module('AngularDynamicHtml', [])
        .directive('dynamicHtml', DynamicHtml.factory());
}
