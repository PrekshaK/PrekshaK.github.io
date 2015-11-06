app.controller("MainController", ['$scope', function($scope, $firebaseObject, $http){
	$scope.mylist = [];
	$scope.todo = "";
	$scope.message = " ";
	$scope.inputcolor = "black";
	$scope.ismessage = "no";
	$scope.ischat = "no";
	$scope.image="";
	$scope.links=[];
	$scope.Recipient={'name': 'Preksha',
						'phone': '+5622936397',
						'text': 'Preksha'};



	$scope.sendSMSText = function (recipient) {
	var smsQueue = new Firebase('https://personalblog.firebaseio.com/sms/' + recipient.phone);
    var personalizedText =recipient.text;
    console.log("Sending message");

 
	smsQueue.set({
	name: recipient.name,
	phone: recipient.phone,
    text: personalizedText
		})
	};
  

	$scope.showcommands = function(){
			$scope.mylist = ['Enter "links" for my links',
							 'Enter "message" to text me (only if absolutely necessay)',
							 'Enter "pic" to view my picture',
							 'Enter "resume" to view my resume',
							 'Enter "emails" to list my emails',
							 'Enter "chat" to chat with me',
							 'Enter "whycat?" to know why that cat is there',
							 'Enter "inspiration" to know a secret'];
		}

	$scope.show = function(){

	  if($scope.todo != "r"){
	  	$scope.image="cat.jpeg";
	  	}

	  if($scope.todo != "links"){
	  	$scope.links=[];
	  }
		if ($scope.todo == "help"){
			$scope.showcommands($scope.todo);

		}
		else if ($scope.todo == "links"){
			$scope.links=['https://www.facebook.com/preksha.koirala.7',
							'https://www.github.com/PrekshaK',
							 'https://www.linkedin.com/in/prekshakoirala']
			$scope.mylist=['Sorry my Facebook is deactivated. I will be back though :)'];

		}
		else if ($scope.todo == "message"){
			$scope.ismessage = "yes";
			$scope.mylist=["Type your MESSAGE in here"];

		}
		else if ($scope.todo == "cat"){
			$scope.mylist=['It is cute. Right?'];
		}
		else if ($scope.todo == "song"){

		}

		else if($scope.todo == "emails"){
			$scope.mylist = ['prekshakoirala@gmail.com', 'preksha.koirala@bison.howard.edu'];
		}
		else if($scope.todo == "signature"){
			$scope.mylist = ['PrekshaK'];
		}
		else if($scope.todo == "haha" || $scope.todo == "lol" || $scope.todo == "hehe") {
			$scope.mylist = ['I am laughing too ;)'];
		}
		else if($scope.todo == "inspiration"){
			$scope.mylist = ["checkout http://www.lindsaylevine.com/", "I got inspired from her"];
		}
		else if($scope.todo == "chat"){
			$scope.ischat = "yes";
			$scope.mylist = ['Hey, how are you?',   'Thanks for checking my website.',  ' I have to go now. I have my class. TTYL'];
		
		}else if($scope.todo == "draw"){
			$scope.mylist = ['**** in progress *******'];
		}
		else if($scope.todo == "ok"){
			$scope.mylist = ['Ok OK :P'];
		}
		else if($scope.todo == "resume"){
			$scope.mylist="";
			$scope.image="resume.png";
		}

		else if($scope.todo == "whycat?"){
			$scope.mylist="";
			$scope.image="penguin.jpeg";
		}

		else if($scope.todo == "Preksha" || $scope.todo == "preksha"){
			$scope.mylist=['Yes?'];

		}

		else if($scope.todo == "pic"){
			$scope.mylist="";
			$scope.image="preksha.jpg"
		}

		else{
			if($scope.ismessage == "yes" && $scope.mylist==["Type your MESSAGE in here"]){
					$scope.Recipient.text = $scope.todo;
					$scope.ismessage = "no";
					$scope.mylist = ["message sent to Preksha"];
					$scope.sendSMSText($scope.Recipient);
				

			}else if ($scope.ischat == "yes"){
				$scope.ischat = "no";
				$scope.mylist = ["will get back to you soon"];
			}else{
			$scope.mylist= ["Please enter 'help' to avoid confusion"];
		    }
	    }
	};

}]);



app.controller("nextController", function($scope){
	
})

