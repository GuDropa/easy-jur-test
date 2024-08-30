function initCarousel(selector, infoPath, items) {
    const $target = $(selector);
    const $carouselInner = $('<div class="carousel-inner carousel__inner"></div>');

    items.forEach((item, index) => {
        const isActive = index === 0 ? 'active' : '';
        $carouselInner.append(`
            <div class="carousel-item ${isActive}">
                <div class="card carousel-item-card carousel__card">
                    <a href="${defineInfoUrl(item.identifier)}" class="my-3">
                        <img class="img-fluid card-img-top mx-auto d-block" src="${item.src}" alt="${item.alt || item.title}">
                    </a>
                    <div class="card-body carousel-body-info">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text text-wrap">${item.description}</p>
                    </div>
                </div>
            </div>
        `);
    });

    const carouselHtml = `
        <div id="items-carousel" class="carousel slide" data-bs-ride="carousel">
            ${$carouselInner.prop('outerHTML')}
            <button class="carousel-control-prev carousel__control--prev" data-bs-target="#items-carousel" type="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button >
            <button class="carousel-control-next carousel__control--next" data-bs-target="#items-carousel" type="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button >
        </div>
    `;

    $target.html(carouselHtml);

    function defineInfoUrl(identifier) {
        return `${infoPath}?identifier=${identifier}`
    }
}

export { initCarousel };
