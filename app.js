angular.module('mls',["ui.router",'angularCSS','homeModule','mineModule','classifyModule','shopcarModule','list1Module','sortpopModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})
document.documentElement.style.fontSize = document.documentElement.clientWidth/16+ 'px';
window.addEventListener('resize',function(){
			document.documentElement.style.fontSize = innerWidth/16+'px';
		})