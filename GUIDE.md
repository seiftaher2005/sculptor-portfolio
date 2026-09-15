# 📖 دليل الاستخدام الكامل

## كيفية البدء السريع (Quick Start)

### 1️⃣ استنساخ المشروع
```bash
git clone https://github.com/seiftaher2005/sculptor-portfolio.git
cd sculptor-portfolio
```

### 2️⃣ فتح الموقع
- افتح ملف `index.html` مباشرة في المتصفح
- أو استخدم خادم محلي (Live Server في VS Code)

---

## 🎯 تعديل البيانات الأساسية

### تحديث معلوماتك الشخصية

**في ملف `index.html`:**

```html
<!-- البحث عن هذا القسم -->
<section id="home" class="hero">
    <div class="hero-content">
        <div class="hero-image">
            <img src="assets/profile.jpg" alt="سيف طاهر">
        </div>
        <div class="hero-text">
            <h1>سيف طاهر</h1>  <!-- غيّر الاسم هنا -->
            <p class="subtitle">نحّات وفنان تشكيلي معاصر</p>  <!-- غيّر المسمى الوظيفي -->
            <p class="description">استكشاف العلاقة بين الإنسان والمادة والفكرة من خلال النحت</p>  <!-- غيّر الوصف -->
        </div>
    </div>
</section>
```

### تحديث قسم "من أنا"

**في ملف `index.html`:**

```html
<section id="about" class="about">
    <div class="container">
        <h2>من أنا</h2>
        <div class="about-content">
            <div class="about-text">
                <!-- غيّر النصوص هنا -->
                <p>أنا سيف طاهر، نحّات وفنان...</p>
                <h3>الخامات والتقنيات</h3>
                <p>أعمل باستخدام...</p>
            </div>
        </div>
    </div>
</section>
```

### تحديث معلومات التواصل

**في ملف `index.html`:**

```html
<section id="contact" class="contact">
    <div class="container">
        <h2>تواصل معي</h2>
        <div class="contact-info">
            <div class="contact-item">
                <h3>البريد الإلكتروني</h3>
                <p><a href="mailto:your-email@example.com">your-email@example.com</a></p>  <!-- غيّر البريد -->
            </div>
            <div class="contact-item">
                <h3>الهاتف</h3>
                <p><a href="tel:+201234567890">+20 123 456 7890</a></p>  <!-- غيّر الهاتف -->
            </div>
            <div class="contact-item">
                <h3>وسائل التواصل</h3>
                <div class="social-links">
                    <a href="https://instagram.com" target="_blank">Instagram</a>  <!-- غيّر الروابط -->
                    <a href="https://facebook.com" target="_blank">Facebook</a>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 🖼️ إضافة أعمالك

### إضافة عمل جديد

**في ملف `data.js`:**

```javascript
// أضف كائن جديد إلى مصفوفة portfolioData
{
    id: 9,                                    // رقم فريد للعمل
    title: "عنوان العمل",                    // عنوان العمل
    category: "sculpture",                    // sculpture, mixed, أو installation
    year: "2024",                            // سنة إنشاء العمل
    image: "assets/works/work9.jpg",        // مسار الصورة
    description: "وصف قصير للعمل",           // وصف يظهر في الشبكة
    techniques: "الخامات المستخدمة",         // مثل: طين، خشب، جبس
    details: "وصف تفصيلي جداً للعمل..."     // وصف طويل في النافذة المنفثقة
}
```

### مثال عملي:

```javascript
{
    id: 9,
    title: "العودة إلى الجذور",
    category: "mixed",
    year: "2024",
    image: "assets/works/return-to-roots.jpg",
    description: "عمل يستكشف العلاقة بين الإنسان والطبيعة",
    techniques: "طين وحجر وخشب",
    details: "هذا العمل يمثل رحلة العودة إلى الجذور والتواصل مع الطبيعة الأم. يجمع العمل بين عناصر من الطبيعة مع التشكيل الحديث. يعكس فكرة أننا جزء من دورة طبيعية أعظم."
}
```

### الفئات المتاحة:
- **sculpture** - نحت
- **mixed** - فن مختلط
- **installation** - تركيبات فنية

---

## 📁 إدارة الصور

### 1. إضافة صورة البروفايل
```
1. ضع صورتك الشخصية في مجلد assets
2. سمّها profile.jpg
3. أو غيّر اسم الملف في index.html:
   <img src="assets/YOUR-FILE-NAME.jpg" alt="سيف طاهر">
```

### 2. إضافة صور الأعمال
```
1. ضع صور أعمالك في مجلد assets/works/
2. استخدم أسماء واضحة: work1.jpg, work2.jpg, إلخ
3. في data.js، استخدم المسار الصحيح:
   image: "assets/works/work1.jpg"
```

### 3. حجم الصور المثالي
- صور الأعمال: **800×600 بكسل أو أكبر**
- صورة البروفايل: **500×500 بكسل**
- صيغ مدعومة: JPG, PNG, WebP

### 4. تحسين الأداء
- استخدم صور بحجم ملائم (لا تزد عن 200KB)
- استخدم أداة ضغط الصور: https://tinypng.com

---

## 🎨 تعديل الألوان

### تغيير الألوان الأساسية

**في ملف `styles.css` في الأعلى:**

```css
:root {
    --primary-red: #E63946;      /* الأحمر الأساسي */
    --primary-yellow: #FFD60A;   /* الأصفر الأساسي */
    --primary-white: #F8F9FA;    /* الأبيض الأساسي */
}
```

### أمثلة ألوان بديلة:

**تصميم حار:**
```css
--primary-red: #D62828;      /* أحمر غامق */
--primary-yellow: #F77F00;   /* برتقالي */
--primary-white: #FFFBF0;    /* كريمي */
```

**تصميم بارد:**
```css
--primary-red: #E63946;      /* أحمر */
--primary-yellow: #457B9D;   /* أزرق */
--primary-white: #F1FAEE;    /* أبيض فاتح */
```

---

## 🚀 نشر الموقع

### استخدام GitHub Pages (مجاني):

1. اذهب إلى إعدادات المستودع
2. انتقل إلى **Settings** > **Pages**
3. اختر **Deploy from a branch**
4. اختر الفرع **main**
5. سيكون الموقع متاحاً على:
   ```
   https://seiftaher2005.github.io/sculptor-portfolio
   ```

### استخدام Netlify:

1. اذهب إلى [netlify.com](https://netlify.com)
2. سجل الدخول بحسابك على GitHub
3. اختر "New site from Git"
4. اختر المستودع
5. اضغط "Deploy"

---

## 💡 نصائح مفيدة

### ✅ الكتابة الفعالة للأعمال
```
الوصف القصير (2-3 جمل):
"عمل يستكشف العلاقة بين الإنسان والطبيعة"

التفاصيل (3-5 فقرات):
"هذا العمل... يمثل... يعكس... يحمل معنى..."
```

### ✅ تنظيم الملفات
```
sculptor-portfolio/
├── index.html
├── styles.css
├── script.js
├── data.js
├── README.md
├── GUIDE.md (هذا الملف)
└── assets/
    ├── profile.jpg
    └── works/
        ├── work1.jpg
        ├── work2.jpg
        └── ...
```

### ✅ اختبار الموقع
- اختبر على هاتفك (اسحب وأفلت)
- اختبر على تابلت
- اختبر على حاسوب
- اختبر جميع الأزرار والروابط

---

## 🔧 وظائف JavaScript المتقدمة

### البحث عن عمل
```javascript
const results = Portfolio.searchWork("keyword");
```

### الحصول على أعمال بفئة معينة
```javascript
const sculptures = Portfolio.getByCategory("sculpture");
```

### الحصول على أعمال من سنة معينة
```javascript
const thisYear = Portfolio.getByYear("2024");
```

### إضافة عمل برمجياً
```javascript
Portfolio.addWork({
    id: 10,
    title: "عنوان جديد",
    category: "sculpture",
    year: "2024",
    image: "assets/works/work10.jpg",
    description: "وصف قصير",
    techniques: "خامات",
    details: "وصف تفصيلي"
});
```

---

## 🐛 حل المشاكل الشائعة

### ❌ الصور لا تظهر
**الحل:**
1. تأكد من وجود مجلد `assets`
2. تأكد من المسار الصحيح في `data.js`
3. تأكد من أن ملف الصورة موجود فعلاً
4. استخدم أداة التطوير (F12) لرؤية الخطأ

### ❌ النص العربي لا يظهر بشكل صحيح
**الحل:**
1. تأكد من أن الملف بصيغة UTF-8
2. في VS Code: `File` > `Save with Encoding` > `UTF-8`

### ❌ النافذة المنفثقة لا تظهر بشكل صحيح
**الحل:**
1. افتح الكونسول (F12)
2. تحقق من الأخطاء
3. تأكد من أن `data.js` محمّل قبل `script.js`

### ❌ الموقع بطيء جداً
**الحل:**
1. ضغّط الصور (استخدم tinypng.com)
2. قلل عدد الأعمال المعروضة
3. استخدم صور بحجم أصغر

---

## 📞 الدعم والمساعدة

إذا واجهت مشاكل:
1. تحقق من القسم "حل المشاكل" أعلاه
2. افتح كونسول المتصفح (F12)
3. ابحث عن الخطأ في الإنترنت
4. اطلب مساعدة من مجتمع الويب

---

## 📚 موارد إضافية

- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [GitHub Pages Guide](https://pages.github.com/)

---

**آخر تحديث**: سبتمبر 2024
**الإصدار**: 1.0.0
