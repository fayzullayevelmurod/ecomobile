"use strict";
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

IMask(
  document.getElementById('phone-mask'),
  {
    mask: '+{7}(000)000-00-00'
  }
)


try {
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
} catch (error) { }




// tarif ============================================================================================================================================================
try {
  document.addEventListener('DOMContentLoaded', () => {
    // Elementlarni tanlab olish
    const functionsInfo = document.querySelector('.functions-info');
    const megafonBtn = document.querySelector('.megafon-btn');
    const megafonBtn2 = document.querySelector('.megafon-btn-2');
    const mtcBtn = document.querySelector('.mtc-btn');
    const mtcBtn2 = document.querySelector('.mtc-btn-2');
    const minutCount = document.querySelector('.minut-count');
    const smsCount = document.querySelector('.sms-count');
    const gbCount = document.querySelector('.gb-count');
    const bonusCount = document.querySelector('.bonus-count');
    const tariffPrice = document.querySelector('.tariff-price');
    const nextBtn = document.querySelectorAll('.next-btn-tariff');
    const prevBtn = document.querySelectorAll('.prev-btn-tariff');
    const moreDetailsBtns = document.querySelectorAll('.more-details__tariff');
    const selectedTarifBtn = document.querySelector('.select-tariff__btn');
    const selectTariffBottom = document.querySelector('.select-tariff__bottom-info');

    function toggleActiveClass(activeBtn, inactiveBtn1, inactiveBtn2, linkedBtn, infoText) {
      activeBtn.classList.add('active');
      inactiveBtn1.classList.remove('active');
      inactiveBtn2.classList.remove('active');
      linkedBtn.classList.add('active');
    }

    // Modal elementlari
    const modals = document.querySelectorAll('.modall');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeModalBtn2 = document.querySelector('.close-modal-2');

    // Info matnlarini belgilash
    const infoTexts = {
      megafon: ["Все нужные функции", "Все нужные функции", "Лучший выбор", "На полную катушку"],
      mtc: ["Безупречный выбор", "Максимум возможностей", "Максимум комфорта", "Безграничные возможности"],
    };

    // Tariflar uchun qiymatlar
    const megafonTariffs = [
      { minut: 500, sms: 100, gb: 20, bonus: 10, price: '500 р/мес', bottomPrice: 'Абонентская плата по тарифу Всегда.Связь Мтс-1 составляет 500 рублей в месяц' },
      { minut: 1000, sms: 500, gb: 30, bonus: 15, price: '700 р/мес', bottomPrice: 'Абонентская плата по тарифу Всегда.Связь Мтс-2 составляет 700 рублей в месяц' },
      { minut: 2000, sms: 1000, gb: 50, bonus: 25, price: '900 р/мес', bottomPrice: 'Абонентская плата по тарифу Всегда.Связь Мтс-3 составляет 900 рублей в месяц' },
      { minut: 3500, sms: 1000, gb: 50, bonus: 25, price: '1300 р/мес', bottomPrice: 'Абонентская плата по тарифу Всегда.Связь Мтс-4 составляет 1300 рублей в месяц' }
    ];

    const mtcTariffs = [
      { minut: 700, sms: 300, gb: 50, bonus: 25, price: '650 р/мес', bottomPrice: 'Абонентская плата по тарифу Всегда.Связь Мтс-1 составляет 650 рублей в месяц' },
      { minut: 1000, sms: 300, gb: 60, bonus: 30, price: '800 р/мес', bottomPrice: 'Абонентская плата по тарифу Всегда.Связь Мтс-2 составляет 800 рублей в месяц' },
      { minut: 1500, sms: 500, gb: 80, bonus: 40, price: '1000 р/мес', bottomPrice: 'Абонентская плата по тарифу Всегда.Связь Мтс-3 составляет 1000 рублей в месяц' },
      { minut: 2000, sms: 1000, gb: 80, bonus: 40, price: '1150 р/мес', bottomPrice: 'Абонентская плата по тарифу Всегда.Связь Мтс-4 составляет 1150 рублей в месяц' }
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
      selectTariffBottom.textContent = tariff.bottomPrice
    }
    const selectOpenModalBtn = document.querySelector('.select-modal__open');
    const selectModal = document.querySelector('.select-modal');
    const infoModal = document.querySelector('.info-modal')
    // Modalni ochish funksiyasi
    function openModal(tariff) {
      modals.forEach(modal => {
        const modalTitle = modal.querySelector('.modal-title');
        const modalMinutesCount = modal.querySelector('.modal-minutes-count');
        const modalSmsCount = modal.querySelector('.modal-sms-count');
        const modalGbCount = modal.querySelector('.modal-gb-count');
        const modalBonusGb = modal.querySelector('.modal-bonus-gb');
        const modalTariffPrice = modal.querySelector('.modal-tariff-price');
        const modalSidebarsContent = modal.querySelector('.sidebars-content');


        modalTitle.textContent = `Всегда.Связь ${currentTariffs === megafonTariffs ? 'Мегафон' : 'МТС'}-${currentIndex + 1}`;
        modalMinutesCount.textContent = `${tariff.minut}`;
        modalSmsCount.textContent = `${tariff.sms}`;
        modalGbCount.textContent = `${tariff.gb}`;
        modalBonusGb.textContent = `+ ${tariff.bonus} гб`;
        modalTariffPrice.textContent = tariff.price;

        // Sidebars kontentlari
        const sidebarsContentData = {
          megafon: [
            {
              title: "Преобразите свой опыт связи с нашим новым тарифом!",
              info: "Мы рады представить вам уникальный агрегированный продукт, который объединяет все ваши потребности в связи и интернете в одном удобном решении."
            },
            {
              title: "Преимущества нашего тарифа:",
              info: `<ul><li><a href="#!">Все в одном:</a> Используйте первую SIM-карту для звонков и SMS, а вторую — для неограниченного интернета.</li></ul>`
            },
          ],
          mtc: [
            {
              title: "Откройте новый уровень связи с нашим тарифом!",
              info: "Наш новый тариф — это объединение всех ваших потребностей в одном решении."
            },
            {
              title: "Преимущества тарифа МТС:",
              info: `<ul><li><a href="#!">Лучшее предложение:</a> Первая SIM-карта для звонков и SMS, вторая для интернета.</li></ul>`
            },
          ]
        };

        const sidebarContentArray = currentTariffs === megafonTariffs ? sidebarsContentData.megafon : sidebarsContentData.mtc;
        let sidebarHTML = '';

        sidebarContentArray.forEach(item => {
          sidebarHTML += `
            <div class="sidebars-content">
              <h4 class="sidebars-title">${item.title}</h4>
              <p class="sidebars-info">${item.info}</p>
            </div>
          `;
        });

        if (modalSidebarsContent) {
          modalSidebarsContent.innerHTML = sidebarHTML;  // Modalning sidebars qismini yangilash
        }

        // modal.style.display = 'flex';  // Modalni ko'rsatish
      });
    }

    // Modalni yopish funksiyasi
    function closeModal() {
      modals.forEach(item => {
        item.classList.remove('show')
      });
    }

    // Tarifni o'zgartirish funksiyasi
    function changeTariff(direction) {
      currentIndex += direction;
      currentIndex = Math.max(0, Math.min(currentIndex, currentTariffs.length - 1)); // Chegaralar
      updateTariffValues(currentTariffs[currentIndex]);
      currentInfoTextIndex = Math.min(currentIndex, infoTexts[currentTariffs === megafonTariffs ? 'megafon' : 'mtc'].length - 1);
      functionsInfo.textContent = infoTexts[currentTariffs === megafonTariffs ? 'megafon' : 'mtc'][currentInfoTextIndex];
      updateButtonVisibility();

      if (modals[0].style.display === 'flex') {
        openModal(currentTariffs[currentIndex]);  // Modal oynasini hozirgi tarif bilan yangilash
      }
    }

    // Tugmalarni boshqarish
    megafonBtn.addEventListener('click', () => {
      currentTariffs = megafonTariffs;
      currentIndex = 0;  // Dastlabki bosqich
      updateTariffValues(currentTariffs[currentIndex]);
      currentInfoTextIndex = 0;
      functionsInfo.textContent = infoTexts.megafon[currentInfoTextIndex];
      updateButtonVisibility();
      toggleActiveClass(megafonBtn, mtcBtn, megafonBtn2, mtcBtn2);
    });

    mtcBtn.addEventListener('click', () => {
      currentTariffs = mtcTariffs;
      currentIndex = 0;  // Dastlabki bosqich
      updateTariffValues(currentTariffs[currentIndex]);
      currentInfoTextIndex = 0;
      functionsInfo.textContent = infoTexts.mtc[currentInfoTextIndex];
      updateButtonVisibility();
      toggleActiveClass(mtcBtn, megafonBtn, mtcBtn2, megafonBtn2);
    });
    megafonBtn2.addEventListener('click', () => {
      toggleActiveClass(megafonBtn2, megafonBtn, mtcBtn2, mtcBtn);
    })
    mtcBtn2.addEventListener('click', () => {
      toggleActiveClass(mtcBtn2, mtcBtn, megafonBtn2, megafonBtn);
    })
    // "Подробнее" tugmalarini hodisaga bog'lash
    moreDetailsBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        openModal(currentTariffs[currentIndex], 'info-modal');  // Hozirgi tarif ma'lumotlarini modalga yuborish
        infoModal.classList.add('show')
      });
    });


    selectOpenModalBtn.addEventListener('click', () => {
      infoModal.classList.remove('show');
      selectModal.classList.add('show');
    })

    selectedTarifBtn.addEventListener('click', () => {
      openModal(currentTariffs[currentIndex]);
      infoModal.classList.remove('show');
      selectModal.classList.add('show');
    })

    // Next va Prev tugmalariga hodisa biriktirish
    nextBtn.forEach(btn => btn.addEventListener('click', () => changeTariff(1)));
    prevBtn.forEach(btn => btn.addEventListener('click', () => changeTariff(-1)));

    // Modalni yopish hodisasi
    closeModalBtn.addEventListener('click', closeModal);
    closeModalBtn2.addEventListener('click', closeModal);

    // Tugmalar holatini yangilash
    function updateButtonVisibility() {
      prevBtn.forEach(btn => btn.classList.toggle('hidden', currentIndex === 0));  // Birinchi bosqichda prev yashirin
      nextBtn.forEach(btn => btn.classList.toggle('hidden', currentIndex === currentTariffs.length - 1));  // Oxirgi bosqichda next yashirin
    }

    // Boshlang'ich holatni yangilash
    updateTariffValues(currentTariffs[currentIndex]);
    updateButtonVisibility();
    functionsInfo.textContent = infoTexts.megafon[currentInfoTextIndex];
  });
} catch (error) {
  console.log(error);

}
// tarif ============================================================================================================================================================


// Modallar va tugmalar bilan ishlash uchun optimallashtirilgan kod
try {
  const cards = document.querySelectorAll('.all-tariffs__card'); // Tariff kartalari
  const modals = document.querySelectorAll('.modal'); // Barcha modallar
  const closeModalButtons = document.querySelectorAll('.close-modal'); // Modalni yopish tugmalari
  const closeModalButtons2 = document.querySelectorAll('.close-modal-2'); // Modalni yopish tugmalari
  const modalTriggers = document.querySelectorAll('[data-modal="thanks-modal"]'); // "thanks-modal" ochish uchun tugmalar
  const selectButtons = document.querySelectorAll('.btn-primary[data-modal="thanks-modal"]'); // "thanks-modal" uchun maxsus tugmalar

  // Barcha modallarni yopish funksiyasi
  function closeAllModals() {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
    document.body.style.overflow = ''; // Body scrollni tiklash
  }

  // Bitta modalni ochish funksiyasi
  function showModal(modalId) {
    closeAllModals(); // Barcha ochiq modallarni yopish
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden'; // Body scrollni bloklash
    }
  }

  // Modalni yopish funksiyasi
  function closeModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Body scrollni tiklash
  }

  // Tariff kartasi bosilganda modal ochish
  cards.forEach(card => {
    card.addEventListener('click', function () {
      const modalId = card.getAttribute('data-modal'); // Kartadagi "data-modal" qiymatini olish
      showModal(modalId); // Modalni ochish
    });
  });

  // Modalni ochish tugmalari uchun hodisalar
  modalTriggers.forEach(button => {
    button.addEventListener('click', function () {
      const currentModal = button.closest('.modal'); // Tugma tegishli modalni topadi
      if (currentModal) {
        closeModal(currentModal); // Hozirgi modalni yopish
      }
      showModal('thanks-modal'); // "thanks-modal"ni ochish
    });
  });

  // Modalni yopish tugmalari uchun hodisalar
  closeModalButtons.forEach(button => {
    button.addEventListener('click', function () {
      const modal = button.closest('.modal'); // Tegishli modalni topish
      closeModal(modal); // Modalni yopish
    });
  });
  closeModalButtons2.forEach(button => {
    button.addEventListener('click', function () {
      const modal = button.closest('.modal'); // Tegishli modalni topish
      closeModal(modal); // Modalni yopish
    });
  });

  // Modal tashqarisini bosganda modalni yopish
  modals.forEach(modal => {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal(modal); // Tashqarisiga bosilganda modalni yopish
      }
    });
  });

  // Umumiy ochish tugmalari uchun hodisalar
  const modalOpenButtons = document.querySelectorAll('[data-modal]'); // Barcha "data-modal" atributiga ega tugmalar

  modalOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal'); // Tugmadagi "data-modal" qiymatini olish
      showModal(modalId); // Modalni ochish
    });
  });

} catch (error) {
  console.error('Error handling modals:', error);
}
