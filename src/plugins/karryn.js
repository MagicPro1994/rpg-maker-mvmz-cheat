import { KarrynPassive } from "@/wrappers/exclusive/KarrynPassives";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";
import { KarrynActorHelper } from "@/wrappers/exclusive/KarrynActorHelper";
import { CheatHelper } from "@/wrappers/CheatHelper";

document.title = `Karryn's Prison Cheat Menu - ${
  opener.RJCheatMenu.AppVersion || "Unknown"
}`;

KarrynUtils.init();
KarrynActorHelper.init();

window.KarrynUtils = KarrynUtils;
window.KarrynActorHelper = KarrynActorHelper;
window.KarrynPassive = KarrynPassive;
window.CheatHelper = CheatHelper;

export default {
  install(app) {
    app.config.globalProperties.$G = opener;
  },
};
