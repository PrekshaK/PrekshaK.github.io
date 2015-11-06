app.controller("MainController", ['$scope', function($scope, $http){
	$scope.mylist = [];
	$scope.todo = "";
	$scope.message = " ";
	$scope.inputcolor = "black";
	$scope.ismessage = "no";
	$scope.ischat = "no";
	$scope.image="";
	$scope.links=[];


   
	// var slides = $scope.slides = [];
	// $scope.addSlide = function(){
	// 	var newWidth = 600 + slides.length + 1;
	// 	slides.push({
 //          image: '//placekitten.com/' + newWidth + '/300',
 //          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
 //            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
 //        });
	// };

	// for (var i = 0; i < 4; i++){
	// 	$scope.addSlide();
	// }






	 // $scope.sendRequest = {
  //       // user: "prekshakoirala",      // Replace with your user
  //       // pass: "FG87GT55!",               // Replace with your password
  //       // source: "123456790",          // Replace with your sender ID
  //       destination: "5622936397",     // Replace with the recipient number
  //       sms: "Test Message 1"            // Replace with your message
  //   };     

  //    $scope.sendMessage = function() {
        
  //       $http.get("http://api.123-txt.com/Api123WCF.svc/rest/SendSms", {params: $scope.sendRequest}).success(function(res) {
  //           if(res) {
  //               $scope.sendStatus = "Success";
  //           }
  //           else{
  //               $scope.sendStatus = "Error";
  //               console.log("failed to send message");
  //           }
            
  //       }).error(function(res){
  //           $scope.sendStatus = "Error";
  //       });
  //   }            







    $scope.sendMessage = function(){
    var req = {
        // user: "prekshakoirala@gmail.com",      // Replace with your user
        // pass: "014032501",               // Replace with your password
        // source: "447797875633",          // Replace with your sender ID
        destination: "5622936397",     // Replace with the recipient number
        sms: "Test Message 1",           // Replace with your message
    };
        
    $http.get("http://api.123-txt.com/Api123WCF.svc/rest/SendSms", {params: req});    
    };               
      
             


	$scope.showcommands = function(){
			$scope.mylist = ['Enter "links" for my links',
							 'Enter "message" to text me',
							// 'Enter "show" to see the full image',
							'Enter "pic" to see me',
							 'Enter "resume" to view my resume',
							 'Enter "emails" to list my emails',
							 'Enter "chat" to chat with me',
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
			$scope.mylist=[];

		}
		else if ($scope.todo == "message"){
			$scope.ismessage = "yes";
			$scope.mylist=["Type your MESSAGE in here"];

		}
		else if ($scope.todo == "song"){

		}
		// else if($scope.todo == "show"){
		// 	$scope.mylist=['.', '.', '.', ' .', '. ', '.', '.', '.', ' .', '.', '.', '.', '. ', ' .', '.', '.', ' .', '.', '.', '.', '. ', ' .', '.', '.', ' .', '.', '.', '.', '. ', ' .', '.'];
		//}
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

		else if($scope.todo == "pic"){
			$scope.mylist="";
			$scope.image="preksha.jpg"
		}

		else{
			if($scope.ismessage == "yes"){
					$scope.message = $scope.todo;
					$scope.ismessage = "no";
					$scope.mylist = ["message recorded"];
					$scope.sendMessage();
				

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

