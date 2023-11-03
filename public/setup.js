function openCheatMenu() {
  var cheatUrl = "http://localhost:3000";

  if (Utils.isNwjs() && !window.cheatWindow) {
    nw.Window.open(cheatUrl, {}, function (win) {
      window.cheatWindow = win;

      window.addEventListener("beforeunload", function () {
        win.close(true);
        win = null;
      });

      win.window.addEventListener("beforeunload", function () {
        win = null;
      });
    });
  } else {
    window.open(cheatUrl);
  }
}

window.addEventListener("keydown", function (event) {
  if (event.key === "`") {
    openCheatMenu();
  }
});
