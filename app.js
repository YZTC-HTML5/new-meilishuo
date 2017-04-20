angular.module('mls',["ui.router",'angularCSS','homeModule','mineModule','classifyModule','shopcarModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})