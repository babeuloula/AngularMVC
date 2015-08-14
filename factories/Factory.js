var Factory = function(database) {

    var _self = this;

    _self.databasesPath = 'databases/';
    _self.database = database;
    _self.datas = false;

    _self.connect = function($http, $q) {
        var deferred = $q.defer();

        $http.get(_self.databasesPath + _self.database)
            .success(function(datas, statut) {
                if(statut === 200) {
                    _self.datas = {
                        ack   : true,
                        statut: 200,
                        datas : datas
                    };

                    deferred.resolve(_self.datas);
                } else {
                    _self.datas = {
                        ack   : false,
                        statut: statut,
                        datas : null
                    };

                    deferred.resolve(_self.datas);
                }
            })
            .error(function(datas, statut) {
                deferred.reject("Database connection error. ");
            });

        return deferred.promise;
    }
};