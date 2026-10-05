// Theme: "light" | "dark" on <html data-theme>. First visit follows the system
// (prefers-color-scheme); a choice made with the toggle is saved in localStorage.
export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Browser UI color (meta theme-color) per theme; matches --color-bg in globals.css.
export const themeColors: Record<Theme, string> = { light: "#FCFCFC", dark: "#0A0A0A" };

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = themeColors[theme];
}

// Inline <head> script: runs before first paint so there is no flash of the wrong theme.
// Also follows system changes while the visitor hasn't picked a theme.
export const themeScript = `(function(){
var d=document.documentElement,k=${JSON.stringify(THEME_STORAGE_KEY)},c=${JSON.stringify(themeColors)};
function saved(){try{var t=localStorage.getItem(k);return t==="light"||t==="dark"?t:null}catch(e){return null}}
function apply(t){d.setAttribute("data-theme",t);var m=document.querySelector('meta[name="theme-color"]');if(!m){m=document.createElement("meta");m.name="theme-color";document.head.appendChild(m)}m.content=c[t]}
var q=window.matchMedia("(prefers-color-scheme: dark)");
apply(saved()||(q.matches?"dark":"light"));
q.addEventListener("change",function(e){if(!saved())apply(e.matches?"dark":"light")});
})()`;
