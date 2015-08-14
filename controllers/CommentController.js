var CommentController = {
    comments: {
        templateUrl: 'views/Comment/comments.html',
        controller: 'commentsAction',
        action: function($rootScope, $scope, ArticleFactory, $routeParams) {
            $rootScope.loading = true;

            ArticleFactory.findById($routeParams.id).then(function(article) {
                $rootScope.loading = false;
                $scope.article = article;
            }, function(message) {
                alert(message);
            });
        }
    }
};