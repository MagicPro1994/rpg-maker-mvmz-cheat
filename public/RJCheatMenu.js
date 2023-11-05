// #MODS TXT LINES:
//    {"name":"RJCheatMenu","status":true,"description":"Cheat Menu by RJ.","parameters":{}},
// #MODS TXT LINES END

/**
 * RJ Cheat Menu - Karryn's Prison
 *
 * Usage:
 * - Press Ctrl + ` to open the cheat menu. (Ctrl + Backquote)
 *
 * @author Red J
 * @version v0.0.2
 */

var RJCheatMenu = RJCheatMenu || {};
RJCheatMenu.UseExternalLink = false;
RJCheatMenu.AppVersion = "v0.0.2";
RJCheatMenu.DefaultConfig = {
  RJCheatMenu_OpenMenu: "Control+Backquote" // ctrl + `
};

(function () {
  var APP_URL = "www/mods/RJCheatMenu/index.html";

  if (RJCheatMenu.UseExternalLink) {
    APP_URL = "http://localhost:3000/";
  }

  RJCheatMenu.openCheatMenu = function () {
    if (!window.cheatWindow) {
      if (Utils.isNwjs()) {
        nw.Window.open(APP_URL, {}, function (win) {
          window.cheatWindow = win;

          window.addEventListener("beforeunload", function () {
            if (win) {
              win.close(true);
              win = null;
              delete window.cheatWindow;
            }
          });

          win.window.addEventListener("beforeunload", function () {
            if (win) {
              win.close(true);
              win = null;
              delete window.cheatWindow;
            }
          });
        });
      } else {
        window.cheatWindow = window.open(APP_URL, "_blank");
        window.addEventListener("beforeunload", function () {
          window.cheatWindow.close(true);
          window.cheatWindow = null;
        });
      }
    }
  };

  /**
   * Performs a check to see if the shortcut is pressed.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {String} configKey - The config key to check for the shortcut.
   * @returns {Boolean}
   */
  RJCheatMenu.isShortcutPressed = function (event, configKey) {
    var shortcut =
      ConfigManager[configKey] || RJCheatMenu.DefaultConfig[configKey];

    if (!shortcut) {
      return false;
    }

    var shortcutKeys = shortcut.split("+");

    var isModifierCtrl = shortcutKeys.includes("Control") === event.ctrlKey;
    var isModifierAlt = shortcutKeys.includes("Alt") === event.altKey;
    var isModifierShift = shortcutKeys.includes("Shift") === event.shiftKey;
    var isKey = shortcutKeys.includes(event.code);

    return isModifierCtrl && isModifierAlt && isModifierShift && isKey;
  };

  window.addEventListener("keydown", function (event) {
    if (RJCheatMenu.isShortcutPressed(event, "RJCheatMenu_OpenMenu")) {
      RJCheatMenu.openCheatMenu();
    }
  });
})();
