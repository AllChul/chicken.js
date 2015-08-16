define([
	"core"
], function(CC){
	//Constructor
	var _Config = function(_config){
		if(_config !== undefined){
			if(_config.repositoryType !== undefined) this.Config.repositoryType = _config.repositoryType;
			if(_config.repositoryAddress !== undefined) this.Config.repositoryAddress = _config.repositoryAddress;
			if(_config.pageId !== undefined) this.Config.pageId = _config.pageId;
			if(_config.language !== undefined) this.Config.language = _config.language;
			if(_config.locale !== undefined) this.Config.locale = _config.locale;
		}
	};

	// Kinds of repository type : file, url
	_Config.repositoryType = undefined;
	// Repository address (URL)
	_Config.repositoryAddress = undefined;

	return _Config;
});