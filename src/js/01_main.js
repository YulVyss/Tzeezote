// Mobile menu


document.querySelector('body').addEventListener('click', (ev) => {

  if (ev.target.classList.contains('menu-icon')) {
    ev.target.classList.toggle('active')
    document.querySelector('.header__nav').classList.toggle('open')
  }
  if (ev.target.classList.contains('menu-icon__item')) {
    ev.target.parentNode.classList.toggle('active')
    document.querySelector('.header__nav').classList.toggle('open')
  }
  if (ev.target.classList.contains('header__nav-link')) {
    document.querySelector('.header__nav').classList.remove('open')
    document.querySelector('.header__nav').classList.remove('active')
  }
  //WODAL WINDOW FORM
  if (ev.target.classList.contains('main__btn')) {
    document.querySelector('.modal').classList.add('open')
    document.querySelector('body').classList.add('lock')
  }
  if (ev.target.classList.contains('modal__close')) {
    document.querySelector('.modal').classList.remove('open')
    document.querySelector('body').classList.remove('lock')
  }

})


//================================================
//SLIDER
//first

const swiper1 = new Swiper('.feedback__slider', {
  // Optional parameters
  init: true,
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-slide__button-next",
    prevEl: ".swiper-slide__button-prev",
  },
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 400,
});

//================================================
// send form

modalForm.onsubmit = async (e) => {
  e.preventDefault();
  let data = {}
  data.user_name = document.getElementById('name').value
  data.email = document.getElementById('email').value
  data.request = document.getElementById('request').value
  data = JSON.stringify(data)

  console.log(data)
  // fetchSend(data)

  let response = await fetch('/php/index.php', {
    method: 'POST',
    body: data
  });

  let result = await response.json();

  console.log(result);
};

const fetchSend = (formData) => {
  fetch('/php/index.php', {
    method: 'POST',
    body: formData
      .then(response => alert('Сообщение отправлено'))
      .catch(error => console.error(error))
  })
}



