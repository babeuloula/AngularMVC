var Rooter = function(app) {
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider

            /**
             * Articles
             **/
            .when('/', ArticleController.articles)


            /**
             * Comments
             **/
            .when('/comments/:id/', CommentController.comments)


            /**
             * Page 404
             **/
            .otherwise(ErrorController.err404);
    }]);
};