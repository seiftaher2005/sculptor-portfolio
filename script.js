// تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الأعمال
    loadPortfolio();

    // معالج أزرار التصفية
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة الفئة النشطة من جميع الأزرار
            filterButtons.forEach(b => b.classList.remove('active'));
            // إضافة الفئة النشطة للزر المختار
            this.classList.add('active');
            // تصفية الأعمال
            filterPortfolio(this.getAttribute('data-filter'));
        });
    });

    // معالج إغلاق النافذة المنفثقة
    const closeBtn = document.querySelector('.close');
    const modal = document.getElementById('modal');

    closeBtn.addEventListener('click', closeModal);

    // إغلاق النافذة عند النقر خارجها
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // إغلاق النافذة بزر Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // تأثيرات التمرير
    addScrollEffects();
});

// إضافة تأثيرات التمرير
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // تطبيق المراقب على عناصر معينة
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// تحديث معلومات التواصل (يمكنك تعديلها)
function updateContactInfo() {
    // يمكنك تحديث المعلومات هنا
    console.log('Contact info can be updated here');
}

// دالة للطباعة
function printPortfolioItem(itemTitle) {
    const printWindow = window.open('', '', 'width=800,height=600');
    const item = portfolioData.find(p => p.title === itemTitle);
    
    if (item) {
        printWindow.document.write(`
            <html>
                <head>
                    <title>${item.title}</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        h1 { color: #E63946; }
                        img { max-width: 100%; }
                    </style>
                </head>
                <body>
                    <h1>${item.title}</h1>
                    <p><strong>الفئة:</strong> ${getCategoryName(item.category)}</p>
                    <p><strong>السنة:</strong> ${item.year}</p>
                    <p><strong>الوصف:</strong> ${item.description}</p>
                    <p><strong>الخامات والتقنيات:</strong> ${item.techniques}</p>
                    <p><strong>التفاصيل:</strong> ${item.details}</p>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

// وظائف مساعدة إضافية
const Portfolio = {
    // إضافة عمل جديد
    addWork: function(work) {
        portfolioData.push(work);
        loadPortfolio();
    },

    // حذف عمل
    removeWork: function(id) {
        const index = portfolioData.findIndex(p => p.id === id);
        if (index > -1) {
            portfolioData.splice(index, 1);
            loadPortfolio();
        }
    },

    // البحث عن عمل
    searchWork: function(query) {
        return portfolioData.filter(item => 
            item.title.includes(query) || 
            item.description.includes(query) ||
            item.details.includes(query)
        );
    },

    // الحصول على الأعمال حسب الفئة
    getByCategory: function(category) {
        return portfolioData.filter(item => item.category === category);
    },

    // الحصول على الأعمال حسب السنة
    getByYear: function(year) {
        return portfolioData.filter(item => item.year === year);
    }
};

// تصدير للاستخدام الخارجي
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Portfolio;
}
