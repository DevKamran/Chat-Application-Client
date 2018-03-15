app.controller('ChatController', function($scope, $firebaseArray) {


    var ref = firebase.database().ref().child('messages');
     $scope.messages = $firebaseArray(ref);


    var ref = firebase.database().ref().child('clientMessage');
    $scope.clientMessage = $firebaseArray(ref);

// CREATE A UNIQUE ID
      var val = Math.floor(1000 + Math.random() * 9000);
// CREATE A UNIQUE ID

 
 var client='clientOne';

    $scope.send = function() {

      /*  $scope.message = {
            message:$scope.messageText,
            user:client
        }*/

        $scope.messages.$add({
        	 id: val,
            role: client,
            message: $scope.messageText,
            date: Date.now()
        })
    }


    /*$scope.sendclientMessage = function() {
        $scope.clientMessage.$add({
            id: val,
            role: client,
            message: $scope.messageText,
            date: Date.now()
        })
    }*/


                    /*    <div ng-click="functionThree(someVar)">
                      Click me!
                    </div>

                    function functionThree(someVar){
                        someVar == '1' ? functionOne() : functionTwo(); 
                    }
                    */
                    /* $scope.name = '1';
  
                      $scope.functionOne = function () {
                        console.log('function one');
                      };
                      
                      $scope.functionTwo = function () {
                        console.log('function two');
                      };*/

})