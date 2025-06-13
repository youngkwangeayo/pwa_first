console.log('[app.js]  app.js is ready : ', document.readyState);

if ('serviceWorker' in navigator) {
    console.log("exist worker");
    navigator.serviceWorker.register('/service-worker.js');
    // navigator.serviceWorker.register('./service-worker.js');
};


document.querySelector('#remove-serviceworker').addEventListener("click", async(e) => {

    if (!('serviceWorker' in navigator)) return;

    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const reg of registrations) {
      await reg.unregister(); // 서비스워커 제거
      console.log(`Unregistered: ${reg.scope}`);
    }

    // 캐시도 함께 제거 (옵션)
    const cacheNames = await caches.keys();
    for (const name of cacheNames) {
      await caches.delete(name);
      console.log(`Deleted cache: ${name}`);
    }
    location.reload();
});

document.addEventListener("DOMContentLoaded", () => {

    console.log("DOMContentLoaded", document.readyState);
    renderMenus();
})



// ==test
document.querySelector("#test1").addEventListener("click", ()=>{
    console.log("TEST REQUEST");
    getMenuList();

})
document.querySelector("#test2").addEventListener("click", ()=>{
    console.log("TEST REQUEST");
    getLocal();

})


    // document.addEventListener('click',()=>{
    //     console.log("CLICK")
    //     console.log("DOMContentLoaded",document.readyState);
    // })

// async function t1(){
//         const res = await fetch('http://127.0.0.1:3004');
//         debugger
//         const files = await res.json();
//         debugger
// };

// (async () => {
//     debugger
//     debugger
// })();
