const banner = document.querySelector('.banner');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0; // 현재 슬라이드 인덱스

function nextSlide() {
    slides[currentIndex].classList.remove('active'); // 현재 슬라이드 비활성화
    currentIndex = (currentIndex + 1) % slides.length; // 다음 슬라이드 인덱스 계산
    slides[currentIndex].classList.add('active'); // 다음 슬라이드 활성화
    updateBannerPosition();
}

function updateBannerPosition() {
    const translateX = -currentIndex * 100; // 슬라이드 너비(100%)로 이동
    banner.style.transform = `translateX(${translateX}%)`;
}

// 다음 슬라이드로 이동하는 이벤트 리스너 등록
// 클릭 이벤트 리스너 등록
banner.addEventListener('click', function () {
    // 현재 슬라이드를 비활성화
    slides[currentIndex].classList.remove('active');

    // 다음 슬라이드로 이동 (마지막 슬라이드에서는 첫 번째 슬라이드로)
    currentIndex = (currentIndex + 1) % slides.length;

    // 다음 슬라이드를 활성화
    slides[currentIndex].classList.add('active');

    // 배너 위치 업데이트
    updateBannerPosition();
});