import type { Theme } from "vitepress";
import defaultTheme from 'vitepress/theme';

import { useData, inBrowser } from "vitepress";
import { watchEffect } from "vue";

import { useRouter } from "vitepress";

import './style.css';

const define = <T>(value: T): T => value;

export default define<Theme>({
  extends: defaultTheme,

  enhanceApp: ({ app }) => {
    // app.component(naem, component);

  },
  setup() {
    const { lang } = useData();
    const router = useRouter();

    let prePath: string | undefined = void 0;
    let preLang: string | undefined = void 0;

    watchEffect(() => {
      if (inBrowser) {
        if (lang) {
          const path = router.route.path;
          const language = lang.value;

          if (path.includes(language)) {
            if (router.route.path === `/docs/${language}`) {
              router.go(`${router.route.path.replace(`/${preLang}/`, `/${language}/`)}`);
            }
            // console.log(router.route);
            // console.log('进入了第1个匹配');
            // router.go(`/${lang.value}/${router.route.path.split(`//`)}`);
          }
          else {
            preLang = language;
            prePath = `${router.route.path}/${lang.value}`;
            router.go(`${router.route.path}/${lang.value}`);
          }

          console.log(router.route.path, lang.value);


        }
        // document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  }
});
