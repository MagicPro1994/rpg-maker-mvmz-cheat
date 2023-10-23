/* eslint-disable no-undef */
function openCheatMenu() {
  if (Utils.isNwjs() && !window.cheatWindow) {
    nw.Window.open("http://localhost:3000", { frame: false }, (win) => {
      window.cheatWindow = win;

      window.addEventListener("beforeunload", () => {
        window.cheatWindow.close();
      });
    });
  } else {
    window.open("http://localhost:3000");
  }
}

window.addEventListener("keydown", (event) => {
  if (event.key === "`") {
    openCheatMenu();
  }
});
