import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习笔记",
  description: "记录个人笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        collapsed: false,
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "框架", items: [{ text: "Vue", link: "/frame/vue" }] },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Pursuit01" }],
  },
});
