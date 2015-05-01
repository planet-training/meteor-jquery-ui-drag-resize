Package.describe({
  summary: "JQuery-Ui package of draggable and resizable modules and their dependencies.",
  name: "planettraining:jquery-ui-drag-resize",
  version: "1.11.4",
  git:"https://github.com/planet-training/meteor-jquery-ui-drag-resize.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("jquery", "client");

  api.addFiles([
    'bower_components/jquery-ui/ui/core.js',
    'bower_components/jquery-ui/ui/widget.js',
    'bower_components/jquery-ui/ui/mouse.js',
    'bower_components/jquery-ui/ui/draggable.js',
    'bower_components/jquery-ui/ui/resizable.js'
  ], "client");
});
