if (document.body.classList.contains('modal-open')) {
    document.body.classList.remove('modal-open');
}

const modal = document.querySelector('.modal.show.fade.ng-isolate-scope.ev.ev-open-modal-paywall-REQUIRE_LOGIN.in');
if (modal) {
    modal.remove();
}

const modalBackdrop = document.querySelectorAll('.modal-backdrop.fade.in');
modalBackdrop.forEach(modalBackdropElement => {
    modalBackdropElement.remove();
});


const contentPageAdWrapDesktop = document.querySelectorAll('.content-page-ad_wrap.desktop');
contentPageAdWrapDesktop.forEach(ad => {
    ad.remove();
});


const contentPageAdWrapMobile = document.querySelectorAll('.content-page-ad_wrap.mobile');
contentPageAdWrapMobile.forEach(mobileContentPageAdWrapper => {
    mobileContentPageAdWrapper.remove();
});


const adMobileLeaderBoardWrap = document.querySelectorAll('.ad-mobile-leaderboard_wrap');
adMobileLeaderBoardWrap.forEach(mobileAdWrapper => {
    mobileAdWrapper.remove();
});


const nestedHtml = document.querySelectorAll('body * html');
nestedHtml.forEach(html => {
    html.remove();
});

const iframes = document.querySelectorAll('iframe');
iframes.forEach(iframe => {
    iframe.remove();
});

