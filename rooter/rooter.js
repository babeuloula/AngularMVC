var Rooter = function(app) {
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider

            /**
             * Articles
             **/
            .when(ArticleController.articles.route.url, ArticleController.articles)


            /**
             * Comments
             **/
            .when(CommentController.comments.route.url, CommentController.comments)


            /**
             * Page 404
             **/
            .otherwise(ErrorController.err404);
    }]);
};