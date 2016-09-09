

angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

		var git = this;
        $scope.reposLoaded = true;

        $scope.userLoaded = true;
		
        $scope.username = "lucasbadv8";

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
            });

        var loadRepos = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
        };
		
		git.buscarusuario = function(username){
			$http.get("https://api.github.com/users/" + username)
			.success(function (data) {
                $scope.userData = data;
                loadRepos();
            });
		}
		
        $scope.predicate = '-updated_at';


}]);




/*
{
  "login": "lucasbadv8",
  "id": 8330078,
  "avatar_url": "https://avatars.githubusercontent.com/u/8330078?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/lucasbadv8",
  "html_url": "https://github.com/lucasbadv8",
  "followers_url": "https://api.github.com/users/lucasbadv8/followers",
  "following_url": "https://api.github.com/users/lucasbadv8/following{/other_user}",
  "gists_url": "https://api.github.com/users/lucasbadv8/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/lucasbadv8/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/lucasbadv8/subscriptions",
  "organizations_url": "https://api.github.com/users/lucasbadv8/orgs",
  "repos_url": "https://api.github.com/users/lucasbadv8/repos",
  "events_url": "https://api.github.com/users/lucasbadv8/events{/privacy}",
  "received_events_url": "https://api.github.com/users/lucasbadv8/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Lucas Lopes",
  "company": null,
  "blog": null,
  "location": null,
  "email": "lucasbadv8@gmail.com",
  "hireable": null,
  "bio": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 5,
  "following": 8,
  "created_at": "2014-08-01T12:51:42Z",
  "updated_at": "2016-08-14T10:40:50Z"
}

*/
