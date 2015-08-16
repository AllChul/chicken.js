define([
	"core",
	"env/config",
	"lib/loader",
	"lib/translator"
], function(CC, config, loader, translator){

	CC.Config = config;
	CC.Load = loader;
	CC.Translate = translator;

	return CC;
});