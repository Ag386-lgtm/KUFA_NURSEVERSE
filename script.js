// 1. إعدادات الفيديو (✏️ ضع رابط فيديو اليوتيوب هنا)
const INTRO_VIDEO_ID = "dQw4w9WgXcQ"; // استبدل هذا برابط الفيديو الخاص بك
const VIDEO_DURATION = 20; // مدة الفيديو بالثواني (لكي ينقلك تلقائياً)

// 2. تشغيل الفيديو والانتقال التلقائي
document.addEventListener("DOMContentLoaded", () => {
    // فتح الواجهة الرئيسية افتراضياً
    showPage('home');

    // تشغيل الفيديو
    const iframe = document.getElementById('mainVideo');
    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${INTRO_VIDEO_ID}?autoplay=1&mute=1`;
    }

    // الانتقال التلقائي بعد انتهاء الوقت
    setTimeout(() => {
        // التحقق من أن المستخدم لا يزال في الصفحة الرئيسية قبل النقل
        if (document.getElementById('home').classList.contains('active')) {
            showPage('departments');
        }
    }, VIDEO_DURATION * 1000);
});

// 3. التنقل بين الصفحات (الرئيسية ↔ الأقسام)
function showPage(pageId) {
    // إخفاء كل الصفحات
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    // إظهار الصفحة المطلوبة
    document.getElementById(pageId).classList.add('active');
    // إغلاق القائمة الجانبية إذا كانت مفتوحة
    closeSidebar();
    // التمرير لأعلى الصفحة
    window.scrollTo(0, 0);
}

// 4. التحكم في القائمة الجانبية (فتح/إغلاق)
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
}

// 5. الوضع الليلي والنهاري
function toggleTheme() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        document.getElementById('themeBtn').innerText = '🌙';
    } else {
        html.setAttribute('data-theme', 'dark');
        document.getElementById('themeBtn').innerText = '☀️';
    }
}
