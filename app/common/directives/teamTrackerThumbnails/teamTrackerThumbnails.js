'use strict';

angular.module('bountysource.directives').directive('teamTrackerThumbnails', [function() {
  return {
    restrict: "E",
    templateUrl: 'common/directives/teamTrackerThumbnails/templates/teamTrackerThumbnails.html',
    scope: {
      trackers: "="
    }
  };
}]);