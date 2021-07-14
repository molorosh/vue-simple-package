import SimpleComponent from "./SimpleComponent.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("simple-component", SimpleComponent);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

SimpleComponent.install = install;

export default SimpleComponent;