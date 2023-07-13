"use strict"
//===код для определения типа устройства===========================================================
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BleckBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
//=================================================================================================
//добавляем модификатор в зависимости от типа устройства
if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
};
//=================================================================================================

// ================================================================================================
// card-e
document.addEventListener('DOMContentLoaded', function () {
    let cardElements = document.querySelectorAll('.card-e');

    cardElements.forEach(function (element) {
        element.addEventListener('mouseenter', function (e) {
            let x = e.pageX - element.offsetLeft;
            let y = e.pageY - element.offsetTop;
            element.querySelector('span').style.top = y + 'px';
            element.querySelector('span').style.left = x + 'px';
        });

        element.addEventListener('mouseout', function (e) {
            let x = e.pageX - element.offsetLeft;
            let y = e.pageY - element.offsetTop;
            element.querySelector('span').style.top = y + 'px';
            element.querySelector('span').style.left = x + 'px';
        });
    });
});
// ================================================================================================

