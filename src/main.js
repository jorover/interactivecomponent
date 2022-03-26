const rating = document.querySelector('.component-number');
const ratingNum = rating.children;
const feedback = document.querySelector('.feedback-number');
const submitBtn = document.querySelector('.submit-btn');
const review = document.querySelector('.review-component');
const thankYou = document.querySelector('.thankyou-component');
const errorMsg = document.querySelector('.error');

const ratingData = [
    {
        id: 1
    },

    {
        id: 2
    },

    {
        id: 3
    },

    {
        id: 4
    },

    {
        id: 5
    }
]


const ratingDisplay = () => {
    rating.innerHTML = ''
    const ratings = ratingData.map(item => {
        const {id} = item;
        return rating.innerHTML += `<div class="rating-num"> <button class="rating-num rating"> ${id} </button> </div>`
    });
    return ratings;
}

ratingDisplay();


const colorBgReset = () => {
    let allBtnsColor = Array.from(ratingNum, item => {
        item.querySelectorAll('.rating').forEach(item => {
            item.style.backgroundColor = 'rgba(37, 60, 65, 0.719)'
            item.style.color = 'rgb(145, 145, 145)'
        })
    })

    return allBtnsColor;
}

const eachRatingNumber = () => {
    let allRating = Array.from(ratingNum, item => {
       item.querySelectorAll('.rating').forEach(item => {
           item.addEventListener('click', ()=> {
               colorBgReset();
               item.style.backgroundColor = '#FF7E09'
               item.style.color = '#fff'
               localStorage.setItem('number', item.innerText);
               feedBackNumber();             
           })
       })
    })

    return allRating;
}

eachRatingNumber();

const feedBackNumber = () => {
    let storedNum = localStorage.getItem('number');
    return feedback.innerText = storedNum;
}


const submitReview = () => {
    submitBtn.addEventListener('click', ()=> {
        let storedNum = localStorage.getItem('number');
        if(storedNum === null){
            errorMsg.innerText = 'kindly rate our services';
            setInterval(() => {
                errorMsg.style.display = 'none'
            }, 3000);
        } else {
            review.style.display = 'none',
            thankYou.style.display = 'block'
            localStorage.removeItem('number');
        }
    })
}

submitReview();