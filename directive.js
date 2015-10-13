app.directive('backImg', function(){
	return function(scope, element, attrs){
		var url = attrs.backImg;
		element.css({
			'background-image': 'url(' + url + ')',
			'background-size': 'cover'
		});
	};
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                    scope.todo = " ";
                    scope.help = " ";

                });
 

                event.preventDefault();
            }
        });
    };
});