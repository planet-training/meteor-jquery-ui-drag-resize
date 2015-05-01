Package.describe({
  summary: "JQuery-Ui package of draggable and resizable modules and their dependencies.",
  name: "planet-training:jquery-ui-drag-resize",
  version: "1.11.4",
  git:"https://github.com/planet-training/meteor-jquery-ui-drag-resize.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("jquery", "client");

  api.addFiles([
    'bower_components/jquery-ui/ui/jquery.ui.core.js',
    'bower_components/jquery-ui/ui/jquery.ui.widget.js',
    'bower_components/jquery-ui/ui/jquery.ui.mouse.js',
    'bower_components/jquery-ui/ui/jquery.ui.draggable.js',
    'bower_components/jquery-ui/ui/jquery.ui.resizable.js'
  ], "client");
});
