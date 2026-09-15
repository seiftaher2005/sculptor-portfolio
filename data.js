// بيانات الأعمال - سهل التعديل
const portfolioData = [
    {
        id: 1,
        title: "الإنسان والطين",
        category: "sculpture",
        year: "2024",
        image: "assets/works/work1.jpg",
        description: "تجسيد العلاقة بين الإنسان والمادة الخام",
        techniques: "طين - النحت اليدوي",
        details: "عمل يستكشف كيفية تشكيل الإنسان للمادة والطريقة التي تشكل به المادة الإنسان. يعكس العمل حوار مستمر بين الفنان والخامة، حيث يظهر الجسم في حالة من الحركة والتفاعل مع الطين. العمل يحمل معنى عميق حول الصراع والانسجام."
    },
    {
        id: 2,
        title: "صمت",
        category: "sculpture",
        year: "2024",
        image: "assets/works/work2.jpg",
        description: "استكشاف الصمت والفراغ الداخلي",
        techniques: "جبس - النحت الحديث",
        details: "تمثال مجرد يعبر عن حالة الصمت والتأمل. يتميز العمل بأشكال بسيطة وقوية، حيث يتم التركيز على الخطوط والظلال لخلق إحساس بالهدوء والسلام. العمل دعوة للمشاهد ليجد نقطة التواصل الشخصية معه."
    },
    {
        id: 3,
        title: "الحركة والتطور",
        category: "mixed",
        year: "2023",
        image: "assets/works/work3.jpg",
        description: "فن مختلط يجمع بين النحت والتركيب",
        techniques: "خشب وجبس ومعادن",
        details: "عمل تجريبي يجمع بين خامات متعددة ليعبر عن الحركة المستمرة والتطور الدائم. يتضمن العمل عناصر ديناميكية تحث المشاهد على استكشاف العمل من زوايا مختلفة. كل زاوية تكشف معنى جديد وتجربة بصرية مختلفة."
    },
    {
        id: 4,
        title: "الجذور",
        category: "installation",
        year: "2023",
        image: "assets/works/work4.jpg",
        description: "تركيب فني يعكس الجذور والتراث",
        techniques: "جبس ورمل وخشب",
        details: "تركيب بيئي يستكشف العلاقة بين الإنسان والتراث والجذور. يعكس العمل الجمال في البساطة والقوة في الأصالة. يدعو المشاهد للتأمل في هويته ومصادره الثقافية."
    },
    {
        id: 5,
        title: "وجوه بلا ملامح",
        category: "sculpture",
        year: "2023",
        image: "assets/works/work5.jpg",
        description: "استكشاف الهوية والتنوع الإنساني",
        techniques: "طين - النحت التجريدي",
        details: "مجموعة من الرؤوس المجردة التي تمثل تنوع الهويات الإنسانية وتعقيد الشخصية الإنسانية. عدم وجود ملامح محددة يترك مساحة للمشاهد ليرى فيها ما يشاء. يعكس العمل الفكرة بأن الهوية أعمق من الشكل الخارجي."
    },
    {
        id: 6,
        title: "التوازن",
        category: "sculpture",
        year: "2022",
        image: "assets/works/work6.jpg",
        description: "البحث عن التوازن في الحياة والفن",
        techniques: "خشب وحجر",
        details: "عمل يعكس فلسفة التوازن بين العناصر المختلفة. يجمع العمل بين الخشب الدافئ والحجر البارد، بين الأشكال الهندسية والعضوية. يمثل العمل رحلة البحث عن التناسق في عالم معقد."
    },
    {
        id: 7,
        title: "انفجار الألوان",
        category: "mixed",
        year: "2022",
        image: "assets/works/work7.jpg",
        description: "فن مختلط يجمع بين الألوان والأشكال",
        techniques: "دهان وجبس وألياف",
        details: "عمل طاقة وحيوية، يعبر عن الفرح والانطلاق. استخدام الألوان الجريئة مع الأشكال الديناميكية ينتج عمل يثير الحواس. العمل دعوة للاحتفال بالحياة والإبداع."
    },
    {
        id: 8,
        title: "الوجود والعدم",
        category: "installation",
        year: "2022",
        image: "assets/works/work8.jpg",
        description: "استكشاف الفراغ والملء والوجود",
        techniques: "تركيب بيئي - جبس وفراغ",
        details: "تركيب يستكشف الثنائيات الفلسفية: الوجود والعدم، الملء والفراغ، الضوء والظل. يدعو المشاهد للتأمل في طبيعة الوجود والمعنى. العمل تجربة بصرية واسعة."
    }
];

// دالة لتحميل الأعمال
function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = '';

    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-item-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/placeholder.jpg'">
                <div class="portfolio-overlay">
                    <div class="portfolio-overlay-text">اضغط لعرض التفاصيل</div>
                </div>
            </div>
            <div class="portfolio-item-content">
                <h3 class="portfolio-item-title">${item.title}</h3>
                <span class="portfolio-item-category">${getCategoryName(item.category)}</span>
                <p class="portfolio-item-description">${item.description}</p>
            </div>
        `;

        portfolioItem.addEventListener('click', () => openModal(item));
        portfolioGrid.appendChild(portfolioItem);
    });
}

// تحويل اسم الفئة
function getCategoryName(category) {
    const names = {
        'sculpture': 'نحت',
        'mixed': 'فن مختلط',
        'installation': 'تركيبات'
    };
    return names[category] || category;
}

// فتح النافذة المنفثقة
function openModal(item) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalImage').onerror = function() { this.src = 'assets/placeholder.jpg'; };
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalCategory').textContent = getCategoryName(item.category);
    document.getElementById('modalYear').textContent = `السنة: ${item.year}`;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalTechniques').innerHTML = `<strong>الخامات والتقنيات:</strong> ${item.techniques}`;
    document.getElementById('modalDetails').textContent = item.details;
    modal.style.display = 'block';
}

// إغلاق النافذة المنفثقة
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// تصفية الأعمال
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 10);
        } else {
            item.style.display = 'none';
        }
    });
}
