define([
	"core"
], function(CC){
	CC.SetServerAddress = function(serverAddress){
		this.Config = {
			serverAddress : serverAddress
		};
	};
});