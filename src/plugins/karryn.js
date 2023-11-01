import { KarrynPassive } from "@/wrappers/exclusive/KarrynPassives";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";
import { KarrynActorHelper } from "@/wrappers/exclusive/KarrynActorHelper";
import { CheatHelper } from "@/wrappers/CheatHelper";

KarrynActorHelper.init();
KarrynUtils.init();
window.KarrynUtils = KarrynUtils;
window.KarrynActorHelper = KarrynActorHelper;
window.KarrynPassive = KarrynPassive;
window.CheatHelper = CheatHelper;

export default {
  install(app) {
    app.config.globalProperties.$G = opener;
  },
};
