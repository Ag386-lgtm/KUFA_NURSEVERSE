/* ═══════════════════════════════════════════════════════════
   📋 بيانات الأقسام العلمية الثمانية
   ─────────────────────────────────────────────────────────
   ✏️ لإضافة قسم جديد: انسخ كائن كامل وأضفه بنهاية المصفوفة
   ✏️ dataFile: اسم ملف بيانات القسم داخل assets/data/
═══════════════════════════════════════════════════════════ */

const DEPARTMENTS = [
  { id:'basics',       num:'01', nameAr:'أساسيات التمريض',        nameEn:'Nursing Basics',
    image:'assets/images/dept-01-basics.png',       dataFile:'assets/data/basics.js',       has3D: true },
  { id:'microbiology', num:'02', nameAr:'الأحياء المجهرية',       nameEn:'Microbiology',
    image:'assets/images/dept-02-microbiology.png', dataFile:'assets/data/microbiology.js', has3D: false },
  { id:'adult',        num:'03', nameAr:'تمريض البالغين',         nameEn:'Adult Nursing',
    image:'assets/images/dept-03-adult.png',        dataFile:'assets/data/adult.js',        has3D: false },
  { id:'pediatric',    num:'04', nameAr:'تمريض الأطفال',          nameEn:'Pediatric Nursing',
    image:'assets/images/dept-04-pediatric.png',    dataFile:'assets/data/pediatric.js',    has3D: false },
  { id:'maternal',     num:'05', nameAr:'تمريض الأم والوليد',     nameEn:'Maternal & Newborn Nursing',
    image:'assets/images/dept-05-maternal.png',     dataFile:'assets/data/maternal.js',     has3D: true },
  { id:'mental',       num:'06', nameAr:'التمريض النفسي',         nameEn:'Mental Health Nursing',
    image:'assets/images/dept-06-mental.png',       dataFile:'assets/data/mental.js',       has3D: false },
  { id:'critical',     num:'07', nameAr:'تمريض الحالات الحرجة',   nameEn:'Critical Care Nursing',
    image:'assets/images/dept-07-critical.png',     dataFile:'assets/data/critical.js',     has3D: false },
  { id:'community',    num:'08', nameAr:'تمريض صحة المجتمع',      nameEn:'Community Health Nursing',
    image:'assets/images/dept-08-community.png',    dataFile:'assets/data/community.js',    has3D: false }
];
