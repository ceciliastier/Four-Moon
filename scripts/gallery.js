const galleryContainer = document.querySelector('.gallery-container');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImgWrap = document.querySelector('.lightbox-image-wrapper');
const navBtns = document.querySelectorAll('.lightbox-image-wrapper button')
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const loader = document.querySelector('.loader')
let activeImg;
const imgCount = 69; //the total number of images AND the index of the last image

const setActiveImg = (index) => {
    lightboxImg.src = '/images/fullsize/img-' + index + '.webp';
    activeImg = index;

    //transition new img
    loader.style = 'block';
    loader.style = 'block';

    lightboxImg.onload = () => {
        lightboxImg.style.opacity = 1;
        loader.style.display = 'none';
    }
}




// populate gallery and implement lightbox
for (let i = 1; i <= imgCount; i++) {
    var galleryItemWrapper = document.createElement('div');
    var galleryItem = document.createElement("img")
    galleryItem.src = '/images/thumbnails/thumb-img-' + i + '.webp';
    galleryItem.classList.add('gallery-item')
    galleryItem.setAttribute('alt', 'an event produced by Four Moon Productions')
    galleryItem.setAttribute('data-fullsize', '/images/fullsize/img-' + i + '.webp')
    galleryContainer.appendChild(galleryItemWrapper)
    galleryItemWrapper.appendChild(galleryItem)
    //set lightbox to open with image clicked
    galleryItem.addEventListener('click', () => {
        setActiveImg(i)
        lightboxContainer.classList.add('active')
        document.body.style.overflow = 'hidden' //prevent background scrolling
    })
}


//close lightbox
lightboxContainer.addEventListener('click', () => {
    lightboxContainer.classList.remove('active')
    navBtns.forEach(btn => {
        btn.classList.remove('inactive');
        document.body.style.overflow = 'auto'
        loader.style.display = 'none';
    })
})

//lightbox navigation
const transitionSlideHandler = (moveItem) => {
    moveItem.includes('prev') ? transitionSlidePrev() : transitionSlideNext();
}

const transitionSlidePrev = () => {
    --activeImg;
    if(activeImg < 1) {
        setActiveImg(imgCount)
    } else {
        setActiveImg(activeImg)
    }
    
}

const transitionSlideNext = () => {
    ++activeImg;
    if(activeImg > imgCount) {
        setActiveImg(1)
    } else {
        setActiveImg(activeImg);
    }
    
}

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        transitionSlideHandler(e.currentTarget.id)

    })
})

