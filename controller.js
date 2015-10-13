app.controller("MainController", function($scope){
	$scope.mylist = [];
	$scope.help = "Enter 'help'";
	$scope.todo = "";
	$scope.message = " ";
	$scope.inputcolor = "black";
	$scope.ismessage = "no";
	$scope.ischat = "no";
	$scope.backimage={
		background: 'url(http://i.ytimg.com/vi/-UNvdTeMrk4/maxresdefault.jpg)'
	};

	


	$scope.showcommands = function(){
			$scope.mylist = ['Enter "links" for my links',
							 'Enter "Message" to text me',
							 'Enter "resume" to view my resume',
							 'Enter "play" to play the game I made', 
							 'Enter "song" to listen to my current favourite song',
							 'Enter "show" to see the full image',
							 'Enter "emails" to list my emails',
							 'Enter "chat" to chat with me'];
		}

	$scope.show = function(){
		if ($scope.todo == "help"){
			$scope.showcommands($scope.todo);

		}
		else if ($scope.todo == "links"){
			$scope.mylist=['www.facebook.com/preksha.koirala.7',
							'www.github.com/PrekshaK',
							 'https://www.linkedin.com/pub/preksha-koirala/99/7ab/38']

		}
		else if ($scope.todo == "Message"){
			$scope.ismessage = "yes";
			$scope.mylist=["Type your MESSAGE in here"]

		}
		else if ($scope.todo == "song"){

		}
		else if($scope.todo == "show"){
			$scope.mylist=['.', '.', '.', ' .', '. ', '.', '.', '.', ' .', '.', '.', '.', '. ', ' .', ',', '.', ' .', '.', '.', '.', '. ', ' .', ',', '.', ' .', '.', '.', '.', '. ', ' .', ','];
		}
		else if($scope.todo == "emails"){
			$scope.mylist = ['prekshakoirala@gmail.com', 'preksha.koirala@bison.howard.edu'];
		}
		else if($scope.todo == "signature"){
			$scope.mylist = ['PrekshaK'];
		}
		else if($scope.todo == "chat"){
			$scope.ischat = "yes";
			$scope.mylist = ['Hey, how are you?   Thanks for checking my website. I have to go now. I have my class. TTYL'];
		}

		else {
			if($scope.ismessage == "yes"){
					$scope.message = $scope.todo;
					$scope.ismessage = "no";
					$scope.mylist = ["Message recorded"];

			}else if ($scope.ischat == "yes"){
				$scope.ischat = "no";
				$scope.mylist = ["will get back to you soon"];
			}else{
			$scope.mylist= ["Please enter 'help' to avoid confusion"];
		    }
	    }
	};

});



app.controller("nextController", function($scope){
	$scope.PK = "Preksha © 1995";
})

