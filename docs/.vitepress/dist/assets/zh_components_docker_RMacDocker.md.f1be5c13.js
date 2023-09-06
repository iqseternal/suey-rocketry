import{_ as t,o as e,c as a,Q as d}from"./chunks/framework.29d2b9ef.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/docker/RMacDocker.md","filePath":"zh/components/docker/RMacDocker.md"}'),o={name:"zh/components/docker/RMacDocker.md"},n=d(`<h2 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h2><p>Mac容器将为你提供一个类似于Mac的布局效果。你只需要关心主视窗内容的书写即可。</p><h2 id="主要容器" tabindex="-1">主要容器 <a class="header-anchor" href="#主要容器" aria-label="Permalink to &quot;主要容器&quot;">​</a></h2><p>:::主要容器将在展示页面时为你预置一个展示自定义内容的插槽行为，你的内容将在指定位置展示。但是插槽已经被隐藏了，建议使用<code>RMacDockerMain</code>作为子组件放入。</p><p>就像这样</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">RMacDocker</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">RMacDockerMain</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#FDAEB7;font-style:italic;">RouterView</span><span style="color:#E1E4E8;"> /&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">RMacDockerMain</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">RMacDocker</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { RMacDocker, RMacDockerMain } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;packages&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">RMacDocker</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">RMacDockerMain</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#B31D28;font-style:italic;">RouterView</span><span style="color:#24292E;"> /&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">RMacDockerMain</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">RMacDocker</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RMacDocker, RMacDockerMain } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;packages&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>你的内容将会在<code>RMacDocker</code>的主要位置显示。</p><h2 id="容器项" tabindex="-1">容器项 <a class="header-anchor" href="#容器项" aria-label="Permalink to &quot;容器项&quot;">​</a></h2><p>:::容器项则会像应用程序图标一样，放到屏幕的下方，你可以随意传入，当传入的 Item 数量大于了特定值的时候，会自动地产生<code>RMacDockerControl</code>来控制您的应用程序。</p><h2 id="容器控制项" tabindex="-1">容器控制项 <a class="header-anchor" href="#容器控制项" aria-label="Permalink to &quot;容器控制项&quot;">​</a></h2><p>Vertical Menu with sub-menus.</p><p>:::demo You can use the el-menu-item-group component to create a menu group, and the name of the group is determined by the title prop or a named slot.</p><p>menu/vertical</p><h2 id="collapse" tabindex="-1">Collapse <a class="header-anchor" href="#collapse" aria-label="Permalink to &quot;Collapse&quot;">​</a></h2><p>Vertical Menu could be collapsed.</p><p>:::demo</p><p>menu/collapse</p><p>:::</p><h2 id="menu-attributes" tabindex="-1">Menu Attributes <a class="header-anchor" href="#menu-attributes" aria-label="Permalink to &quot;Menu Attributes&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>mode</td><td>menu display mode</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>whether the menu is collapsed (available only in vertical mode)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>ellipsis</td><td>whether the menu is ellipsis (available only in horizontal mode)</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>background-color</td><td>background color of Menu (hex format) (deprecated, use <code>--bg-color</code> instead)</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>text color of Menu (hex format) (deprecated, use <code>--text-color</code> instead)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>text color of currently active menu item (hex format) (deprecated, use <code>--active-color</code> instead)</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>index of active menu on page load</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>array that contains indexes of currently active sub-menus</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>whether only one sub-menu can be active</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>how sub-menus are triggered, only works when <code>mode</code> is &#39;horizontal&#39;</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>whether <code>vue-router</code> mode is activated. If true, index will be used as &#39;path&#39; to activate the route action. Use with <code>default-active</code> to set the active item on load.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>whether to enable the collapse transition</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>popper-effect ^(2.2.26)</td><td>Tooltip theme, built-in theme: <code>dark</code> / <code>light</code> when menu is collapsed</td><td>string</td><td>dark / light</td><td>dark</td></tr></tbody></table><h2 id="menu-methods" tabindex="-1">Menu Methods <a class="header-anchor" href="#menu-methods" aria-label="Permalink to &quot;Menu Methods&quot;">​</a></h2><table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>open a specific sub-menu</td><td>index: index of the sub-menu to open</td></tr><tr><td>close</td><td>close a specific sub-menu</td><td>index: index of the sub-menu to close</td></tr></tbody></table><h2 id="menu-events" tabindex="-1">Menu Events <a class="header-anchor" href="#menu-events" aria-label="Permalink to &quot;Menu Events&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>callback function when menu is activated</td><td>index: index of activated menu, indexPath: index path of activated menu, item: the selected menu item, routeResult: result returned by <code>vue-router</code> if <code>router</code> is enabled</td></tr><tr><td>open</td><td>callback function when sub-menu expands</td><td>index: index of expanded sub-menu, indexPath: index path of expanded sub-menu</td></tr><tr><td>close</td><td>callback function when sub-menu collapses</td><td>index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu</td></tr></tbody></table><h2 id="menu-slots" tabindex="-1">Menu Slots <a class="header-anchor" href="#menu-slots" aria-label="Permalink to &quot;Menu Slots&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Subtags</th></tr></thead><tbody><tr><td>—</td><td>customize default content</td><td>SubMenu / Menu-Item / Menu-Item-Group</td></tr></tbody></table><h2 id="submenu-attributes" tabindex="-1">SubMenu Attributes <a class="header-anchor" href="#submenu-attributes" aria-label="Permalink to &quot;SubMenu Attributes&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>unique identification</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>custom class name for the popup menu</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>timeout before showing a sub-menu</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>timeout before hiding a sub-menu</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>whether the sub-menu is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body(deprecated)</td><td>whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop</td><td>boolean</td><td>—</td><td>level one SubMenu: true / other SubMenus: false</td></tr><tr><td>teleported</td><td>whether popup menu is teleported to the body</td><td>boolean</td><td>—</td><td>level one SubMenu: true / other SubMenus: false</td></tr><tr><td>popper-offset</td><td>offset of the popper</td><td>number</td><td>—</td><td>6</td></tr><tr><td>expand-close-icon</td><td>Icon when menu are expanded and submenu are closed, <code>expand-close-icon</code> and <code>expand-open-icon</code> need to be passed together to take effect</td><td><code>string | Component</code></td><td>—</td><td>—</td></tr><tr><td>expand-open-icon</td><td>Icon when menu are expanded and submenu are opened, <code>expand-open-icon</code> and <code>expand-close-icon</code> need to be passed together to take effect</td><td><code>string | Component</code></td><td>—</td><td>—</td></tr><tr><td>collapse-close-icon</td><td>Icon when menu are collapsed and submenu are closed, <code>collapse-close-icon</code> and <code>collapse-open-icon</code> need to be passed together to take effect</td><td><code>string | Component</code></td><td>—</td><td>—</td></tr><tr><td>collapse-open-icon</td><td>Icon when menu are collapsed and submenu are opened, <code>collapse-open-icon</code> and <code>collapse-close-icon</code> need to be passed together to take effect</td><td><code>string | Component</code></td><td>—</td><td>—</td></tr></tbody></table><h2 id="submenu-slots" tabindex="-1">SubMenu Slots <a class="header-anchor" href="#submenu-slots" aria-label="Permalink to &quot;SubMenu Slots&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Subtags</th></tr></thead><tbody><tr><td>—</td><td>customize default content</td><td>SubMenu / Menu-Item / Menu-Item-Group</td></tr><tr><td>title</td><td>customize title content</td><td>—</td></tr></tbody></table><h2 id="menu-item-attributes" tabindex="-1">Menu-Item Attributes <a class="header-anchor" href="#menu-item-attributes" aria-label="Permalink to &quot;Menu-Item Attributes&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>unique identification</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>route</td><td>Vue Router object</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether disabled</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id="menu-item-events" tabindex="-1">Menu-Item Events <a class="header-anchor" href="#menu-item-events" aria-label="Permalink to &quot;Menu-Item Events&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>callback function when menu-item is clicked</td><td>el: menu-item instance</td></tr></tbody></table><h2 id="menu-item-slots" tabindex="-1">Menu-Item Slots <a class="header-anchor" href="#menu-item-slots" aria-label="Permalink to &quot;Menu-Item Slots&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>customize default content</td></tr><tr><td>title</td><td>customize title content</td></tr></tbody></table><h2 id="menu-item-group-attributes" tabindex="-1">Menu-Item-Group Attributes <a class="header-anchor" href="#menu-item-group-attributes" aria-label="Permalink to &quot;Menu-Item-Group Attributes&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>group title</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h2 id="menu-item-group-slots" tabindex="-1">Menu-Item-Group Slots <a class="header-anchor" href="#menu-item-group-slots" aria-label="Permalink to &quot;Menu-Item-Group Slots&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Subtags</th></tr></thead><tbody><tr><td>—</td><td>customize default content</td><td>Menu-Item</td></tr><tr><td>title</td><td>customize group title</td><td>—</td></tr></tbody></table>`,40),s=[n];function l(r,c,p,i,u,h){return e(),a("div",null,s)}const y=t(o,[["render",l]]);export{b as __pageData,y as default};