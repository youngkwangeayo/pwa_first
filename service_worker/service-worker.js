importScripts("/service_worker/sw.conf.js");

console.log("HELLO WORKER!");


self.addEventListener("install", event => {  // 최초 1번만 실행됨. 브라우저자체 또는 설치시 그 이후 실행안됨.
   console.log("Service worker installed");
  
   const cacheHendler = async ()=>{
      const cacheResult = await caches.open( SwConf.CACHE_NAME ); // Cache 스토리지 정보 등록, 업데이트 가능 해당이름의 스토리지오픈.
      return cacheResult.addAll( SwConf.CACHE_FILLE );   //해당 이름으로 정적리소스파일들 캐시에저장. 프로미슈반환.
   };

   event.waitUntil( cacheHendler() ); //프로미슈를 주면서 해당 작업이 완료될때까지 설치를 중지해놓은다음 then=resolve 시 설치를 진행
   
});



self.addEventListener("activate", event => {
   console.log("Service worker activated");
   console.log(SwConf.CACHE_NAME, SwConf.CACHE_FILLE );
});


// self.addEventListener("fetch", function (e) {
//   console.log("[Service Worker] Fetched resource " + e.request.url, e);
// });

self.addEventListener("fetch", function (e) { //
  e.respondWith(
    caches.match(e.request).then(function (r) {
      console.log("[Service Worker] Fetching resource: " + e.request.url);
      return (
        r ||
        fetch(e.request).then(function (response) {
          return caches.open(SwConf.CACHE_NAME).then(function (cache) {
            console.log(
              "[Service Worker] Caching new resource: " + e.request.url,
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});



async function proxyFetch (params) {
   debugger
}
// self.addEventListener("fetch", function (e) {
//   e.respondWith(
//     caches.match(e.request).then(function (r) {
   
//     }),
//   );
// });