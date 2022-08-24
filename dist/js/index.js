/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/db.json */ \"./src/data/db.json\");\n/* harmony import */ var _module_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/modal */ \"./src/js/module/modal.js\");\n/* harmony import */ var _module_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/tabs */ \"./src/js/module/tabs.js\");\n/* harmony import */ var _module_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/forms */ \"./src/js/module/forms.js\");\n/* harmony import */ var _module_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/slider */ \"./src/js/module/slider.js\");\n/* harmony import */ var _module_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/calculator */ \"./src/js/module/calculator.js\");\n/* harmony import */ var _module_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/menu */ \"./src/js/module/menu.js\");\n/* harmony import */ var _module_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/timer */ \"./src/js/module/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst server = 'http://localhost:3000/';\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    (0,_module_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_module_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_module_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(server);\r\n    (0,_module_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(server);\r\n    (0,_module_calculator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    (0,_module_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(server);\r\n    (0,_module_timer__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_data_db_json__WEBPACK_IMPORTED_MODULE_0__.deadline);\r\n});\n\n//# sourceURL=webpack://Food/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/calculator.js":
/*!*************************************!*\
  !*** ./src/js/module/calculator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calculator)\n/* harmony export */ });\nfunction calculator() {\r\n    const result = document.querySelector('.calculating__result span');\r\n    let calcData = {\r\n        gender: 1, \r\n        ratio: 1.375\r\n    };\r\n\r\n    calcCal();\r\n    getStaticInfo('#gender', 'gender', calcData.gender, 1,'calculating__choose-item_active');\r\n    getStaticInfo('#ratio', 'ratio', calcData.ratio, 1.375, 'calculating__choose-item_active');\r\n    getDynamicInfo('#height', 250);\r\n    getDynamicInfo('#weight', 300);\r\n    getDynamicInfo('#age', 125);\r\n\r\n    function calcCal() {\r\n        if (!calcData.gender || !calcData.height || !calcData.weight || !calcData.age || !calcData.ratio){\r\n            result.textContent = '____';\r\n            console.log(calcData);\r\n            return;\r\n        } else if (calcData.gender == 0) {\r\n            result.textContent = Math.round((447.593 + (9.247 * calcData.weight) + (3.098 * calcData.height) - (4.330 * calcData.age)) * calcData.ratio);\r\n        } else {\r\n            result.textContent = Math.round((88.362 + (13.397 * calcData.weight) + (4.799 * calcData.height) - (5.677 * calcData.age)) * calcData.ratio);\r\n        }\r\n    }\r\n\r\n    function getStaticInfo(parent, attr, attrValue, defaultValue, active) {\r\n        saveCalcData(attr, attrValue, defaultValue);\r\n        document.querySelector(parent).addEventListener('click', (e) => {\r\n            if (e.target.getAttribute(`data-${attr}`)) {\r\n                switch(attr) {\r\n                    case 'gender':\r\n                        calcData.gender = +e.target.getAttribute(`data-${attr}`);\r\n                        break;\r\n                    case 'ratio':\r\n                        calcData.ratio = +e.target.getAttribute(`data-${attr}`);\r\n                        break;\r\n                }\r\n                clearActive();\r\n                e.target.classList.add(active);\r\n                localStorage.setItem(attr, attrValue);\r\n            } else {\r\n                return;\r\n            }\r\n            calcCal();\r\n\r\n            function clearActive () { \r\n                document.querySelectorAll(`${parent} div`).forEach(e => {\r\n                e.classList.remove(active);\r\n                }); \r\n            }\r\n        });\r\n\r\n        function saveCalcData (attr, attrValue, defaultValue) {\r\n            if (localStorage.getItem(attr)) {\r\n                attrValue = localStorage.getItem(attr);\r\n                console.log(attr, attrValue);\r\n                addActive(attrValue);\r\n            } else {\r\n                localStorage.setItem(attr, defaultValue);\r\n                console.log(attr, defaultValue);\r\n                addActive(defaultValue);\r\n            }\r\n            function addActive (value) {\r\n                document.querySelector(`[data-${attr}=\"${value}\"]`)\r\n                    .classList.add('calculating__choose-item_active');\r\n            }\r\n        }\r\n    \r\n    }\r\n\r\n    function getDynamicInfo(selector, max) {\r\n        const input = document.querySelector(selector);\r\n        input.addEventListener('input', () => {\r\n            if (input.value.match(/\\D/g) || input.value > max) {\r\n                input.style.border = '1px solid red';\r\n            } else {\r\n                input.style.border = 'none';\r\n                switch(selector) {\r\n                    case \"#height\":\r\n                        calcData.height = +input.value;\r\n                        break;\r\n                    case \"#weight\":\r\n                        calcData.weight = +input.value;\r\n                        break;\r\n                    case \"#age\":\r\n                        calcData.age = +input.value;\r\n                        break;\r\n                }\r\n                calcCal();\r\n            }\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://Food/./src/js/module/calculator.js?");

/***/ }),

/***/ "./src/js/module/forms.js":
/*!********************************!*\
  !*** ./src/js/module/forms.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ forms)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/js/module/modal.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ \"./src/js/module/services.js\");\n\r\n\r\n\r\nfunction forms(server) {\r\n    const forms = document.querySelectorAll('form');\r\n    const message = {\r\n        loading: 'img/icons.svg#spinner',\r\n        success: 'Thank you! We will contact you as soon as possible.',\r\n        failure: 'Something goes wrong'\r\n    };\r\n\r\n    forms.forEach(item => {\r\n        bindPostData(item); \r\n    });\r\n\r\n    function bindPostData(form) {\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n\r\n            let statusMessage = document.createElement('img');\r\n            statusMessage.src = message.loading;\r\n            statusMessage.style.cssText = `\r\n                display: block;\r\n                margin: 0 auto;\r\n            `;\r\n            form.insertAdjacentElement('afterend', statusMessage);\r\n\r\n            const formData = new FormData(form);\r\n            const json = JSON.stringify(Object.fromEntries(formData.entries()));\r\n            (0,_services__WEBPACK_IMPORTED_MODULE_1__.postData)(`${server}requests`, json)\r\n            .then(response => {\r\n                console.log(response);\r\n                (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showThanksModal)(message.success);\r\n                statusMessage.remove();\r\n            }).catch(() => (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showThanksModal)(message.failure))\r\n            .finally(() => form.reset());\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://Food/./src/js/module/forms.js?");

/***/ }),

/***/ "./src/js/module/menu.js":
/*!*******************************!*\
  !*** ./src/js/module/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/js/module/services.js\");\n\r\n\r\nfunction menu(server) {\r\n    class MenuCard {\r\n        constructor (src, alt, title, descr, price, parent, ...classes) {\r\n            this.src = src;\r\n            this.alt = alt;\r\n            this.title = title;\r\n            this.descr = descr;\r\n            this.price = price;\r\n            this.classes = classes;\r\n            this.parent = document.querySelector(parent);\r\n        }\r\n        render() {\r\n            const element = document.createElement('div');\r\n            if (this.classes.length === 0) {\r\n                this.classes = 'menu__item';\r\n                element.classList.add(this.classes);\r\n            } else {\r\n                this.classes.forEach(className => element.classList.add(className));\r\n            }\r\n            element.innerHTML = `\r\n                <img src=${this.src} alt=${this.alt}>\r\n                <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n                <div class=\"menu__item-descr\">${this.descr}</div>\r\n                <div class=\"menu__item-divider\"></div>\r\n                <div class=\"menu__item-price\">\r\n                    <div class=\"menu__item-cost\">Price:</div>\r\n                    <div class=\"menu__item-total\"><span>${this.price}</span> USD per day</div>\r\n                </div>\r\n            `;\r\n            this.parent.append(element);\r\n        }\r\n    }\r\n\r\n    (0,_services__WEBPACK_IMPORTED_MODULE_0__.getResource)(`${server}menu`)\r\n        .then(data => {\r\n            data.forEach(({img, altimg, title, descr, price}) => {\r\n                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();\r\n            });\r\n        });\r\n}\n\n//# sourceURL=webpack://Food/./src/js/module/menu.js?");

/***/ }),

/***/ "./src/js/module/modal.js":
/*!********************************!*\
  !*** ./src/js/module/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modals),\n/* harmony export */   \"showThanksModal\": () => (/* binding */ showThanksModal)\n/* harmony export */ });\nconst dataModal = document.querySelectorAll('[data-modal]');\r\nconst modal = document.querySelector('.modal');\r\nconst openModalTimer = setTimeout(openModalWindow, 50000);\r\n    window.addEventListener('scroll', showModalByScroll);\r\n\r\nfunction openModalWindow () {\r\n    modal.style.display = 'block';\r\n    document.body.style.overflow = 'hidden';\r\n    clearInterval(openModalTimer);\r\n}\r\nfunction closeModalWindow () {\r\n    modal.style.display = 'none';\r\n    document.body.style.overflow = '';\r\n}\r\nfunction showModalByScroll () {\r\n    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {\r\n        openModalWindow();\r\n        window.removeEventListener('scroll', showModalByScroll);\r\n    }\r\n}\r\nfunction showThanksModal(message) {\r\n    const prevModalDialog = document.querySelector('.modal__dialog');\r\n    prevModalDialog.style.display = 'none';\r\n    openModalWindow();\r\n\r\n    const thanksModal = document.createElement('div');\r\n    thanksModal.classList.add('modal__dialog');\r\n    thanksModal.innerHTML = `\r\n        <div class=\"modal__content\">\r\n            <div data-close class=\"modal__close\">&times;</div>\r\n            <div class=\"modal__title\">${message}</div>\r\n        </div>\r\n    `;\r\n    document.querySelector('.modal').append(thanksModal);\r\n    setTimeout(() => {\r\n        thanksModal.remove();\r\n        prevModalDialog.style.display = 'block';\r\n        closeModalWindow();\r\n    }, 4000);\r\n}\r\nfunction modals() {\r\n    dataModal.forEach(item => {\r\n        item.addEventListener('click', openModalWindow);\r\n    });\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal || e.target.getAttribute('data-close') == '') {closeModalWindow();}\r\n    });\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code === 'Escape' && modal.style.display === 'block') {closeModalWindow();}\r\n    });\r\n    \r\n}\r\n    \r\n\r\n\n\n//# sourceURL=webpack://Food/./src/js/module/modal.js?");

/***/ }),

/***/ "./src/js/module/services.js":
/*!***********************************!*\
  !*** ./src/js/module/services.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getResource\": () => (/* binding */ getResource),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nasync function getResource(url) {\r\n    let result = await fetch(url);\r\n    if (!result.ok) {\r\n        throw new Error(`Could not fetch ${url}. Status ${result.status}`);\r\n    }\r\n    return await result.json();\r\n}\r\n\r\nconst postData = async (url, data) => {\r\n    const result = await fetch(url, {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: data\r\n    });\r\n    return await result.json();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://Food/./src/js/module/services.js?");

/***/ }),

/***/ "./src/js/module/slider.js":
/*!*********************************!*\
  !*** ./src/js/module/slider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slider)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/js/module/services.js\");\n\r\n\r\nfunction slider(server) {\r\n    const sliderBox = document.querySelector('.offer__slider'),\r\n        slidesWrapper = document.querySelector('.offer__slider-wrapper'),\r\n        slidesField = document.querySelector('.offer__slider-inner'),\r\n        width = window.getComputedStyle(slidesWrapper).width,\r\n        prev = document.querySelector('.offer__slider-prev'),\r\n        next = document.querySelector('.offer__slider-next'),\r\n        current = document.querySelector('#current'),\r\n        total = document.querySelector('#total'),\r\n        dotsList = [];\r\n    let slides,\r\n        offset = 0,\r\n        slideIndex = 1;\r\n\r\n    sliderCall(server);\r\n\r\n    function toNumber(str) { return +str.replace(/\\D/g, ''); }\r\n    function dotMark() { dotsList[slideIndex - 1].style.opacity = 1; }\r\n    function slidesFieldTransform() { slidesField.style.transform = `translateX(-${offset}px)`; }\r\n    function addZero() {\r\n        if (slides.length < 10) {\r\n            current.textContent = `0${slideIndex}`;\r\n        } else {\r\n            current.textContent = slideIndex;\r\n        }\r\n    }\r\n\r\n    async function sliderCall(server) {\r\n        await (0,_services__WEBPACK_IMPORTED_MODULE_0__.getResource)(`${server}slides`)\r\n        .then(data => {\r\n            data.forEach(({img, altimg}) => {\r\n                const slideItem = document.createElement('div');\r\n                slideItem.classList.add('offer__slide', 'active');\r\n                slideItem.innerHTML = `<img src=\"${img}\" alt=\"${altimg}\">`;\r\n                document.querySelector('.offer__slider-inner').append(slideItem);\r\n            });\r\n        });\r\n        slides = document.querySelectorAll('.offer__slide');\r\n\r\n        sliderConstruct();\r\n        dots();\r\n        next.addEventListener('click', forward);\r\n        prev.addEventListener('click', previous);\r\n        slidesField.addEventListener('onScroll', forward);\r\n        clickOnDots();\r\n    }\r\n\r\n    function sliderConstruct() {\r\n        if (slides.length < 10) {\r\n            total.textContent = `0${slides.length}`;\r\n            current.textContent =  `0${slideIndex}`;\r\n        } else {\r\n            total.textContent = slides.length;\r\n            current.textContent =  slideIndex;\r\n        }\r\n        slidesField.style.cssText = `\r\n            width: ${100 * slides.length}%;\r\n            display: flex;\r\n            transition: 0.6s all;\r\n            `;\r\n        slidesWrapper.style.overflow = 'hidden';\r\n        slides.forEach(slide => slide.style.width = width);\r\n    }\r\n\r\n    function forward() {\r\n        \r\n        if (offset == toNumber(width) * (slides.length -1)) { \r\n            offset = 0; \r\n        } else {\r\n            offset += toNumber(width);\r\n        }\r\n        slidesFieldTransform();\r\n\r\n        if (slideIndex == slides.length) {\r\n            slideIndex = 1;\r\n        } else {\r\n            slideIndex++;\r\n        }\r\n        addZero(); \r\n\r\n        if (slideIndex == 1) {\r\n            dotsList[slides.length - 1].style.opacity = 0.6;\r\n        } else {\r\n            dotsList[slideIndex - 2].style.opacity = 0.6;\r\n        }\r\n        dotMark();\r\n    }\r\n\r\n    function previous() {\r\n        \r\n        if (offset == 0) { \r\n            offset = toNumber(width) * (slides.length -1); \r\n        } else {\r\n            offset -= toNumber(width);\r\n        }\r\n        slidesFieldTransform();\r\n\r\n        if (slideIndex == 1) {\r\n            slideIndex = slides.length;\r\n        } else {\r\n            slideIndex--;\r\n        }\r\n        addZero(); \r\n\r\n        if (slideIndex == slides.length) {\r\n            dotsList[0].style.opacity = 0.6;\r\n        } else {\r\n            dotsList[slideIndex].style.opacity = 0.6;\r\n        }\r\n        dotMark();\r\n    }\r\n\r\n    function dots() {\r\n        sliderBox.style.position = 'relative';\r\n        const dotsWrapper = document.createElement('ol');\r\n        dotsWrapper.classList.add('carousel-indicators');\r\n        slidesWrapper.append(dotsWrapper);\r\n        \r\n        \r\n        slides.forEach((element, i) => {\r\n            const dot = document.createElement('li');\r\n            dot.setAttribute('data-slide-to', i + 1);\r\n            dot.classList.add('dot');\r\n            if (i == 0) { dot.style.opacity = 1; }\r\n            dotsWrapper.append(dot);\r\n            dotsList.push(dot);\r\n        });\r\n    }\r\n    function clickOnDots() {\r\n        dotsList.forEach(dot => {\r\n            dot.addEventListener('click', e => {\r\n                const slideTo = e.target.getAttribute('data-slide-to');\r\n                slideIndex = slideTo;\r\n                offset = toNumber(width) * (slideTo - 1); \r\n                slidesFieldTransform();\r\n                addZero();\r\n                dotsList.forEach(dot => dot.style.opacity = 0.6);\r\n                dotMark();\r\n            });\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://Food/./src/js/module/slider.js?");

/***/ }),

/***/ "./src/js/module/tabs.js":
/*!*******************************!*\
  !*** ./src/js/module/tabs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabs)\n/* harmony export */ });\nfunction tabs() {\r\n    const   tabs = document.querySelectorAll('.tabheader__item'),\r\n            tabsContent = document.querySelectorAll('.tabcontent'),\r\n            tabsParent = document.querySelector('.tabheader__items');\r\n\r\n    function hideTabsContent () {\r\n        tabsContent.forEach(item => {\r\n            item.classList.remove('tabcontent_active');\r\n        });\r\n        tabs.forEach(item => {\r\n            item.classList.remove('tabheader__item_active');\r\n        });\r\n    }\r\n    function showTabsContent (item = 0) {\r\n        tabsContent[item].classList.add('tabcontent_active');\r\n        tabs[item].classList.add('tabheader__item_active');\r\n    }\r\n\r\n    hideTabsContent();\r\n    showTabsContent();\r\n\r\n    tabsParent.addEventListener('click', (event) => {\r\n        const target = event.target;\r\n        if (target && target.classList.contains('tabheader__item')) {\r\n            tabs.forEach((item, i) => {\r\n                if (target == item) {\r\n                    hideTabsContent();\r\n                    showTabsContent(i);\r\n                }\r\n            });\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://Food/./src/js/module/tabs.js?");

/***/ }),

/***/ "./src/js/module/timer.js":
/*!********************************!*\
  !*** ./src/js/module/timer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ timer)\n/* harmony export */ });\nfunction timer(deadline) {\r\n    countDown('.timer', deadline);\r\n\r\n    function countDown (id, endtime) {\r\n        const clock = document.querySelector(id);\r\n        const daysSpan = clock.querySelector('#days');\r\n        const hoursSpan = clock.querySelector('#hours');\r\n        const minutesSpan = clock.querySelector('#minutes');\r\n        const secondsSpan = clock.querySelector('#seconds');\r\n        const countDownDate = Date.parse(endtime);\r\n        const t = setInterval(function() {\r\n            const now = parseInt((new Date().getTime()));\r\n            const distance = countDownDate - now;\r\n            const days = Math.floor(distance / (1000 * 60 * 60 * 24));\r\n            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r\n            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\r\n            const seconds = Math.floor((distance % (1000 * 60)) / 1000);\r\n            daysSpan.innerHTML = days;\r\n            hoursSpan.innerHTML = ('0' + hours).slice(-2);\r\n            minutesSpan.innerHTML = ('0' + minutes).slice(-2);\r\n            secondsSpan.innerHTML = ('0' + seconds).slice(-2);\r\n            if (distance < 0) {\r\n                document.querySelector('.promotion').style.display = 'none';\r\n            }\r\n        }, 1000);\r\n    }\r\n}\n\n//# sourceURL=webpack://Food/./src/js/module/timer.js?");

/***/ }),

/***/ "./src/data/db.json":
/*!**************************!*\
  !*** ./src/data/db.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"deadline\":[\"2022-11-20\"],\"menu\":[{\"img\":\"img/tabs/vegy.jpg\",\"altimg\":\"vegy\",\"title\":\"Menu \\'Fitness\\'\",\"descr\":\"A new approach to cooking: more fresh vegetables and fruits. For people who are interested in sports; active and healthy. This is a brand new product with the best price and high quality!\",\"price\":9},{\"img\":\"img/tabs/post.jpg\",\"altimg\":\"post\",\"title\":\"Menu \\'Lenten\\'\",\"descr\":\"Our special \\'Lenten Menu\\' is a careful selection of ingredients: the complete absence of animal products. Complete harmony with yourself and nature in every element! Everything will be Yum!\",\"price\":14},{\"img\":\"img/tabs/elite.jpg\",\"altimg\":\"elite\",\"title\":\"Menu \\'Premium\\'\",\"descr\":\"We use not only beautiful packaging design, but also high-quality execution of dishes. Red fish, seafood, fruits - a restaurant menu without going to a restaurant!\",\"price\":21}],\"slides\":[{\"img\":\"img/slider/pepper.jpg\",\"altimg\":\"pepper\"},{\"img\":\"img/slider/food-12.jpg\",\"altimg\":\"food\"},{\"img\":\"img/slider/olive-oil.jpg\",\"altimg\":\"oil\"},{\"img\":\"img/slider/paprika.jpg\",\"altimg\":\"paprika\"}],\"requests\":[]}');\n\n//# sourceURL=webpack://Food/./src/data/db.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;