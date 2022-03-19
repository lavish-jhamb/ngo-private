const CACHE_NAME = "version-1";
const urlsToCache = [
    'index.html',
    'offline.html', 
]

const self = this;

self.addEventListener('install',(evt)=>{
    evt.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            cache.addAll(urlsToCache)
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
                return key !== CACHE_NAME
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
            return cacheResponse || fetch(evt.request).catch(() => caches.match('offline.html'))
        })
        .catch(async ()=>{
            const cache = await caches.open(CACHE_NAME);
          return await cache.match('/fallback.html');
        })
    )
})