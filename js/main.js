// media header
const hambuergerMenuBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.header .nav');

hambuergerMenuBtn.addEventListener('click', () => {
  hambuergerMenuBtn.classList.toggle('active');
  nav.classList.toggle('show');
  document.body.classList.toggle('no-scroll')
})

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


const accordions = document.querySelectorAll('.accordion');
console.log(accordions);
accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.accordion-header');
  const accordionBody = accordion.querySelector('.accordion-body');

  accordionHeader.addEventListener('click', () => {
    accordionBody.classList.toggle('show');
    accordionHeader.classList.toggle('active')
  })
})


// modals
try {
  const cards = document.querySelectorAll('.all-tariffs__card');
  const modals = document.querySelectorAll('.modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const selectButtons = document.querySelectorAll('.btn-primary[data-modal="thanks-modal"]');
  const modalTriggers = document.querySelectorAll('[data-modal="thanks-modal"]');

  modalTriggers.forEach(button => {
    button.addEventListener('click', function () {
      const currentModal = button.closest('.modal');
      if (currentModal) {
        closeModal(currentModal);
      }
      showModal('thanks-modal');
    });
  });

  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const modalId = card.getAttribute('data-modal');
      showModal(modalId);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', function () {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });
} catch (error) {

}



// Tarif elementlarini tanlab olish
const functionsInfo = document.querySelector('.functions-info');

const megafonBtn = document.querySelector('.megafon-btn');
const mtcBtn = document.querySelector('.mtc-btn');
const megafonBtn2 = document.querySelector('.megafon-btn-2');
const mtcBtn2 = document.querySelector('.mtc-btn-2');

const minutCount = document.querySelector('.minut-count');
const smsCount = document.querySelector('.sms-count');
const gbCount = document.querySelector('.gb-count');
const bonusCount = document.querySelector('.bonus-count');
const tariffPrice = document.querySelector('.tariff-price');
const nextBtn = document.querySelectorAll('.next-btn-tariff');
const prevBtn = document.querySelectorAll('.prev-btn-tariff');

// Info matnlarini belgilash
const infoTexts = {
  megafon: ["Все нужные функции", "Все нужные функции", "Лучший выбор", "На полную катушку"],
  mtc: ["Безупречный выбор", "Максимум возможностей", "Максимум комфорта", "Безграничные возможности"],
};

// Tugmalarni o'zaro `active` klassini boshqarish va info matnini yangilash funksiyasi
function toggleActiveClass(activeBtn, inactiveBtn1, inactiveBtn2, linkedBtn, infoText) {
  activeBtn.classList.add('active');
  inactiveBtn1.classList.remove('active');
  inactiveBtn2.classList.remove('active');
  linkedBtn.classList.add('active');
  functionsInfo.textContent = infoText;
}

// Tariflar uchun qiymatlar
const megafonTariffs = [
  { minut: 500, sms: 100, gb: 20, bonus: 10, price: 'Абонентская плата по тарифу Всегда.Связь Мтс-1 составляет 500 рублей в месяц' },
  { minut: 1000, sms: 500, gb: 30, bonus: 15, price: 'Абонентская плата по тарифу Всегда.Связь Мтс-2 составляет 700 рублей в месяц' },
  { minut: 2000, sms: 1000, gb: 50, bonus: 25, price: 'Абонентская плата по тарифу Всегда.Связь Мтс-3 составляет 900 рублей в месяц' },
  { minut: 3500, sms: 1000, gb: 50, bonus: 25, price: 'Абонентская плата по тарифу Всегда.Связь Мтс-4 составляет 1300 рублей в месяц' }
];

const mtcTariffs = [
  { minut: 700, sms: 300, gb: 50, bonus: 25, price: 'Абонентская плата по тарифу Всегда.Связь Мегафон-1 составляет 650 рублей в месяц' },
  { minut: 1000, sms: 300, gb: 60, bonus: 30, price: 'Абонентская плата по тарифу Всегда.Связь Мегафон-2 составляет 800 рублей в месяц' },
  { minut: 1500, sms: 500, gb: 80, bonus: 40, price: 'Абонентская плата по тарифу Всегда.Связь Мегафон-3 составляет 1000 рублей в месяц' },
  { minut: 2000, sms: 1000, gb: 80, bonus: 40, price: 'Абонентская плата по тарифу Всегда.Связь Мегафон-4 составляет 1150 рублей в месяц' }
];

// Bosqich holatini saqlash
let currentIndex = 0;
let currentTariffs = megafonTariffs;  // Dastlab megafon-btn aktiv
let currentInfoTextIndex = 0; // Info matn indexi

// Tarif qiymatlarini yangilash
function updateTariffValues(tariff) {
  minutCount.textContent = tariff.minut;
  smsCount.textContent = tariff.sms;
  gbCount.textContent = tariff.gb;
  bonusCount.textContent = tariff.bonus;
  tariffPrice.textContent = tariff.price;
}

// Tugmalar holatini yangilash
function updateButtonVisibility() {
  prevBtn.forEach(btn => btn.classList.toggle('hidden', currentIndex === 0));  // Birinchi bosqichda prev yashirin
  nextBtn.forEach(btn => btn.classList.toggle('hidden', currentIndex === currentTariffs.length - 1));  // Oxirgi bosqichda next yashirin
}

// Tarifni o'zgartirish funksiyasi
function changeTariff(direction) {
  currentIndex += direction;
  currentIndex = Math.max(0, Math.min(currentIndex, currentTariffs.length - 1)); // Chegaralar
  updateTariffValues(currentTariffs[currentIndex]);
  currentInfoTextIndex = Math.min(currentIndex, infoTexts[currentTariffs === megafonTariffs ? 'megafon' : 'mtc'].length - 1);
  functionsInfo.textContent = infoTexts[currentTariffs === megafonTariffs ? 'megafon' : 'mtc'][currentInfoTextIndex];
  updateButtonVisibility();
}

// Next va Prev tugmalariga hodisa biriktirish
nextBtn.forEach(btn => btn.addEventListener('click', () => changeTariff(1)));
prevBtn.forEach(btn => btn.addEventListener('click', () => changeTariff(-1)));

// Tugmalarni boshqarish
megafonBtn.addEventListener('click', () => {
  currentTariffs = megafonTariffs;
  currentIndex = 0;  // Dastlabki bosqich
  updateTariffValues(currentTariffs[currentIndex]);
  currentInfoTextIndex = 0;
  functionsInfo.textContent = infoTexts.megafon[currentInfoTextIndex];
  updateButtonVisibility();
  toggleActiveClass(megafonBtn, mtcBtn, megafonBtn2, mtcBtn2, infoTexts.megafon[currentInfoTextIndex]);
});

mtcBtn.addEventListener('click', () => {
  currentTariffs = mtcTariffs;
  currentIndex = 0;  // Dastlabki bosqich
  updateTariffValues(currentTariffs[currentIndex]);
  currentInfoTextIndex = 0;
  functionsInfo.textContent = infoTexts.mtc[currentInfoTextIndex];
  updateButtonVisibility();
  toggleActiveClass(mtcBtn, megafonBtn, mtcBtn2, megafonBtn2, infoTexts.mtc[currentInfoTextIndex]);
});

megafonBtn2.addEventListener('click', () => {
  currentTariffs = megafonTariffs; // O'zgarish
  currentIndex = 0;  // Dastlabki bosqich
  updateTariffValues(currentTariffs[currentIndex]);
  currentInfoTextIndex = 0;
  functionsInfo.textContent = infoTexts.megafon[currentInfoTextIndex];
  updateButtonVisibility();
  toggleActiveClass(megafonBtn2, megafonBtn, mtcBtn2, mtcBtn, infoTexts.megafon[currentInfoTextIndex]);
});

mtcBtn2.addEventListener('click', () => {
  currentTariffs = mtcTariffs; // O'zgarish
  currentIndex = 0;  // Dastlabki bosqich
  updateTariffValues(currentTariffs[currentIndex]);
  currentInfoTextIndex = 0;
  functionsInfo.textContent = infoTexts.mtc[currentInfoTextIndex];
  updateButtonVisibility();
  toggleActiveClass(mtcBtn2, mtcBtn, megafonBtn2, megafonBtn, infoTexts.mtc[currentInfoTextIndex]);
});

// Boshlang'ich holatni yangilash
updateTariffValues(currentTariffs[currentIndex]);
updateButtonVisibility();
functionsInfo.textContent = infoTexts.megafon[currentInfoTextIndex]; // Boshlang'ich matn


// tarif modal 
const tariffs = [
  {
    title: "Всегда.Связь МТС-1",
    minutes: 500,
    sms: 100,
    gb: 200,
    price: "500 р/мес",
    sidebarsContent: [
      {
        title: "Откройте новые горизонты связи и интернета с нашим новым тарифным пакетом!",
        info: "Представляем вам идеальное решение для активных пользователей, которые ценят удобство и эффективность."
      },
      {
        title: "Удобство и экономия:",
        features: [
          "Все ваши потребности в одной подписке.",
          "Больше не нужно искать дополнительные пакеты или переплачивать за лишний трафик."
        ]
      },
      {
        title: "Что включает наш тариф?",
        features: [
          "Используйте первую SIM-карту для всех ваших звонков и SMS, а вторую — для дополнительных интернет-активностей.",
          "С 500 минутами и 100 SMS вам не придется беспокоиться о том, как вам связаться с близкими или коллегами."
        ]
      }
    ]
  },
  {
    title: "Всегда.Связь МТС-2",
    minutes: 1000,
    sms: 200,
    gb: 300,
    price: "800 р/мес",
    sidebarsContent: [
      {
        title: "Лучшее решение для вашего общения!",
        info: "Мы предлагаем уникальные условия для наших клиентов."
      },
      {
        title: "Проверенная надежность:",
        features: [
          "Стабильное покрытие и быстрый интернет.",
          "Легкость управления двумя SIM-картами."
        ]
      },
      {
        title: "Что включает наш тариф?",
        features: [
          "Неограниченные звонки и SMS на первом тарифе.",
          "30 ГБ на первой SIM-карте и 10 ГБ на второй."
        ]
      }
    ]
  }
];


document.querySelectorAll('.more-details__tariff').forEach(button => {
  button.addEventListener('click', () => {
    const tariffIndex = button.dataset.tariff;
    const selectedTariff = tariffs[tariffIndex];

    // Modalni to'ldirish
    document.querySelector('.modal-title').textContent = selectedTariff.title;
    document.querySelector('.minut-count .tariff-box__count').textContent = selectedTariff.minutes;
    document.querySelector('.sms-count .tariff-box__count').textContent = selectedTariff.sms;
    document.querySelector('.gb-count .tariff-box__count').textContent = selectedTariff.gb;
    document.querySelector('.tariff-price').textContent = selectedTariff.price;

    // Sidebarni yangilash
    const sidebarsContents = document.querySelectorAll('.sidebars-content');
    sidebarsContents.forEach((content, index) => {
      const sidebarData = selectedTariff.sidebarsContent[index];
      content.querySelector('.sidebars-title').textContent = sidebarData.title;
      content.querySelector('.sidebars-info').textContent = sidebarData.info || '';

      const featuresList = content.querySelector('.features-list');
      featuresList.innerHTML = ''; // Oldin tozalanadi
      if (sidebarData.features) {
        sidebarData.features.forEach(feature => {
          const li = document.createElement('li');
          li.textContent = feature;
          featuresList.appendChild(li);
        });
      }
    });

    document.getElementById('tariffModal').style.display = 'block';
  });
});

// Modalni yopish
document.querySelector('.modal .close-btn').addEventListener('click', () => {
  document.getElementById('tariffModal').style.display = 'none';
});