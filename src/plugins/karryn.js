import { KarrynPassive } from "@/wrappers/exclusive/KarrynPassives";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";

KarrynUtils.init();
window.KarrynUtils = KarrynUtils;
window.KarrynPassive = KarrynPassive;

export default {
  install(app) {
    app.config.globalProperties.$G = opener;
    app.config.globalProperties.$KarrynUtils = KarrynUtils;
  },
};
