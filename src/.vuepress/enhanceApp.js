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

  var GA_ID = "UA-43194822-1";
  var GA4_ID = "G-98XCF746ZC";
  // Google analytics integration
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

  // Google analytics 4 integration
  if (
    process.env.NODE_ENV === "production" &&
    GA4_ID &&
    typeof window !== "undefined"
  ) {
    var js = document.createElement("script");
    js.async = 1;
    js.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
    document.body.appendChild(js);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA4_ID);

    router.afterEach(function(to) {
      gtag("set", "page_path", router.app.$withBase(to.fullPath));
      gtag("event", "page_view");
    });
  }
};
