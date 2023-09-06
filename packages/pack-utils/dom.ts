
export const cssRoot = document.querySelector(':root') as HTMLElement;

export const setCssVar = <T extends string>(node: HTMLElement, cssVar: T, value: string, isImportant?: boolean) =>
  node.style.setProperty(cssVar, value, isImportant ? '!important' : void 0);

export const getCssVar = <T extends string>(node: HTMLElement, cssVar: T) => getComputedStyle(node).getPropertyValue(cssVar);

export const setCssVars = (node: HTMLElement, properties: Record<string, string>, isImportant?: boolean) =>
  Object.keys(properties).forEach(prop => setCssVar(node, prop, properties[prop], isImportant));

export const setCssVarForRoot = <T extends string>(cssVar: T, value: string) => setCssVar(cssRoot, cssVar, value);

export const getCssVarForRoot = <T extends string>(cssVar: T) => getCssVar(cssRoot, cssVar);

export const setCssVarsForRoot = <T extends string>(properties: Record<T, string>) => setCssVars(cssRoot, properties);

export const getStyleProperty = <T extends keyof CSSStyleDeclaration>(node: HTMLElement, key: T) => node.style[key];

export const setStyleProperty = <T extends keyof CSSStyleDeclaration>(node: HTMLElement, key: T, value: CSSStyleDeclaration[T]) => node.style[key] = value;

export const setStyleProperties = (node: HTMLElement, styleProperties: Partial<CSSStyleDeclaration>) =>
  Object.keys(styleProperties).forEach((prop) => setStyleProperty(node, prop as keyof CSSStyleDeclaration, styleProperties[prop]));

