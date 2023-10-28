import { KarrynActor } from "@/wrappers/exclusive/KarrynActor";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";

KarrynUtils.init();
window.KarrynUtils = KarrynUtils;
window.KarrynActor = KarrynActor;

export default {
  install(app) {
    app.config.globalProperties.$G = opener;
    app.config.globalProperties.$KarrynUtils = KarrynUtils;
  },
};
