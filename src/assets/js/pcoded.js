"use strict";
var flg = "0";
document.addEventListener("DOMContentLoaded", function () {
    // feather icon start
    feather.replace();
    // feather icon end
    // remove pre-loader start
    setTimeout(function () {
        document.querySelector('.loader-bg').remove();
    }, 400);
    // remove pre-loader end
    if (!document.querySelector('body').classList.contains('pc-horizontal')) {
        addscroller();
    }
    if (document.querySelector('body').classList.contains('pc-horizontal')) {
        if (document.querySelector('.pc-horizontal').classList.contains('navbar-overlay')) {
            addscroller();
        }
    }
    var hamburger = document.querySelector(".hamburger:not(.is-active)");
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            if (document.querySelector(".hamburger").classList.contains('is-active')) {
                document.querySelector(".hamburger").classList.remove('is-active');
            } else {
                document.querySelector(".hamburger").classList.add('is-active');
            }
        });
    }
    // Menu overlay layout start
    var tempoverlaymenu = document.querySelector("#overlay-menu");
    if (tempoverlaymenu) {
        tempoverlaymenu.addEventListener('click', function () {
            menuclick();
            if (document.querySelector(".pc-sidebar").classList.contains('pc-over-menu-active')) {
                rmovermenu();
            } else {
                document.querySelector(".pc-sidebar").classList.add('pc-over-menu-active');
                document.querySelector(".pc-sidebar").insertAdjacentHTML("beforeend", '<div class="pc-menu-overlay"></div>');
                document.querySelector(".pc-menu-overlay").addEventListener('click', function () {
                    rmovermenu();
                    document.querySelector('.hamburger').classList.remove('is-active');
                });
            }
        });
    }
    // Menu overlay layout end
    // vertical-nav-toggle start

    var verticalnavtoggle = document.querySelector("#vertical-nav-toggle");
    if (verticalnavtoggle) {
        verticalnavtoggle.addEventListener('click', function () {
            if (document.body.classList.contains('minimenu')) {
                document.body.classList.remove('minimenu');
                // menuclick();

                // ===============
                var elem = document.querySelectorAll(".pc-navbar li:not(.pc-trigger) .pc-submenu");
                for (var j = 0; j < elem.length; j++) {
                    elem[j].style.display = "none";
                }
                // ===============
            } else {
                document.body.classList.add('minimenu');
                var tc = document.querySelectorAll('.pc-navbar li .pc-submenu');
                for (var t = 0; t < tc.length; t++) {
                    var c = tc[t];
                    c.removeAttribute('style');
                }
                collapseedge();
            }
        });
    }
    // vertical-nav-toggle end
    // Menu collapse click start
    var mobilecollapsever = document.querySelector("#mobile-collapse");
    if (mobilecollapsever) {
        mobilecollapsever.addEventListener('click', function () {
            if (!document.querySelector('body').classList.contains('pc-horizontal')) {
                // menuclick();
            }
            var tempsdbr = document.querySelector(".pc-sidebar");
            if (tempsdbr) {
                if (document.querySelector(".pc-sidebar").classList.contains('mob-sidebar-active')) {
                    rmmenu();
                } else {
                    document.querySelector(".pc-sidebar").classList.add('mob-sidebar-active');
                    document.querySelector(".pc-sidebar").insertAdjacentHTML("beforeend", '<div class="pc-menu-overlay"></div>');
                    document.querySelector(".pc-menu-overlay").addEventListener('click', function () {
                        rmmenu();
                        document.querySelector('.hamburger').classList.remove('is-active');
                    });
                }
            }
        });
    }
    // Menu collapse click end

    // Menu collapse click start
    var mobilecollapse = document.querySelector(".pc-horizontal #mobile-collapse");
    if (mobilecollapse) {
        mobilecollapse.addEventListener('click', function () {
            if (document.querySelector(".topbar").classList.contains('mob-sidebar-active')) {
                rmmenu();
            } else {
                document.querySelector(".topbar").classList.add('mob-sidebar-active');
                document.querySelector(".topbar").insertAdjacentHTML("beforeend", '<div class="pc-menu-overlay"></div>');
                document.querySelector(".pc-menu-overlay").addEventListener('click', function () {
                    rmmenu();
                    document.querySelector('.hamburger').classList.remove('is-active');
                });
            }
        });
    }
    // Menu collapse click end
    // mobile header click start
    document.querySelector("#header-collapse").addEventListener('click', function () {
        if (document.querySelector(".pc-header:not(.pc-mob-header)").classList.contains('mob-header-active')) {
            rmthead();
        } else {
            document.querySelector(".pc-header:not(.pc-mob-header)").classList.add('mob-header-active');
            document.querySelector(".pc-header:not(.pc-mob-header)").insertAdjacentHTML("beforeend", '<div class="pc-md-overlay"></div>');
            document.querySelector(".pc-md-overlay").addEventListener('click', function () {
                rmthead();
            });
        }
    });
    document.querySelector("#headerdrp-collapse").addEventListener('click', function () {
        if (document.querySelector(".pc-header:not(.pc-mob-header) .pc-mob-drp").classList.contains('mob-drp-active')) {
            rmdrp();
        } else {
            document.querySelector(".pc-header:not(.pc-mob-header) .pc-mob-drp").classList.add('mob-drp-active');
            document.querySelector(".pc-header:not(.pc-mob-header)").insertAdjacentHTML("beforeend", '<div class="pc-md-overlay"></div>');
            document.querySelector(".pc-md-overlay").addEventListener('click', function () {
                rmdrp();
            });
        }
    });
    // mobile header click end
    // Horizontal menu click js start
    var topbarlinklist = document.querySelector('.pc-horizontal .topbar .pc-navbar>li>a');
    if (topbarlinklist) {
        topbarlinklist.addEventListener('click', function (e) {
            var targetElement = e.target;
            setTimeout(function () {
                targetElement.parentNodes.children[1].removeAttribute("style");
            }, 1000);
        });
    }
    // Horizontal menu click js end

    function formmat(e) {
        var temp = 0;
        try {
            temp = e.attr('placeholder').length;
        } catch (err) {
            temp = 0;
        }
        if (e.value.length > 0) {
            e.parentNode('.form-group').classList.add("fill");
        } else {
            e.parentNode('.form-group').classList.remove("fill");
        }
    }
    // Material form end
    if (document.querySelector('body').classList.contains('pc-horizontal')) {
        horizontalmobilemenuclick();
    }
    if (document.querySelector('body').classList.contains('minimenu')) {
        collapseedge();
    }
});

function horizontalmobilemenuclick() {
    var vw = window.innerWidth;
    var pcnavlinklist = document.querySelector('.pc-navbar li');
    if (pcnavlinklist) {
        pcnavlinklist.removeEventListener("click", function () {});
    }

    var pclinkclick = document.querySelectorAll(".pc-navbar > li:not(.pc-caption)");
    for (var i = 0; i < pclinkclick.length; i++) {
        pclinkclick[i].addEventListener("click", function (event) {
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.parentNode.children[1].removeAttribute('style');
            if (targetElement.parentNode.classList.contains('pc-trigger')) {
                targetElement.parentNode.classList.remove('pc-trigger');
            } else {
                var tc = document.querySelectorAll("li.pc-trigger");
                for (var t = 0; t < tc.length; t++) {
                    var c = tc[t];
                    c.classList.remove("pc-trigger");
                }
                targetElement.parentNode.classList.add('pc-trigger');
            }
        });
    }
    var pcsublinkclick = document.querySelectorAll(".pc-navbar > li:not(.pc-caption) > .pc-submenu > li");
    for (var n = 0; n < pcsublinkclick.length; n++) {
        pcsublinkclick[n].addEventListener("click", function (event) {
            event.stopPropagation();
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.parentNode.children[1].removeAttribute('style');
            if (targetElement.parentNode.classList.contains('pc-trigger')) {
                targetElement.parentNode.classList.remove('pc-trigger');
            } else {
                var tc = document.querySelectorAll(".pc-submenu li.pc-trigger");
                for (var t = 0; t < tc.length; t++) {
                    var c = tc[t];
                    c.classList.remove("pc-trigger");
                }
                targetElement.parentNode.classList.add('pc-trigger');
            }
        });
    }
    var pcsubchildlinkclick = document.querySelectorAll(".pc-navbar > li:not(.pc-caption) > .pc-submenu >  li > .pc-submenu >  li");
    for (var n = 0; n < pcsubchildlinkclick.length; n++) {
        pcsubchildlinkclick[n].addEventListener("click", function (event) {
            event.stopPropagation();
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.parentNode.children[1].removeAttribute('style');
            if (targetElement.parentNode.classList.contains('pc-trigger')) {
                targetElement.parentNode.classList.remove('pc-trigger');
            } else {
                var tc = document.querySelectorAll(".pc-submenu .pc-submenu li.pc-trigger");
                for (var t = 0; t < tc.length; t++) {
                    var c = tc[t];
                    c.classList.remove("pc-trigger");
                }
                targetElement.parentNode.classList.add('pc-trigger');
            }
        });
    }
}

// Menu click start
function addscroller() {
    rmmini();
    menuclick();
    // Menu scrollbar start
    if (!!document.querySelector('.navbar-content')) {
        var px = new PerfectScrollbar('.navbar-content', {
            wheelSpeed: .5,
            swipeEasing: 0,
            suppressScrollX: !0,
            wheelPropagation: 1,
            minScrollbarLength: 40,
        });
    }
    // Menu scrollbar end
}
// Menu click start
function menuclick() {
    var vw = window.innerWidth;
    var elem = document.querySelectorAll(".pc-navbar li");
    for (var j = 0; j < elem.length; j++) {
        elem[j].removeEventListener("click", function () {});
    }

    if (!document.querySelector("body").classList.contains("minimenu")) {
        var elem = document.querySelectorAll(".pc-navbar li:not(.pc-trigger) .pc-submenu");
        for (var j = 0; j < elem.length; j++) {
            elem[j].style.display = "none";
        }
        var pclinkclick = document.querySelectorAll(".pc-navbar > li:not(.pc-caption)");
        for (var i = 0; i < pclinkclick.length; i++) {
            pclinkclick[i].addEventListener("click", function (event) {
                event.stopPropagation();
                var targetElement = event.target;
                if (targetElement.tagName == "SPAN") {
                    targetElement = targetElement.parentNode;
                }
                if (targetElement.parentNode.classList.contains("pc-trigger")) {
                    targetElement.parentNode.classList.remove("pc-trigger");
                    // targetElement.parentNode.children[1].style.display = "none";
                    slideUp(targetElement.parentNode.children[1], 200);
                } else {
                    var tc = document.querySelectorAll("li.pc-trigger");
                    for (var t = 0; t < tc.length; t++) {
                        var c = tc[t];
                        c.classList.remove("pc-trigger");
                        // c.children[1].style.display = "none";
                        slideUp(c.children[1], 200);
                    }
                    targetElement.parentNode.classList.add("pc-trigger");
                    var tmp = targetElement.children[1];
                    if (tmp) {
                        // targetElement.parentNode.children[1].style.display = "block";
                        slideDown(targetElement.parentNode.children[1], 200);
                    }
                }
            });
        }
        var pcsublinkclick = document.querySelectorAll(".pc-navbar > li:not(.pc-caption) li");
        for (var i = 0; i < pcsublinkclick.length; i++) {
            pcsublinkclick[i].addEventListener("click", function (event) {
                var targetElement = event.target;
                if (targetElement.tagName == "SPAN") {
                    targetElement = targetElement.parentNode;
                }
                event.stopPropagation();
                if (targetElement.parentNode.classList.contains("pc-trigger")) {
                    targetElement.parentNode.classList.remove("pc-trigger");
                    slideUp(targetElement.parentNode.children[1], 200);
                } else {
                    var tc = targetElement.parentNode.parentNode.children;
                    for (var t = 0; t < tc.length; t++) {
                        var c = tc[t];
                        c.classList.remove("pc-trigger");
                        if (c.tagName == "LI") {
                            c = c.children[0];
                        }
                        if (c.parentNode.classList.contains("pc-hasmenu")) {
                            slideUp(c.parentNode.children[1], 200);
                        }
                    }
                    targetElement.parentNode.classList.add("pc-trigger");
                    var tmp = targetElement.parentNode.children[1];
                    if (tmp) {
                        tmp.removeAttribute('style');
                        slideDown(tmp, 200);
                    }
                }
            });
        }
    }
}

function rmdrp() {
    document.querySelector(".pc-header:not(.pc-mob-header) .pc-mob-drp").classList.remove('mob-drp-active');
    document.querySelector(".pc-header:not(.pc-mob-header) .pc-md-overlay").remove();
}

function rmthead() {
    document.querySelector(".pc-header:not(.pc-mob-header)").classList.remove('mob-header-active');
    document.querySelector(".pc-header:not(.pc-mob-header) .pc-md-overlay").remove();
}

function rmmenu() {
    var tempov = document.querySelector(".pc-sidebar");
    if (tempov) {
        document.querySelector(".pc-sidebar").classList.remove('mob-sidebar-active');
    }
    if (document.querySelector(".topbar")) {
        document.querySelector(".topbar").classList.remove('mob-sidebar-active');
    }

    document.querySelector(".pc-sidebar .pc-menu-overlay").remove();
    document.querySelector(".topbar .pc-menu-overlay").remove();
}

function rmovermenu() {
    document.querySelector(".pc-sidebar").classList.remove('pc-over-menu-active');
    if (document.querySelector(".topbar")) {
        document.querySelector(".topbar").classList.remove('mob-sidebar-active');
    }
    document.querySelector(".pc-sidebar .pc-menu-overlay").remove();
    document.querySelector(".topbar .pc-menu-overlay").remove();
}

function rmactive() {
    document.querySelector(".pc-sidebar .pc-navbar li").classList.remove("active");
    document.querySelector(".pc-sidebar .pc-navbar li").classList.remove("pc-trigger");
    document.querySelector(".topbar .dropdown").classList.remove("show");
    document.querySelector(".topbar .dropdown-menu").classList.remove("show");
    document.querySelector(".pc-sidebar .pc-menu-overlay").remove();
    document.querySelector(".topbar .pc-menu-overlay").remove();
}

function rmmini() {
    // var vw = document.querySelector(window)[0].innerWidth;
    var vw = window.innerWidth;
    if (vw <= 1024) {
        if (document.querySelector('body').classList.contains('minimenu')) {
            document.querySelector('body').classList.remove('minimenu');
            flg = "1";
            2
        }
    } else {
        if (vw > 1024) {
            if (flg == "1") {
                document.querySelector('body').classList.add('minimenu');
                flg = "0";
            }
        }
    }
}
var emailmorelink = document.querySelector(".email-more-link");
if (emailmorelink) {
    emailmorelink.addEventListener('click', function (e) {
        document.querySelector(this).children('span').slideToggle(1);
    });
}

// Menu click end
window.addEventListener("resize", function () {
    if (!document.querySelector('body').classList.contains('pc-horizontal')) {
        rmmini();
        // menuclick();
    }
    if (document.querySelector('body').classList.contains('pc-horizontal')) {
        rmactive();
    }
});

window.addEventListener('load', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
});
// active menu item list start
var elem = document.querySelectorAll('.pc-sidebar .pc-navbar a');
for (var l = 0; l < elem.length; l++) {
    var pageUrl = window.location.href.split(/[?#]/)[0];
    if (elem[l].href == pageUrl && elem[l].getAttribute('href') != "") {
        elem[l].parentNode.classList.add("active");
        elem[l].parentNode.parentNode.parentNode.classList.add("active");
        elem[l].parentNode.parentNode.parentNode.classList.add("pc-trigger");
        elem[l].parentNode.parentNode.style.display = 'block';

        elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("active");
        elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("pc-trigger");
        elem[l].parentNode.parentNode.parentNode.parentNode.style.display = 'block';

        // elem[i].parentNode('li').parentNode().parentNode('.sidelink').classList.add("active");
        // elem[i].parentNodes('.pc-tabcontent').classList.add('active');
        if (document.body.classList.contains('tab-layout')) {
            var temp = document.querySelector('.pc-tabcontent.active').getAttribute('data-value');
            document.querySelector('.tab-sidemenu > ul > li').classList.remove('active');
            document.querySelector('.tab-sidemenu > ul > li > a[data-cont="' + temp + '"]').parentNode.classList.add('active');
        }
    }
}

// Menu click for tab Layout start
var tablayclick = document.querySelector('.tab-sidemenu > ul > li');
if (tablayclick) {
    console.log("condition");
    var tc = document.querySelectorAll('.tab-sidemenu > ul > li');
    for (var t = 0; t < tc.length; t++) {
        var c = tc[t];
        c.addEventListener('click', function (event) {
            var targetElement = event.target;
            if (targetElement.tagName == "A") {
                targetElement = targetElement.parentNode;
            }
            if (targetElement.tagName == "I") {
                targetElement = targetElement.parentNode.parentNode;
            }
            var tempcont = targetElement.children[0].getAttribute('data-cont');
            document.querySelector('.navbar-content .pc-tabcontent.active').classList.remove('active');
            document.querySelector('.tab-sidemenu > ul > li.active').classList.remove('active');
            targetElement.classList.add('active');
            console.log(tempcont);
            document.querySelector('.navbar-content .pc-tabcontent[data-value="' + tempcont + '"]').classList.add('active');
        });
    }
}
// Menu click for tab Layout end
// nested Layout start
var pctogglesidemenu = document.querySelector(".pc-toggle-sidemenu");
if (pctogglesidemenu) {
    pctogglesidemenu.addEventListener('click', function () {
        if (!document.querySelector(".pc-toggle-sidemenu").classList.contains('active')) {
            document.querySelector(".pc-sideoverlay").classList.add("active");
            document.querySelector(".page-sidebar").classList.add("active");
            document.querySelector(".pc-toggle-sidemenu").classList.add("active");
        } else {
            document.querySelector(".pc-sideoverlay").classList.remove("active");
            document.querySelector(".page-sidebar").classList.remove("active");
            document.querySelector(".pc-toggle-sidemenu").classList.remove("active");
        }
    });
}
var pcovelayclk = document.querySelector(".pc-sideoverlay, .pc-toggle-sidemenu.active");
if (pcovelayclk) {
    pcovelayclk.addEventListener('click', function () {
        document.querySelector(".pc-sideoverlay").classList.remove("active");
        document.querySelector(".page-sidebar").classList.remove("active");
        document.querySelector(".pc-toggle-sidemenu").classList.remove("active");
    });
}
// nested Layout end

if (document.querySelector('body').classList.contains('layout-topbar')) {
    var tplink = document.querySelectorAll(".pc-header .list-unstyled > .dropdown");
    for (var t = 0; t < tplink.length; t++) {
        var c = tplink[t];
        c.addEventListener("mouseenter", showmenu);
        c.addEventListener("mouseleave", hidemenu);
    }
}

function showmenu(event) {
    event.target.children[1].classList.add("show");
}

function hidemenu(event) {
    event.target.children[1].classList.remove("show");
}
// topbar Layout end
// horizontal submenu edge start
if (document.querySelector('body').classList.contains('pc-horizontal')) {
    var hpx;
    var docH = window.innerHeight;
    var docW = window.innerWidth;

    if (docW > 1024) {
        var topbarhasmenu = document.querySelector(".pc-horizontal .topbar .pc-submenu .pc-hasmenu");
        if (topbarhasmenu) {
            topbarhasmenu.addEventListener("mouseenter", function () {
                var elm = targetElement.children[1];
                var off = elm.getBoundingClientRect();
                var l = off.left;
                var t = off.top;
                var w = off.width;
                var h = off.height;
                var scrw = document.documentElement.scrollTop;

                var edgepos = (l + w <= docW);
                if (!edgepos) {
                    elm.classList.add("edge");
                }
                var isEntirelyVisible = (t + h <= docH);
                if (!isEntirelyVisible) {
                    var th = t - scrw;
                    elm.classList.add("scroll-menu");
                    elm.css('max-height', 'calc(100vh - ' + th + 'px)');
                    hpx = new PerfectScrollbar('.scroll-menu', {
                        wheelSpeed: .5,
                        swipeEasing: 0,
                        suppressScrollX: !0,
                        wheelPropagation: 1,
                        minScrollbarLength: 40,
                    });
                }
            }, function () {
                hpx.destroy();
                document.querySelector('.scroll-menu').removeAttribute('style');
                document.querySelector('.scroll-menu').classList.remove('scroll-menu');
            });
        }
    }
}
// horizontal submenu edge end
// Collapse meni edge start
function collapseedge() {
    var hpx;
    var docH = window.innerHeight;
    var docW = window.innerWidth;
    if (docW > 1024) {
        var minimenuhasmenu = document.querySelector(".minimenu .pc-sidebar .pc-submenu .pc-hasmenu");
        if (minimenuhasmenu) {
            minimenuhasmenu.addEventListener("mouseenter", function (event) {
                var targetElement = event.target;
                var elm = targetElement.children[1];
                var off = elm.getBoundingClientRect();
                var l = off.left;
                var t = off.top;
                var w = off.width;
                var h = off.height;
                var scrw = document.documentElement.scrollTop;

                var isEntirelyVisible = (t + h <= docH);
                if (!isEntirelyVisible) {
                    var th = t - scrw;
                    elm.classList.add("scroll-menu");
                    elm.css('max-height', 'calc(100vh - ' + th + 'px)');
                    hpx = new PerfectScrollbar('.scroll-menu', {
                        wheelSpeed: .5,
                        swipeEasing: 0,
                        suppressScrollX: !0,
                        wheelPropagation: 1,
                        minScrollbarLength: 40,
                    });
                }
            }, function () {
                hpx.destroy();
                document.querySelector('.scroll-menu').removeAttribute('style');
                document.querySelector('.scroll-menu').classList.remove('scroll-menu');
            });
        }
    }
}
// Collapse meni edge end
var tc = document.querySelectorAll(".prod-likes .form-check-input");
for (var t = 0; t < tc.length; t++) {
    var prodlike = tc[t];
    prodlike.addEventListener('change', function (event) {
        if (event.currentTarget.checked) {
            prodlike = event.target;
            // console.log(prodlike.parentNode);
            prodlike.parentNode.insertAdjacentHTML("beforeend", '<div class="pc-like"><div class="like-wrapper"><span><span class="pc-group"><span class="pc-dots"></span><span class="pc-dots"></span><span class="pc-dots"></span><span class="pc-dots"></span></span></span></div></div>');
            prodlike.parentNode.querySelector('.pc-like').classList.add('pc-like-animate');
            setTimeout(function () {
                prodlike.parentNode.querySelector('.pc-like').remove();
            }, 3000);
        } else {
            prodlike = event.target;
            prodlike.parentNode.querySelector('.pc-like').remove();
        }
    });
}

// =======================================================
// =======================================================
let slideUp = (target, duration = 0) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
}
let slideDown = (target, duration = 0) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
var slideToggle = (target, duration = 0) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}
// =======================================================
// =======================================================