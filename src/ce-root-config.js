import { registerApplication, start } from "single-spa";

// fetch('https://meuhype.com.br/api/v1/apps')
// .then((resp) => resp.json())
// .then(data => {
//     data.aplications.forEach(app => {
        
//         registerApplication({
//             name: app.name,
//             app: () => System.import(app.package),
//             activeWhen: app.exact 
//                 ?
//                     (location) => {
//                         if(location.pathname === app.activeWhen){
//                             return true
//                         }
//                         return false
//                     } 

//                 :
//                 [app.activeWhen]
//         });
        
//     });
// }).finally(() => {
//     start({
//         urlRerouteOnly: true,
//     });
// })


    registerApplication({
        name: "@ce/resume-me",
        app: () => System.import("@ce/resume-me"),
        activeWhen: (location) => {
                        if(location.pathname === "/"){
                            return true
                        }
                        return false
                    } ,
        
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



// {
//     "aplications": [{
//             "name": "@ce/resume-me",
//             "package": "@ce/resume-me",
//             "activeWhen": "/",
//             "exact": true
//         },
//         {
//             "name": "@ce/pokedex",
//             "package": "@ce/pokedex",
//             "activeWhen": "/pokedex",
//             "exact": true
//         }
//     ]

// }