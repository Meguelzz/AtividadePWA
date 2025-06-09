self.addEventListener("install", (e)=>{
    console.log(" ===> o usuário iniciou a instalação do app");
    console.log(" ===> Rodando o listener da instalação. . .");
    console.log(" ===> O evento de instalação vai esperar cachear o `indexedDB.html`");

    e.waituntil(
        (async () => {
            console.log("fazendo cache pro app funiconar offline!");
            const cache = await caches.open("meucache");
            cache.addAll(["/", "/index.html"]);
        }) ()
    );
})