app.factory('customLangFile',function($http,$q){
    return function (options) {
        var deferred = $q.defer();
        $http.get('/get-lang-data/'+options.key).then(function(suc){
             deferred.resolve(suc.data[0].Data);
        },function(err){
             deferred.reject(options.key);
        })
        return deferred.promise;
    };
});