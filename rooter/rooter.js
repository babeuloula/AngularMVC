var Rooter = function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            /**
             * Articles
             */
            .state(ArticleController.articles.routeName, ArticleController.articles)


            /**
             * Comments
             */
            .state(CommentController.comments.routeName, CommentController.comments);


        $urlRouterProvider.otherwise('/');
    }]);
};