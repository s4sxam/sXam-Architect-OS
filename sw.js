self.addEventListener('install', (e) => {
  console.log('sXam OS: Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // ক্যাশ লজিক পরে অ্যাড করা যাবে, আপাতত ইন্সটল করার জন্য এটিই যথেষ্ট
});