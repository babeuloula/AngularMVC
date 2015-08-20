var CommentController = {
    comments: {
        url: '/comments/:id/',
        routeName: 'comments',
        templateUrl: 'views/Comment/comments.html',
        controller: function($rootScope, $scope, $stateParams, ArticleFactory) {
            $rootScope.loading = true;

            ArticleFactory.findById($stateParams.id).then(function(article) {
                $rootScope.loading = false;
                $scope.article = article;
            }, function(message) {
                alert(message);
            });
        }
    }
};