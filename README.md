# nuxt.js-website

[The Complete Guide](https://www.storyblok.com/tp/nuxt-js-multilanguage-website-tutorial) to Build a Full Blown Multilanguage Website with Nuxt.js  

# [Nuxt.js](https://nuxtjs.org/) The Progressive Vue.js Framework  

[7 Problems you can avoid by using Nuxt.js for your next Vue app](https://medium.com/vue-mastery/7-problems-you-can-avoid-by-using-nuxt-js-for-your-next-vue-app-963afd5047d3)  

Problem #1: Building from scratch is difficult  
Problem #2: No standard folder structure  
Problem #3: Routing config can get longthy  
Problem #4: No standard way to configure  
Problem #5: Not SEO friendly  
Problem #6: Vue apps can load slowly  
Problem #7: Difficult to change the behavior of the framework  

✨  Generating Nuxt.js project in hello-nuxt  
? Project name `hello-nuxt`    
? Project description `My awe-inspiring Nuxt.js project`    
? Author name `jacobhsu`  
? Choose the package manager `Yarn`   
? Choose UI framework `Element`  
? Choose custom server framework `Express`  
? Choose Nuxt.js modules `Axios`  
? Choose linting tools `ESLint`  
? Choose test framework `None`   
? Choose rendering mode `Universal (SSR)`  
? Choose development tools `jsconfig.json` (Recommended for VS Code)  


To get started:

    cd hello-nuxt
    yarn dev

To build & start for production:

    cd hello-nuxt
    yarn build
    yarn start

## npm 

[![NPM](https://nodei.co/npm/nodemon.png?downloads=true&stars=true)](https://nodei.co/npm/nodemon/)  
>  automatically restarting the node application when file changes in the directory are detected.  

[![NPM](https://nodei.co/npm/cross-env.png?downloads=true&stars=true)](https://nodei.co/npm/cross-env/)  

[![NPM](https://nodei.co/npm/express.png?downloads=true&stars=true)](https://nodei.co/npm/express/) 

[![NPM](https://nodei.co/npm/element-ui.png?downloads=true&stars=true)](https://nodei.co/npm/element-ui/) 

# Notes

[路由](https://zh.nuxtjs.org/guide/routing/)  

# Course


[Vue School](https://vueschool.io/) [Nuxt.js Fundamentals](https://vueschool.io/courses/nuxtjs-fundamentals)  
vueschool/[nuxt-fundamentals](https://github.com/vueschool/nuxt-fundamentals/commit/7da3d1f844eabb1bb8716b07905fc320a318dac7)  

# Setting

hello-nuxt\nuxt.config.js

```js
//Global CSS
css: [
'element-ui/lib/theme-chalk/index.css'
// '~/assets/myFile.css'
],
```

nuxtjs.org [api configuration-css](https://nuxtjs.org/api/configuration-css)  
[VS Code] 入門-[使用者設定](https://medium.com/az-%E4%B8%8B%E7%AD%86%E8%A8%98/vs-code-入門-使用者設定-85279307f510)  

## ESLint

docs/[rules](https://eslint.org/docs/rules/)  
[no-console](https://eslint.org/docs/rules/no-console)  
[Eslint: How to disable “unexpected console statement”?](https://stackoverflow.com/questions/34215526/eslint-how-to-disable-unexpected-console-statement-in-node-js)  

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter - Visual Studio Marketplace

`error  Strings must use singlequote`     
☑ Prettier: Single Quote   

ESLint 和 Prettier 的衝突修復
`prettier`字符串默認是用`雙引號`而`esLint`定義的是`單引號`的話這樣格式化之後就不符合ESLint規則了。

.eslintrc.js
```js
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
```

[使用VScode时格式化遇到的问题](https://blog.csdn.net/qq_39009348/article/details/82708208)

在项目的根目录下（同级index.html文件）新建.prettierrc.json，并配置：
```js
{
    "singleQuote":true,//使用单引号而不是双引号
    "semi":false//在语句结尾处不打印分号
}
```
`ctrl + shift + f` 格式化 就會替換單引號與移除分號了

[VS Code書寫vue項目配置 eslint+prettier 統一代碼風格](https://juejin.im/post/5be5429de51d4511a808f4ac)  
[How do I turn off this Eslint error “Expected new line break before and after html tags”?](https://stackoverflow.com/questions/54603407/how-do-i-turn-off-this-eslint-error-expected-new-line-break-before-and-after-ht)  

[How to configure Prettier and VSCode](https://glebbahmutov.com/blog/configure-prettier-in-vscode/)  

# References

[9 Projects you can do to become a Frontend Master in 2020](https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h)  
[[译] JavaScript 单元测试框架：Jasmine, Mocha, AVA, Tape 和 Jest 的比较](https://juejin.im/post/5acc721a6fb9a028b77b23c9)  
[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://www.bnext.com.tw/article/49172/code-mvc-spa-ssr-html)  

# Tools

[Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)  
