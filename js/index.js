// ^ Write your JavaScript code here
var toggle = document.getElementById('theme-toggle-button');
var hero = document.querySelector('.hero');
var all = document.querySelectorAll('.portfolio-item');
var web = document.querySelectorAll('.web')
var app = document.querySelectorAll('.app')
var design = document.querySelectorAll('.design')
var ecommerce = document.querySelectorAll('.ecommerce');
var allBtn = document.querySelector('.allBtn');
var webBtn = document.querySelector('.webBtn');
var appBtn = document.querySelector('.appBtn');
var designBtn = document.querySelector('.designBtn');
var eBtn = document.querySelector('.eBtn');
var srrollToTop = document.getElementById("scroll-to-top");
var heroSection = document.getElementById("hero-section");
var navLinks = document.querySelectorAll(".nav-link");
var sections = document.querySelectorAll("section");
var closeSettings = document.getElementById("close-settings");
var allSidebar = document.getElementById("allSidebar");
var gear = document.getElementById("settings-toggle");
var settingsSidebar = document.getElementById("settings-sidebar")
var colorsGrid = document.getElementById("theme-colors-grid");
var scrollerContainer = document.getElementById("testimonials-carousel");
var cards = document.querySelectorAll(".testimonial-card");
var nextBtn = document.getElementById("next-testimonial");
var prevBtn = document.getElementById("prev-testimonial");
var indicators = document.querySelectorAll(".carousel-indicator");
var totalCards = cards.length;
var currentIndex = 0;
var reset = document.getElementById("reset-settings");
var primaryElements = document.querySelectorAll(".text-primary");
document.addEventListener("DOMContentLoaded", function () {
    function setActiveLink(id) {
        navLinks.forEach(function (link) {
            if (link.getAttribute("href") === "#" + id) {
                link.classList.add("text-primary");
                link.classList.add("font-bold");
                link.classList.remove("text-slate-600");
                link.classList.remove("dark:text-slate-300");
            } else {
                link.classList.remove("text-primary");
                link.classList.remove("font-bold");
                link.classList.add("text-slate-600");
                link.classList.add("dark:text-slate-300");
            }
        });
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, {
        rootMargin: "-40% 0px -55% 0px"
    });
    sections.forEach(function (section) {
        observer.observe(section);
    });
});
toggle.addEventListener('click', function(){
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.toggle('dark');
    }
    else{
        document.documentElement.classList.toggle('dark');
        
    }
});
function activeButton(button) {
    var buttons = [allBtn, webBtn, appBtn, designBtn, eBtn];
    buttons.forEach(function(btn) {
        btn.classList.remove(
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white"
        );
        btn.classList.add(
            "bg-white",
            "dark:bg-slate-800",
            "text-slate-600",
            "dark:text-slate-300",
            "border",
            "border-slate-300",
            "dark:border-slate-700"
        );
    });
    button.classList.remove(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700"
    );
    button.classList.add(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white"
    );
};
allBtn.addEventListener('click', function () {
    activeButton(allBtn);
    all.forEach(function (item) {
        item.classList.remove('hidden');
    });

});
webBtn.addEventListener('click', function () {
    activeButton(webBtn);
    all.forEach(function (item) {
        item.classList.add('hidden');
    });
    web.forEach(function (item) {
        item.classList.remove('hidden');
    });

});
appBtn.addEventListener('click', function () {
    activeButton(appBtn);
    all.forEach(function (item) {
        item.classList.add('hidden');
    });
    app.forEach(function (item) {
        item.classList.remove('hidden');
    });

});
designBtn.addEventListener('click', function () {
    activeButton(designBtn);
    all.forEach(function (item) {
        item.classList.add('hidden');
    });
    design.forEach(function (item) {
        item.classList.remove('hidden');
    });

});
eBtn.addEventListener('click', function () {
    activeButton(eBtn);
    all.forEach(function (item) {
        item.classList.add('hidden');
    });
    ecommerce.forEach(function (item) {
        item.classList.remove('hidden');
    });

});
document.addEventListener("DOMContentLoaded", function () {

    function getVisibleCount() {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 640) return 2;  // sm
    return 1;
    }

    var visibleCount = getVisibleCount();
    var maxIndex = Math.max(0, totalCards - visibleCount);

    function updateSlider() {
    var cardWidth = cards[0].getBoundingClientRect().width;
    var style = window.getComputedStyle(cards[0]);
    var marginRight = parseFloat(style.marginRight) || 0;
    var totalCardWidth = cardWidth + marginRight;

      var offset = currentIndex * totalCardWidth;
    scrollerContainer.style.transform = "translateX(" + offset + "px)";

    updateIndicators();
    // updateButtonsState();
    }
    function goNext() {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
    }

    function goPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex;
    }
    updateSlider();
    }

    function goToIndex(index) {
    currentIndex = Math.min(Math.max(index, 0), maxIndex);
    updateSlider();
    }

    function updateIndicators() {
    indicators.forEach(function (dot, i) {
        var isActive = i === currentIndex;
        dot.classList.toggle("bg-accent", isActive);
        dot.classList.toggle("bg-slate-400", !isActive);
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    }

    if (nextBtn) {
    nextBtn.addEventListener("click", goNext);
    }
    if (prevBtn) {
    prevBtn.addEventListener("click", goPrev);
    }

    indicators.forEach(function (dot) {
    dot.addEventListener("click", function () {
        var index = parseInt(dot.getAttribute("data-index"), 10);
        goToIndex(index);
    });
    });

    window.addEventListener("resize", function () {
        visibleCount = getVisibleCount();
        maxIndex = Math.max(0, totalCards - visibleCount);
        currentIndex = Math.min(currentIndex, maxIndex);
        updateSlider();
    });
    updateSlider();
});
srrollToTop.addEventListener("click", function(){
heroSection.scrollIntoView({
behavior: "smooth"
});
});
gear.addEventListener("click", function(){
    settingsSidebar.classList.remove("translate-x-full");
    settingsSidebar.classList.add("translate-x-0");
})
closeSettings.addEventListener("click", function(){
    settingsSidebar.classList.add("translate-x-full");
    settingsSidebar.classList.remove("translate-x-0");
});

var themeColors = [
    "#10B981",
    "#3B82F6",
    "#8B5CF6",
    "#F59E0B"
];
var originalPrimaryColors = [];
primaryElements.forEach(function(element) {
    originalPrimaryColors.push(element.style.color);
});
themeColors.forEach(function(color){
    var colorBox = document.createElement("div")
    colorBox.style.background= color;
    colorBox.className =  "w-12 h-12 rounded-lg cursor-pointer";
    colorsGrid.appendChild(colorBox);
    colorBox.addEventListener("click",function(){
        primaryElements.forEach(function(element) {
            element.style.color = color;
        });
    })
});
reset.addEventListener("click", function() {
    settingsSidebar.classList.add("translate-x-full");
    settingsSidebar.classList.remove("translate-x-0");

    primaryElements.forEach(function(element, index) {
        element.style.color = originalPrimaryColors[index];
    });

});

var fontOptions = document.querySelectorAll(".font-option");

fontOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        // 1- نشيل active من كل الاختيارات
        fontOptions.forEach(function (item) {

            item.classList.remove("active");
            item.setAttribute("aria-checked", "false");

            var text = item.querySelector("span:first-child");

            text.classList.remove("font-bold");
            text.classList.add("font-normal");
        });

        // 2- نخلي الاختيار الحالي active
        option.classList.add("active");
        option.setAttribute("aria-checked", "true");

        var activeText = option.querySelector("span:first-child");

        activeText.classList.remove("font-normal");
        activeText.classList.add("font-bold");


        // 3- نجيب اسم الخط
        var selectedFont = option.dataset.font;


        // 4- نغير خط الموقع كله
        if (selectedFont === "alexandria") {

            document.body.style.fontFamily = "'Alexandria', sans-serif";

        } else if (selectedFont === "tajawal") {

            document.body.style.fontFamily = "'Tajawal', sans-serif";

        } else if (selectedFont === "cairo") {

            document.body.style.fontFamily = "'Cairo', sans-serif";
        }

    });

});