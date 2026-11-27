/* ═══════════════════════════════════════════════════════════
   📋 بيانات قسم: أساسيات التمريض
   ─────────────────────────────────────────────────────────
   ✏️ كل تعديل هنا يظهر تلقائياً في الموقع.
═══════════════════════════════════════════════════════════ */

const DEPT_DATA = {

  /* ───────────── المعلومات الأساسية ───────────── */
  id: 'basics',
  num: '01',
  nameAr: 'أساسيات التمريض',
  nameEn: 'Nursing Basics',
  image: 'assets/images/dept-01-basics.png',
  description: 'قسم يهتم بالمبادئ والمهارات التمريضية الأساسية التي تشكل حجر الأساس لمهنة التمريض.',

  /* ═════════════════════════════════════════════
     🎬 الفيديوهات
     ─────────────────────────────────────────────
     ✏️ لإضافة/تعديل فيديو:
        - youtubeId: الجزء بعد v= في رابط YouTube
        - nextAfterVideo: الزر التالي الذي يُنقل إليه بعد الفيديو
        - autoRedirect: true = ينتقل تلقائياً بعد انتهاء الفيديو
  ═════════════════════════════════════════════ */
  videos: {
    about: {
      titleAr: 'تعرّف على الفرع',
      titleEn: 'About Basics',
      desc: 'فيديو تعريفي عن قسم أساسيات التمريض وأهميته',
      youtubeId: '',                     // ← ✏️ ضع YouTube ID هنا
      autoRedirect: true,
      nextAfterVideo: 'practical'
    },
    practical: {
      titleAr: 'الجانب العملي',
      titleEn: 'Practical Skills',
      desc: 'المهارات والتطبيقات العملية في أساسيات التمريض',
      youtubeId: '',                     // ← ✏️ ضع YouTube ID هنا
      autoRedirect: true,
      nextAfterVideo: 'quiz'
    }
  },

  /* ═════════════════════════════════════════════
     🎮 اللعبة / الاختبار — 5 مراحل
     ─────────────────────────────────────────────
     ✏️ لإضافة سؤال: أضف عنصراً داخل questions للمرحلة المناسبة.
     ✏️ المراحل المتاحة بأنواعها:
        - matching  → وصل الصور بالأسماء (matchingPairs)
        - qa        → سؤال وجواب (questions: [{q,a}])
        - mcq       → اختيار من متعدد (questions: [{q,options,correct}])
        - truefalse → صح/خطأ (questions: [{q,correct}])
        - sequence  → ترتيب الخطوات (items: [..])
  ═════════════════════════════════════════════ */
  quiz: {
    title: 'اختبر معلوماتك — أساسيات التمريض',
    stages: [

      /* ── المرحلة 1: وصل الصور ── */
      {
        type: 'matching',
        title: 'المرحلة 1: وصّل الصورة بالاسم',
        matchingPairs: [
          // ✏️ أضف/عدّل أزواج هنا
          { image: 'assets/images/match-01.png', label: 'ميزان الحرارة' },
          { image: 'assets/images/match-02.png', label: 'سماعة الطبيب' },
          { image: 'assets/images/match-03.png', label: 'جهاز ضغط الدم' },
          { image: 'assets/images/match-04.png', label: 'حقنة' }
        ]
      },

      /* ── المرحلة 2: سؤال وجواب ── */
      {
        type: 'qa',
        title: 'المرحلة 2: أسئلة وأجوبة',
        questions: [
          // ✏️ أضف أسئلة هنا
          { q: 'ما هي أول خطوة قبل إعطاء أي دواء للمريض؟',
            a: 'التحقق من هوية المريض ووصفة الدواء (5 Rights)' },
          { q: 'ما المعدل الطبيعي لنبض البالغ؟',
            a: '60 - 100 نبضة في الدقيقة' }
        ]
      },

      /* ── المرحلة 3: اختيار من متعدد ── */
      {
        type: 'mcq',
        title: 'المرحلة 3: اختر الإجابة الصحيحة',
        questions: [
          // ✏️ أضف أسئلة هنا (correct = فهرس الإجابة الصحيحة، يبدأ من 0)
          {
            q: 'ما المعدل الطبيعي لدرجة حرارة الجسم؟',
            options: ['35°C', '37°C', '40°C', '32°C'],
            correct: 1
          },
          {
            q: 'كم عدد مرات التنفس الطبيعية في الدقيقة للبالغ؟',
            options: ['5-8', '12-20', '25-30', '30-40'],
            correct: 1
          }
        ]
      },

      /* ── المرحلة 4: صح / خطأ ── */
      {
        type: 'truefalse',
        title: 'المرحلة 4: صح أم خطأ',
        questions: [
          // ✏️ أضف أسئلة هنا
          { q: 'يجب غسل اليدين قبل وبعد التعامل مع المريض.', correct: true },
          { q: 'يمكن إعطاء الدواء دون التحقق من اسم المريض.', correct: false }
        ]
      },

      /* ── المرحلة 5: ترتيب الخطوات ── */
      {
        type: 'sequence',
        title: 'المرحلة 5: رتّب الخطوات بالترتيب الصحيح',
        instruction: 'رتّب خطوات قياس ضغط الدم',
        items: [                          // ← ✏️ الترتيب الصحيح (سيتم خلطه للاعب)
          'غسل اليدين',
          'تجهيز جهاز الضغط',
          'وضع الكفة على الذراع',
          'نفخ الكفة وقياس الضغط',
          'تسجيل النتيجة'
        ]
      }
    ]
  },

  /* ═════════════════════════════════════════════
     🧬 المجسمات ثلاثية الأبعاد
     ─────────────────────────────────────────────
     ✏️ لإضافة مجسم:
        - nameAr / nameEn: اسم المجسم
        - description: وصف مختصر
        - modelUrl: رابط Sketchfab أو أي iframe embed
        - internalPage: صفحة داخلية للمجسم (مثل: pages/model3d.html?dept=basics&model=heart)
     ─────────────────────────────────────────────
     ✏️ حالياً الروابط فارغة — نضيفها لاحقاً كما اتفقنا.
  ═════════════════════════════════════════════ */
  models3d: [
    { id:'full-body',    nameAr:'جسم الإنسان الكامل',        nameEn:'Full Human Body',       description:'مجسم كامل لجسم الإنسان يوضح الأجهزة الرئيسية.',   modelUrl:'', internalPage:'' },
    { id:'skeleton',     nameAr:'الهيكل العظمي',             nameEn:'Skeletal System',       description:'العظام الرئيسية في جسم الإنسان.',               modelUrl:'', internalPage:'' },
    { id:'heart',        nameAr:'القلب',                     nameEn:'Heart',                 description:'تشريح القلب وحجراته والصمامات.',                 modelUrl:'', internalPage:'' },
    { id:'brain',        nameAr:'الدماغ والجهاز العصبي',    nameEn:'Brain & Nervous System',description:'تركيب الدماغ والأعصاب الرئيسية.',                modelUrl:'', internalPage:'' },
    { id:'respiratory',  nameAr:'الجهاز التنفسي',            nameEn:'Respiratory System',    description:'الرئتان والشعب الهوائية.',                       modelUrl:'', internalPage:'' },
    { id:'digestive',    nameAr:'الجهاز الهضمي',             nameEn:'Digestive System',      description:'المعدة والأمعاء والكبد.',                        modelUrl:'', internalPage:'' },
    { id:'urinary',      nameAr:'الجهاز البولي',             nameEn:'Urinary System',        description:'الكلى والحالبان والمثانة.',                      modelUrl:'', internalPage:'' },
    { id:'muscular',     nameAr:'الجهاز العضلي',             nameEn:'Muscular System',       description:'العضلات الرئيسية في جسم الإنسان.',               modelUrl:'', internalPage:'' },
    { id:'eye',          nameAr:'العين وأجزاؤها',            nameEn:'Eye Anatomy',           description:'تركيب العين وأجزاؤها الداخلية.',                 modelUrl:'', internalPage:'' },
    { id:'skin',         nameAr:'الجلد وطبقاته',             nameEn:'Skin Layers',           description:'طبقات الجلد الثلاث.',                            modelUrl:'', internalPage:'' }
  ]

};
