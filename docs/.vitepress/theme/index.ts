import type { Theme } from "vitepress";
import defaultTheme from 'vitepress/theme';

import { useData, inBrowser } from "vitepress";
import { watchEffect } from "vue";

import { useRouter } from "vitepress";

import './style.css';
import { BASE_URL } from "../constants";

const define = <T>(value: T): T => value;

export default define<Theme>({
  extends: defaultTheme,

  enhanceApp: ({ app }) => {
    // app.component(naem, component);

  },
  setup() {
    const { lang } = useData();
    const router = useRouter();

    watchEffect(() => {
      if (inBrowser) {
        // 处理跟路由的时候没有默认语言的配置进入
        if (router.route.path === BASE_URL) router.go(BASE_URL + lang.value + '/');

        // 这里会记录当前的语言, 自动更换
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  }
});
