  // intro-slider
  try {
    const introSlider = new Swiper('.intro-swiper', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, 
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: '1',
      spaceBetween: 10,
      speed: 700,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  } catch (error) { }

  // tab content
  try {
    const contents = document.querySelectorAll('.about-us__content'); // Barcha about-us__content bloklarini tanlash
    let currentIndex = 0;

    // Birinchi bo'limga 'show' klassini qo'shamiz
    contents[currentIndex].classList.add('show');

    const nextBtns = document.querySelectorAll('.next-btn');

    nextBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        // Hozirgi bo'limdan 'show' klassini olib tashlaymiz
        contents[currentIndex].classList.remove('show');

        // Indeksni keyingi bo'limga o'tkazamiz
        currentIndex = (currentIndex + 1) % contents.length;

        // Yangi bo'limga 'show' klassini qo'shamiz
        contents[currentIndex].classList.add('show');
      });
    });
  } catch (error) { }

// // Tarif qiymatlarini saqlash uchun massivlar
// const minutesOptions = [500, 1000, 1500, 2000];
// const smsOptions = [100, 150, 200, 250];
// const gbOptions = [20, 30, 40, 50];

// // Har bir tarifning boshlang'ich qiymatlari
// let currentMinuteIndex = 0;
// let currentSmsIndex = 0;
// let currentGbIndex = 0;

// // Elementlarni topish
// const prevMinuteBtn = document.querySelectorAll('.prev-btn-tariff')[0];
// const nextMinuteBtn = document.querySelectorAll('.next-btn-tariff')[0];
// const minuteCount = document.querySelectorAll('.tariff-count')[0];

// const prevSmsBtn = document.querySelectorAll('.prev-btn-tariff')[1];
// const nextSmsBtn = document.querySelectorAll('.next-btn-tariff')[1];
// const smsCount = document.querySelectorAll('.tariff-count')[1];

// const prevGbBtn = document.querySelectorAll('.prev-btn-tariff')[2];
// const nextGbBtn = document.querySelectorAll('.next-btn-tariff')[2];
// const gbCount = document.querySelectorAll('.tariff-count')[2];

// const priceInfo = document.querySelector('.select-tariff__bottom-info');

// // Tarif qiymatlarini yangilash funksiyasi
// function updateTariff() {
//   minuteCount.textContent = minutesOptions[currentMinuteIndex];
//   smsCount.textContent = smsOptions[currentSmsIndex];
//   gbCount.textContent = gbOptions[currentGbIndex];

//   // Narxni hisoblash (misol uchun)
//   const totalPrice = 500 + currentMinuteIndex * 100 + currentSmsIndex * 50 + currentGbIndex * 200;
//   priceInfo.textContent = `Абонентская плата по тарифу составляет ${totalPrice} рублей в месяц`;

//   // Prev tugmalarini ko'rsatish yoki yashirish
//   prevMinuteBtn.classList.toggle('hidden', currentMinuteIndex === 0);
//   prevSmsBtn.classList.toggle('hidden', currentSmsIndex === 0);
//   prevGbBtn.classList.toggle('hidden', currentGbIndex === 0);
// }

// // Minute uchun tugmalar
// nextMinuteBtn.addEventListener('click', function () {
//   if (currentMinuteIndex < minutesOptions.length - 1) {
//     currentMinuteIndex++;
//     updateTariff();

//   }
//   console.log('asa');
// });

// prevMinuteBtn.addEventListener('click', function () {
//   if (currentMinuteIndex > 0) {
//     currentMinuteIndex--;
//     updateTariff();
//   }
// });

// // SMS uchun tugmalar
// nextSmsBtn.addEventListener('click', function () {
//   if (currentSmsIndex < smsOptions.length - 1) {
//     currentSmsIndex++;
//     updateTariff();
//   }
// });

// prevSmsBtn.addEventListener('click', function () {
//   if (currentSmsIndex > 0) {
//     currentSmsIndex--;
//     updateTariff();
//   }
// });

// // GB uchun tugmalar
// nextGbBtn.addEventListener('click', function () {
//   if (currentGbIndex < gbOptions.length - 1) {
//     currentGbIndex++;
//     updateTariff();
//   }
// });

// prevGbBtn.addEventListener('click', function () {
//   if (currentGbIndex > 0) {
//     currentGbIndex--;
//     updateTariff();
//   }
// });

// // Dastlabki holat
// updateTariff();

IMask(
  document.getElementById('phone-mask'),
  {
    mask: '+{7}(000)000-00-00'
  }
)