var ErrorController = {
    err404: {
        templateUrl: 'views/Error/404.html',
        controller: 'err404Action',
        action: function ($rootScope, $scope) {
            $rootScope.loading = false;
        }
    }
};