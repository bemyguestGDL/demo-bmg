const CACHE_ESTATICO = "estatico-v1";
const CACHE_DINAMICO = "dinamico-v1";
const CACHE_INMUTABLE = "inmutable";

const appShell = [
    '/demo-bmg//index.html',
    '/demo-bmg/css/estilos.css',
    '/demo-bmg/js/app.js',
    '/demo-bmg/img/comida-1.jpg',
    '/demo-bmg/img/comida-2.jpg',
    '/demo-bmg/img/como-test.png',
    '/demo-bmg/img/como-test2.png',
    '/demo-bmg/img/couple-1.jpg',
    '/demo-bmg/img/couple-2.jpg',
    '/demo-bmg/img/couple-3.jpg',
    '/demo-bmg/img/couple-4.jpg',
    '/demo-bmg/img/couple-5.jpg',
    '/demo-bmg/img/cuando-test.png',
    '/demo-bmg/img/cuando-test2.png',
    '/demo-bmg/img/donde-test.png',
    '/demo-bmg/img/donde-test2.png',
    '/demo-bmg/img/header-resize.png',
    '/demo-bmg/img/hotel-1.png',
    '/demo-bmg/img/hotel-2.png',
    '/demo-bmg/img/hotel-3.png',
    '/demo-bmg/img/hotel-4.png',
    '/demo-bmg/img/liverpool-logo.png',
    '/demo-bmg/img/logo.png',
    '/demo-bmg/img/logo-ico.ico',
    '/demo-bmg/img/palacio-logo.png',
    '/demo-bmg/img/rsvp-foto.png',
    '/demo-bmg/img/salon-1.jpg',
    '/demo-bmg/img/salon-2.jpg'
];

const appShellInmutable = [
    'https://kit.fontawesome.com/3e7a1a3c47.js',
    'https://fonts.googleapis.com/css2?family=Bentham&family=Josefin+Sans:wght@300&family=Poiret+One&family=Quicksand&family=Tenor+Sans&display=swap',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'js/simplyCountdown.min.js'
];

self.addEventListener('install', e => {
    const estatico = caches.open(CACHE_ESTATICO).then(cache => {
        cache.addAll(appShell);
    });
    const inmutable = caches.open(CACHE_INMUTABLE).then(cache => {
        cache.addAll(appShellInmutable);
    });

    e.waitUntil(Promise.all([estatico, inmutable]));
});

self.addEventListener('activate', e => {
    const versionCache = caches.keys(keys => {
        keys.forEach(key => {
            if (key != CACHE_ESTATICO && key.includes('estatio')) {
                return caches.delete(key);
            }
            if (key != CACHE_DINAMICO && key.includes('dinamico')) {
                return caches.delete(key);
            }
        });
    });
    e.waitUntil(versionCache);
});

self.addEventListener('fetch', e => {
    const respuesta = caches.match(e.request).then(res=>{
        if(res) return res;

        return fetch(e.request).then(newRes=>{
            caches.open(CACHE_DINAMICO).then(cache=>{
                cache.put(e.request,newRes);
            });
            return newRes.clone();
        });
    });
    e.respondWith(respuesta);
});