var ArticleFactory = {
    factory: function($http, $q) {
        var factory = {
            articles: false,

            connection: function() {
                var deferred = $q.defer();

                if(factory.articles) {
                    deferred.resolve(factory.articles);
                } else {
                    var db = new Factory('article.json');

                    db.connect($http, $q).then(function (response) {
                        if(response.ack && response.statut === 200) {
                            factory.articles = response.datas;
                            deferred.resolve(factory.articles);
                        } else {
                            console.log("Erreur lors de la connextion à la base des articles");
                        }
                    }, function(error) {
                        console.log(error);
                    });
                }

                return deferred.promise;
            },

            findAll: function() {
                var deferred = $q.defer();

                factory.connection().then(function(articles) {
                    deferred.resolve(articles);
                }, function(error) {
                    console.log(error);
                });

                return deferred.promise;
            },

            findById: function(id) {
                id = parseInt(id, 10) - 1;

                var deferred = $q.defer();

                factory.connection().then(function(articles) {
                    deferred.resolve(articles[id]);
                }, function(error) {
                    console.log(error);
                });

                return deferred.promise;
            }
        };

        return factory;
    }
};