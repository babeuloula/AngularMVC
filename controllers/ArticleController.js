var ArticleController = {
    articles: {
        templateUrl: 'views/Article/articles.html',
        controller: 'articlesAction',
        action: function ($rootScope, $scope, ArticleFactory) {
            $rootScope.loading = true;

            ArticleFactory.findAll().then(function(articles) {
                $rootScope.loading = false;
                $scope.articles = articles;
            }, function(message) {
                alert(message);
            });
        }
    }
};