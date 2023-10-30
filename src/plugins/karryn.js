import { KarrynPassive } from "@/wrappers/exclusive/KarrynPassives";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";
import { KarrynActorHelper } from "@/wrappers/exclusive/KarrynActorHelper";

KarrynActorHelper.init();
KarrynUtils.init();
window.KarrynUtils = KarrynUtils;
window.KarrynActorHelper = KarrynActorHelper;
window.KarrynPassive = KarrynPassive;

export default {
  install(app) {
    app.config.globalProperties.$G = opener;
  },
};
