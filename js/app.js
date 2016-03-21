/**
 * Created by edgarisla1 on 3/20/16.
 */
var app= angular.module("serviceApp", ["firebase"]);

app.factory("Auth", function ( $firebaseAuth) {
    var ref= new Firebase("https://authservice.firebaseio.com");
     return $firebaseAuth(ref);
});

app.controller("AuthCtrl", function ($scope, Auth) {
    $scope.logIn= function () {
        Auth.$authWithOAuthPopup("facebook").then(function (authData) {
            console.log(authData);
        }).catch(function (error) {
            console.log(error);
        });
    };
    $scope.logOut= function () {
        Auth.$unauth();
    };

});
