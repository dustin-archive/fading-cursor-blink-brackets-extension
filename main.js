define(function(require, exports, module) {
  var ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
      AppInit = brackets.getModule("utils/AppInit"),
      CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");

  AppInit.appReady(function () {
    ExtensionUtils.loadStyleSheet(module, 'main.less');
    CodeMirror.defaults.cursorBlinkRate = 0;
  });
});
