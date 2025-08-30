// const images = document.querySelectorAll('.fruits-list img')
//     // console.log(images)

// const onEntry = (elements, observer) => {
//     // console.log(elements)
//     elements.forEach(el => {
//         if(el.isIntersecting){
//             el.target.classList.add('appear');
//         } else {
//             el.target.classList.remove('appear');
//         }
//     })
// }

// const options = {
//     threshold: 1,
// }

// const io = new IntersectionObserver(onEntry , options);

// images.forEach(img => io.observe(img));


// homework

const pictures = document.querySelectorAll('.test-list img')
console.log(pictures);


const onScroll = (elements , observer) => {
    // console.log(elements)
elements.forEach(el => {
    // console.log(el)
        if(el.isIntersecting){
             console.log(el.target.dataset.src)
             console.log(el.target.src)
             el.target.src = el.target.dataset.src;
        } else {
            console.log("nah")
        }
    })
}
const options ={
    threshold : 0.5 ,
}

const io = new IntersectionObserver(onScroll , options);

pictures.forEach(picture => io.observe(picture));