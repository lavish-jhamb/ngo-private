const cache_version = "v2";
const cacheArray = [
    '/',
    '/index.html',
    '/manifest.json',
]

const self = this;

self.addEventListener('install',(evt)=>{
    evt.waitUntil(
        caches.open(cache_version)
        .then((cache)=>{
            cache.addAll(cacheArray)
        })
        .catch((err)=>{
            console.log("Error caching",err)
        })
    )    
    self.skipWaiting()
})

self.addEventListener('activate',(evt)=>{
    console.log("sw activated",evt)
    evt.waitUntil(
        caches.keys().then((keys)=>{
            return Promise.all(keys.filter((key)=>{
                return key !== cache_version
            }).map((key)=>{
                return caches.delete(key)
            }))
        })
    )
})

self.addEventListener('fetch',(evt)=>{
    evt.respondWith(
        caches.match(evt.request)
        .then((cacheResponse)=>{
            return cacheResponse || fetch(evt.request)
        })
        .catch(async ()=>{
            const cache = await caches.open(cache_version);
          return await cache.match('/fallback.html');
        })
    )
})