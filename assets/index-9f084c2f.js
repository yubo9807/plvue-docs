import{h as l,L as n,H as r}from"./pl-vue-871d2792.js";import{j as t,e as s}from"./main-82245017.js";const c="banner-64e93c",o="box-e24f47",i="bg-a171c3",u="blend-4c743b",p="btn-05bf70",m="enter-825ce4",b="article-e5ab12",d="paragraph-6f9bd7",g="mark-66b760",f="peculiarity-fd110f",e={banner:c,box:o,bg:i,blend:u,btn:p,enter:m,article:b,paragraph:d,mark:g,peculiarity:f};function v(){const a="Pl Vue 是一个将响应式数据的使用高度交予开发者决定的一个库，它不依赖于任何第三方库。该库提供了组件化、挂载钩子、Router、Store 以及服务端渲染相关 API。";return l("div",null,l(r,null,l("title",null,"首页 | Pl Vue"),l("meta",{name:"description",content:a})),l("div",{className:e.banner},l("div",{className:e.box},l("div",{className:e.bg},l("strong",null,"Pl Vue"),l("p",null,"一个 JS 库，只关心数据与函数之间的联动")),l(n,{className:e.btn,to:"/docs/reactivity"},"API 参考"))),l("article",{className:t("leayer","module-gap",e.article)},l("p",{className:e.paragraph},a,"项目搭建可参考  ",l("a",{href:s.GITHUB_URL+"mvvm_vue3"},"GitHub"),"。"),l("p",{className:e.mark},"该库本身与 Vue 框架无任何关系，只是多数 API 在命名上相同而已。")),l("ul",{className:t("leayer","module-gap",e.peculiarity)},l("li",null,l("h2",null,"响不响应式的，高度交予开发者决定"),l("p",null,"JSX 编程方式，响应式数据统一使用函数的方式包裹。可以规避一些响应式数据滥用，在一定程度上优化了性能。",l(n,{to:"/docs/property"},"了解更多"))),l("li",null,l("h2",null,"无虚拟 DOM 参与"),l("p",null,"将用到响应式数据的函数进行收集，在数据更新后执行相应的函数。因此直接省去了节点的比较。")),l("li",null,l("h2",null,"最接近原生应用的开发方式"),l("p",null,"无论是属性、事件绑定、还是动态加载，都与原生应用毫无差别。")),l("li",null,l("h2",null,"代码精简，minify < 20k"),l("p",null,"手写 h 与 Fragment，将代码体积精简到极致。"))))}export{v as default};
