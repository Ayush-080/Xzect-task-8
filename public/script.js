document.getElementById('navbar-toggler').addEventListener('click', function () {
    const menu = document.getElementById('dropdown-content');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    menu.style.maxHeight = isExpanded ? '0' : '300px';
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .work-card, .team-member, .review-card, .plan');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.reviews-carousel .carousel-btn.prev');
    const nextButton = document.querySelector('.reviews-carousel .carousel-btn.next');
    const carouselContent = document.querySelector('.reviews-carousel .carousel-content');
    const reviewCards = document.querySelectorAll('.reviews-carousel .review-card');
    const totalItems = reviewCards.length;
    let currentIndex = 0;

    const getMoveDistance = () => {
        const cardStyle = getComputedStyle(reviewCards[0]);
        return reviewCards[0].offsetWidth + parseInt(cardStyle.marginRight) + parseInt(cardStyle.marginLeft);
    };

    let moveDistance = getMoveDistance();

    const updateCarousel = () => {
        const translateXValue = -currentIndex * moveDistance;
        carouselContent.style.transform = `translateX(${translateXValue}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    window.addEventListener('resize', () => {
        moveDistance = getMoveDistance();
        updateCarousel();
    });

    updateCarousel();
});
