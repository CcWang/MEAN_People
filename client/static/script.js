var myApp = angular.module('myApp',[]);

myApp.factory('PeopleFactory',function ($http,$window) {
	// body...

	var factory ={};
	var peoples=[];
	factory.index = function(cb){
		$http.get('/peoples').success(function(output){
			peoples = output;
			cb(peoples)
		})
	};

	factory.create = function(data){
		$http.post('/create',data).success(function(output){
			// console.log('after create',output);
			peoples.push(output);
		})
	};

	factory.delete = function(i){
		$http.delete('/peoples/'+i).success(function(output){
			// to refresh full page
			$window.location.reload();
		})
			

	}
	return factory;
})

myApp.controller('PeopleController',function($scope,PeopleFactory){
	PeopleFactory.index(function(data){
		$scope.peoples = data;
	});

	$scope.addPeople = function(){
		PeopleFactory.create($scope.new_people);
		$scope.new_people={};
	};

	$scope.removePeople =function($index){
		PeopleFactory.delete($index);
	}
})
