<!--
      onerror = showError

        function showError(x, y, z) {
        	 
        	 alert(x+" "+y+" "+z)
        }
            
            var app = angular.module("add", []);

            app.controller('control', function ($scope) {

            	var reps = [
                  
			        {name: "C", Likes: 0, Dislikes: 0},
					{name: "C++", Likes: 0, Dislikes: 0},
					{name: "C#", Likes: 0, Dislikes: 0},
					{name: "Java", Likes: 0, Dislikes: 0},
					{name: "HTML", Likes: 0, Dislikes: 0},
					{name: "PHP", Likes: 0, Dislikes: 0},
					{name: "VB.NET", Likes: 0, Dislikes: 0},
					{name: "Python", Likes: 0, Dislikes: 0},
					{name: "Pearl", Likes: 0, Dislikes: 0},
					{name: "javascript", Likes: 0, Dislikes: 0},
					{name: "Node", Likes: 0, Dislikes: 0},
					{name: "Angular", Likes: 0, Dislikes: 0},
					{name: "Css", Likes: 0, Dislikes: 0},
            	];

            	$scope.reps = reps;

                  $scope.Plus = function (rep) {
                  	   
                  	   rep.Likes++;
                  }

                  $scope.sub = function (rep) {
                  	   
                  	   rep.Dislikes++;
                  }
            });
//-->