module.exports = function(content) {
	var prefix = "(function(){ \nvar exports = false, define=false;\n\n";
    var postfix = "}.call({videojs:{registerPlugin:()=>{}}}));" ;
    
	content = content.replace("registerPlugin('ima', init);","registerPlugin('ima', init);\nmodule.exports = {ImaPlugin : ImaPlugin, SdkImpl : SdkImpl};\n");
    
    return prefix + content + postfix ;
}