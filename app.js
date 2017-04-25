angular.module('mls',["ui.router",'angularCSS','me-lazyload','homeModule','mineModule','classifyModule','shopcarModule','list1Module','sortpopModule','searchModule','menu0Module','menu4Module','sorthotModule','sortnewModule','searchModule1','searchModule2'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})
.controller('tabCtrl',function($scope){
	$scope.isHome1=false;
	$scope.isHome=true;
	$scope.isClassify1=true;
	$scope.isClassify=false;
	$scope.isShopcar1 = true;
	$scope.isShopcar = false;
	$scope.isHome2=false;
	$scope.isClassify2=true;
	$scope.isShopcar2=true;
	
	$scope.changeHome = function(){
		if($scope.isHome1==true &&$scope.isHome==false){
			$scope.isHome1=!$scope.isHome1;
			$scope.isHome=!$scope.isHome;
		}
		
		if($scope.isClassify1 ==false){
			$scope.isClassify1=true;
			$scope.isClassify=false;
		}
		if($scope.isShopcar1 ==false){
			$scope.isShopcar1=true;
			$scope.isShopcar=false;
		}
		if($scope.isHome2==true){
			$scope.isHome2=!$scope.isHome2;
		}
		if($scope.isClassify2==false){
			$scope.isClassify2 =true;
		}
		if($scope.isShopcar2==false){
			$scope.isShopcar2 =true;
		}
	}
	$scope.changeClassify = function(){
		if($scope.isClassify1==true && $scope.isClassify==false){
			$scope.isClassify1=!$scope.isClassify1;
			$scope.isClassify=!$scope.isClassify;
		}
		if($scope.isHome1 ==false){
			$scope.isHome1=true;
			$scope.isHome=false;
		}
		if($scope.isShopcar1 ==false){
			$scope.isShopcar1=true;
			$scope.isShopcar=false;
		}
		if($scope.isClassify2==true){
			$scope.isClassify2 = !$scope.isClassify2;
		}
		if($scope.isHome2==false){
			$scope.isHome2=true;
		}
		if($scope.isShopcar2==false){
			$scope.isShopcar2 = true;
		}
	}
	$scope.changeShopcar = function(){
		if($scope.isShopcar1==true && $scope.isShopcar==false){
			$scope.isShopcar1=!$scope.isShopcar1;
			$scope.isShopcar=!$scope.isShopcar;
		}
		if($scope.isHome1 ==false){
			$scope.isHome1=true;
			$scope.isHome=false;
		}
		if($scope.isClassify1 ==false){
			$scope.isClassify1=true;
			$scope.isClassify=false;
		}
		if($scope.isShopcar2==true){
			$scope.isShopcar2 = !$scope.isShopcar2;
		}
		if($scope.isHome2==false){
			$scope.isHome2=true;
		}
		if($scope.isClassify2==false){
			$scope.isClassify2 = true;
		}
	}
	
})
document.documentElement.style.fontSize = document.documentElement.clientWidth/16+ 'px';
window.addEventListener('resize',function(){
			document.documentElement.style.fontSize = innerWidth/16+'px';
		})