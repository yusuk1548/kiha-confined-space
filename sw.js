// 서비스 워커 빈 껍데기 (PWA 설치 요건 충족을 위해 필수)
self.addEventListener('install', event => {
    console.log('Service Worker Installed');
});

self.addEventListener('fetch', event => {
    // 앱이 오프라인에서도 열리게 하려면 여기에 캐싱 로직이 들어가야 합니다.
    // 현재는 인터넷 배지 제거를 위해 등록만 합니다.
});