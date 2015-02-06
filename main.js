define(function(require, exports, module) {
  var ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
      AppInit = brackets.getModule("utils/AppInit");

  AppInit.appReady(function () {
    ExtensionUtils.loadStyleSheet(module, 'main.less');
  });
});
