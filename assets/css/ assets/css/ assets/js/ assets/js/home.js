/* ═══════════════════════════════════════════════════════════
   ⚙️ سكربت الصفحة الرئيسية — الفيديو + الترحيب
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1) بناء نص الترحيب ── */
  document.getElementById('welcomeTitle').textContent   = CONFIG.welcomeText.title;
  document.getElementById('welcomeTagline').textContent = CONFIG.welcomeText.tagline;
  document.getElementById('welcomeBody').innerHTML =
    CONFIG.welcomeText.paragraphs.map(p => `<p>${p}</p>`).join('') +
    `<p class="welcome-final">${CONFIG.welcomeText.final}</p>`;

  const startBtn = document.getElementById('startBtn');
  startBtn.textContent = CONFIG.welcomeText.startButton;
  startBtn.href        = CONFIG.introVideo.nextPage;

  /* ── 2) الفيديو ── */
  const container = document.getElementById('videoContainer');
  const videoId   = CONFIG.introVideo.youtubeId;

  if (!videoId) {
    console.warn('⚠️ لم يتم وضع YouTube ID — سيتم الانتقال بعد',
                 CONFIG.introVideo.fallbackDuration, 'ثانية');
    if (CONFIG.introVideo.autoRedirect) {
      setTimeout(() => { window.location.href = CONFIG.introVideo.nextPage; },
                 CONFIG.introVideo.fallbackDuration * 1000);
    }
    return;
  }

  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);

  window.onYouTubeIframeAPIReady = function () {
    container.outerHTML = '<div id="ytPlayer"></div>';
    new YT.Player('ytPlayer', {
      videoId: videoId,
      playerVars: {
        autoplay: CONFIG.introVideo.autoplay ? 1 : 0,
        mute:     CONFIG.introVideo.mute     ? 1 : 0,
        rel: 0, modestbranding: 1
      },
      events: {
        onStateChange: function (e) {
          if (e.data === YT.PlayerState.ENDED && CONFIG.introVideo.autoRedirect) {
            window.location.href = CONFIG.introVideo.nextPage;
          }
        }
      }
    });
  };
})();
