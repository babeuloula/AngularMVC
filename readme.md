# AngularMVC

AngularMVC et un bootstrap qui vous permettra de commencer rapidement des applications avec [AngularJS](https://angularjs.org/).
Totalement opensource et gratuit, vous êtes libre de faire des modifications et de le distribuer mais rappelez quand même qui est son auteur de base ([moi](http://www.babeuloula.fr/)).
Je ne dit pas que c'est **THE** bootstrap, mais c'est du moins le cas pour moi car il me permet d'aller plus vite.

# Architecture

Ce bootstrap se compose de divers dossiers et fichiers afin de séparer le code de la meilleur façon qu'il soit (celon moi).

## Dossiers et fichiers

- **controllers** : Dossier contenant les controllers
- **css** : Dossier contenant vos styles css
- **databases** : Dossier contenant les bases de données json
- **factories** : Dossier contenant les factories (y compris le factory de base sous forme d'une class Javascript)
- **js** : Dossier contenant vos scripts Javascript
- **rooter** : Dossier contenant le gestionnaire de routes
- **views** : Dossier contenant les vues de votre applications
- **index.html** : Cœur de l'application, ~~la cuisine~~,  là où vous allez chargez vos tous vos fichiers (controllers, factory, css, js ...) et c'est là aussi où vous allez faire inscrire vos controllers et factories à AngularJS.

### Création d'un controller

Vous avez simplement à créer un fichier, par exemple, *BlogController.js* dans le dossier *controllers* et le structurer comme ceci :

```
    var BlogController = {
	    blog: { // Nom de l'action
	        templateUrl: 'views/Blog/blog.html', // Emplacement de la vue
	        controller: 'BlogController', // Le nom du controller à appeler
            route: { // Informations sur la route
                url: '/blog/' // URL de la route 
            },
	        action: function ($rootScope, $scope) { // Son action
	            // Ma super action à effectuer
	        }
	    }
	};
```

 N'oubliez pas de l'inscrire à AngularJS dans le fichier *index.html* :
 
```
    app.controller('blogAction', ['$rootScope', '$scope', BlogController.blog.action]);
```

### Création d'une factory

Créez un fichier, par exemple, *BlogFactory.js* dans le dossier *factories* et structurez le comme ceci : 

```
    var BlogFactory= {
	    factory: function($http, $q) {
	        var factory = {
	            blog: false, // Permet d'avoir un système de cache et de ne pas lancer une requête AJAX à chaque fois
	
	            connection: function() { // Fonction de connexion
	                var deferred = $q.defer();
	
	                if(factory.articles) {
	                    deferred.resolve(factory.articles);
	                } else {
	                    var db = new Factory('article.json'); // Nom du fichier à aller chercher
	
	                    db.connect($http, $q).then(function (response) {
	                        if(response.ack && response.statut === 200) {
	                            factory.blog= response.datas;
	                            deferred.resolve(factory.blog);
	                        } else {
	                            console.log("Erreur lors de la connextion à la base du blog"); // Votre message d'erreur perso
	                        }
	                    }, function(error) {
	                        console.log(error);
	                    });
	                }
	
	                return deferred.promise;
	            },
	
				// Vos fonctions qui vous permettrons de récupérer vos données
	            findAll: function() {
	                var deferred = $q.defer();
	
	                factory.connection().then(function(datas) {
	                    deferred.resolve(datas);
	                }, function(error) {
	                    console.log(error);
	                });
	
	                return deferred.promise;
	            }
	        };
	
	        return factory;
	    }
	};
```

 N'oubliez pas de l'inscrire à AngularJS dans le fichier *index.html* :
 
```
    app.factory('BlogFactory', ['$http', '$q', BlogFactory.factory]);
```

### Création d'une route

Ouvrez le fichier *rooter/rooter.js* et ajoutez des routes à la suite des autres *when* comme ceci :

```
    .when(BlogController.blog.route.url, BlogController.blog)
```

#Compilation

Normalement, j'ai essayé d'utiliser au maximum la syntaxe décrite dans la [documentation](https://docs.angularjs.org/api) d'AngularJS permettant une compilation des fichiers JS sans risquer de problème.

Amusez-vous bien avec et en cas de soucis, contactez-moi !