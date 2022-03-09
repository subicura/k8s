/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // Add History State
  router.afterEach(function(_to, from) {
    if (from.name && typeof window !== "undefined") {
      window.__HAS_HISTORY_STATE = true;
    }
  });
  // Google analytics integration
  var GA_ID = "UA-43194822-1";
  if (
    process.env.NODE_ENV === "production" &&
    GA_ID &&
    typeof window !== "undefined"
  ) {
    (function(i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        };
      i[r].l = 1 * new Date();
      a = s.createElement(o);
      m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );

    ga("create", GA_ID, "auto");
    // ga("set", "anonymizeIp", true);

    router.afterEach(function(to) {
      ga("set", "page", router.app.$withBase(to.fullPath));
      ga("send", "pageview");
    });
  }
};
