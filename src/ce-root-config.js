import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@ce/resume-me",
    app: () => System.import("@ce/resume-me"),
    activeWhen:(location) => {
        if(location.pathname === "/"){
            return true
        }
        return false
    } 
});

registerApplication({
    name: "@ce/pokedex",
    app: () => System.import("@ce/pokedex"),
    activeWhen: ["/pokedex"],
});

registerApplication({
    name: "@ce/react-single",
    app: () => System.import("@ce/react-single"),
    activeWhen: ["/react-single"],
});

registerApplication({
    name: "@ce/react-multiples",
    app: () => System.import("@ce/react-multiples"),
    activeWhen: ["/react-multiples"],
});

registerApplication({
    name: "@ce/meuhype",
    app: () => System.import("@ce/meuhype"),
    activeWhen: ["/meuhype"],
});

start({
    urlRerouteOnly: true,
});
