const autometa_options = {
  title: "쿠버네티스 따라하기",
  description: "초보를 위한 쿠버네티스 안내서 - 실습편",
  canonical_base: "https://subicura.com/k8s",
  author: {
    name: "subicura",
    twitter: "subicura",
  },
  site: {
    name: "초보를 위한 쿠버네티스 안내서",
    twitter: "subicura",
  },
  description_sources: ["frontmatter"],
  image_sources: ["frontmatter"],
};

module.exports = {
  dest: "dist/k8s",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "쿠버네티스 따라하기",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "초보를 위한 쿠버네티스 안내서 - 실습편",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/icons/favicon-32x32.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `/icons/apple-touch-icon.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/k8s/icons/mstile-150x150.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    // [
    //   "script",
    //   {
    //     async: "true",
    //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    //   },
    // ],
    ["meta", { property: "fb:app_id", content: "1611862309129685" }],
  ],

  base: "/k8s/",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "subicura/k8s",
    editLinks: true,
    docsDir: "src",
    editLinkText: "",
    lastUpdated: true,
    nav: [
      {
        text: "가이드",
        link: "/guide/",
      },
      {
        text: "준비하기",
        link: "/prepare/",
      },
      {
        text: "영상강의",
        link: "https://www.inflearn.com/instructors/209928/courses",
      },
    ],
    sidebar: {
      "/guide/": getGuideSidebar("기본 가이드", "고급 가이드"),
      "/advanced/": [
        {
          title: "고급편",
          collapsable: false,
          children: [""],
        },
      ],
      "/prepare/": [
        {
          title: "준비하기",
          collapsable: false,
          children: [
            "",
            "yaml",
            "for-windows",
            "kubernetes-setup",
            "kubectl-setup",
            "etc",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, _lang) => {
          var d = new Date(timestamp),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;

          return [year, month, day].join("-");
        },
      },
    ],
    ["autometa", autometa_options],
    [
      "mermaidjs",
      {
        sequence: {
          mirrorActors: false,
          actorFontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace, 'Spoqa Han Sans Neo'",
          actorFontWeight: "bold",
          noteFontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace, 'Spoqa Han Sans Neo'",
          noteFontWeight: "normal",
          messageFontFamily:
            '"Spoqa Han Sans Neo", "Apple SD Neo Gothic", "Malgun Gothic", "맑은고딕", Dotum, "돋움", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          messageFontWeight: "normal",
        },
      },
    ],
  ],
};

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "",
        "kubectl",
        "pod",
        "replicaset",
        "deployment",
        "service",
        "sample",
        "ingress",
        "local-volume",
        "configmap",
        "secret",
        "next",
      ],
    },
    {
      title: groupB,
      collapsable: false,
      children: ["advanced"],
    },
  ];
}
