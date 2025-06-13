importScripts("/config_worker/log.conf.js");
importScripts("/config_worker/sw.conf.js");
importScripts("/config_worker/idb.js");

Log.debug("HELLO WORKER!");

self.addEventListener("install", event => {  // 최초 1번만 실행됨. 브라우저자체 또는 설치시 그 이후 실행안됨.

  const cacheHandler = async () => {
    const cacheResult = await caches.open(SwConf.CACHE_NAME); // Cache 스토리지 정보 등록, 업데이트 가능 해당이름의 스토리지오픈.
    console.log(cacheResult);
    return cacheResult.addAll(SwConf.CACHE_FILLE);   //해당 이름으로 정적리소스파일들 캐시에저장. 프로미슈반환.
  };

  event.waitUntil(cacheHandler()); //프로미슈를 주면서 해당 작업이 완료될때까지 설치를 중지해놓은다음 then=resolve 시 설치를 진행

});




self.addEventListener("activate", event => {
  // self.skipWaiting()
  console.log("Service worker activated");
  console.log(SwConf.CACHE_NAME, SwConf.CACHE_FILLE);
  IndexDB.add("Product", { value: "second insert" });

});


self.addEventListener("fetch", event => {

  const url = new URL(event.request.url);
  console.log(navigator.onLine);
  let d = url.pathname.match('.png');

  // if( navigator.onLine )

  // if (d) event.respondWith(caches.match('/source/static/img/faire.png'));
});

async function proxyHandler () {
  
  menuProcessStatus
  IndexDB.get()

  // if( navigator.onLine )
};


// self.addEventListener("fetch", function (e) { //

//   e.respondWith(

//     caches.match(e.request).then(function (r) {

      
//       return (
//         r ||
//         fetch(e.request).then(function (response) {
//           return caches.open(SwConf.CACHE_NAME).then(function (cache) {
//             console.log(
//               "[Service Worker] Caching new resource: " + e.request.url,
//             );
//             cache.put(e.request, response.clone());
//             return response;
//           });
//         })
//       );
//     }),

//   );



//   caches.match(url.pathname).then((v) => {
//     console.log("PATH NAME : ",v);
//   });
//    caches.match(event.request).then((v) => {
//      console.log("envnet REQUEST : ",v);
//     console.log(event.request);
//   });
//   // caches.match('/source/static/img/faire.png').then((v)=>{
//   //   console.log(v);
//   // });
// });




// self.addEventListener("fetch", function (e) { //
//   console.log("HELLO FEACH");
//   console.log("[Service Worker] Fetching resource: " + e.request.url);
// });

// ========================================================================================================
