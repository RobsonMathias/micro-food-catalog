import { start, registerApplication, pathToActiveWhen } from "single-spa";

declare global {
  interface Window {
    System: any;
    singleSpaNavigate: any;
  }
}

function getLifeCycles(path: string) {
  return () => window.System.import(path);
}

registerApplication({
  name: "catalog",
  app: getLifeCycles(`/catalog/index.js`),
  activeWhen: pathToActiveWhen("/preview"),
  customProps: {},
});

if (!window.location.pathname || window.location.pathname === "/") {
  window.singleSpaNavigate("/preview");
}

start();
