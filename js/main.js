'use strict';
// media header
const hambuergerMenuBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.header .nav');

hambuergerMenuBtn.addEventListener('click', () => {
  hambuergerMenuBtn.classList.toggle('active');
  nav.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
});

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
} catch (error) {}

// tab content
try {
  const contents = document.querySelectorAll('.about-us__content'); // Barcha about-us__content bloklarini tanlash
  let currentIndex = 0;

  // Birinchi bo'limga 'show' klassini qo'shamiz
  contents[currentIndex].classList.add('show');

  const nextBtns = document.querySelectorAll('.next-btn');

  nextBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Hozirgi bo'limdan 'show' klassini olib tashlaymiz
      contents[currentIndex].classList.remove('show');

      // Indeksni keyingi bo'limga o'tkazamiz
      currentIndex = (currentIndex + 1) % contents.length;

      // Yangi bo'limga 'show' klassini qo'shamiz
      contents[currentIndex].classList.add('show');
    });
  });
} catch (error) {}

IMask(document.getElementById('phone-mask'), {
  mask: '+{7}(000)000-00-00',
});

try {
  const accordions = document.querySelectorAll('.accordion');
  console.log(accordions);
  accordions.forEach((accordion) => {
    const accordionHeader = accordion.querySelector('.accordion-header');
    const accordionBody = accordion.querySelector('.accordion-body');

    accordionHeader.addEventListener('click', () => {
      accordionBody.classList.toggle('show');
      accordionHeader.classList.toggle('active');
    });
  });
} catch (error) {}

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
    const selectTariffBottom = document.querySelector(
      '.select-tariff__bottom-info'
    );
    const yourNumber = document.querySelectorAll('.your-number');
    const eSimNumber = document.querySelectorAll('.e-sim__number');
    const eSimNumberAdditional = document.querySelectorAll(
      '.e-sim__number-additional'
    );
    const yourNumberText = document.querySelector('.your-number__text');

    yourNumber.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          yourNumberText.textContent = 'перейти со своим номером';
          yourNumber.forEach(function (box) {
            box.checked = true;
          });
        } else {
          yourNumber.forEach(function (box) {
            box.checked = false;
          });
          yourNumberText.textContent = 'получу доставкой';
        }
      });
    });

    eSimNumber.forEach(function (checkbox) {
      checkbox.checked = false;
      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          eSimNumber.forEach(function (box) {
            box.checked = true;
          });
        } else {
          eSimNumber.forEach(function (box) {
            box.checked = false;
          });
        }
      });
    });

    eSimNumberAdditional.forEach(function (checkbox) {
      checkbox.checked = false;
      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          eSimNumberAdditional.forEach(function (box) {
            box.checked = true;
          });
        } else {
          eSimNumberAdditional.forEach(function (box) {
            box.checked = false;
          });
        }
      });
    });

    function toggleActiveClass(
      activeBtn,
      inactiveBtn1,
      inactiveBtn2,
      linkedBtn,
      infoText
    ) {
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
      megafon: [
        'Все нужные функции',
        'Все нужные функции',
        'Лучший выбор',
        'На полную катушку',
      ],
      mtc: [
        'Безупречный выбор',
        'Максимум возможностей',
        'Максимум комфорта',
        'Безграничные возможности',
      ],
    };

    // Tariflar uchun qiymatlar
    const megafonTariffs = [
      {
        minut: 500,
        sms: 100,
        gb: 20,
        bonus: 10,
        price: '500 р/мес',
        bottomPrice:
          'Абонентская плата по тарифу Всегда.Связь Мегафон-1 составляет 500 рублей в месяц',
        tariffInfoTitle:
          'Откройте новые горизонты связи и интернета с нашим новым тарифным пакетом!',
        tariffDesc:
          'Представляем вам идеальное решение для активных пользователей, которые ценят удобство и эффективность. Наш агрегированный продукт включает две SIM-карты, каждая из которых предоставит вам особые преимущества.',
        tariffAdvantages: {
          title: 'Преимущества нашего тарифа:',
          list: [
            {
              linkText: 'Удобство и экономия',
              description:
                'Все ваши потребности в одной подписке. Больше не нужно искать дополнительные пакеты или переплачивать за лишний трафик.',
            },
            {
              linkText: 'Проверенная надежность',
              description:
                'Вы получаете стабильное покрытие и быстрый интернет, где бы вы ни находились.',
            },
            {
              linkText: 'Максимум возможностей',
              description:
                'Гибкость в использовании двух SIM-карт позволяет вам легко управлять своей связью и интернетом, что делает этот тариф идеальным для современного пользователя.',
            },
          ],
        },
        tariffPlan: {
          title: 'Что включает наш тариф?',
          list: [
            {
              linkText: 'Первая SIM-карта',
              description:
                '500 минут для звонков, 100 SMS и 20 ГБ интернета. Отличный выбор для тех, кто активно общается и использует интернет для работы и отдыха',
            },
            {
              linkText: 'Вторая SIM-карта',
              description:
                'Дополнительные 10 ГБ интернета. Отличный бонус для тех, кто часто использует интернет и нуждается в дополнительном трафике.',
            },
          ],
        },
        whyChooseUs: {
          title: 'Что включает наш тариф?',
          list: [
            {
              linkText: 'Гибкость и комфорт',
              description:
                'Используйте первую SIM-карту для всех ваших звонков и SMS, а вторую — для дополнительных интернет-активностей. Никаких сложностей, только простота и удобство.',
            },
            {
              linkText: 'Достаточно минут и SMS',
              description:
                'С 500 минутами и 100 SMS вам не придется беспокоиться о том, как вам связаться с близкими или коллегами.',
            },
            {
              linkText: 'Большой объем интернета',
              description:
                '20 ГБ на первой SIM-карте и дополнительные 10 ГБ на второй SIM-карте — это идеальное сочетание для комфортного серфинга, стриминга и загрузок.',
            },
          ],
        },
      },
      {
        minut: 1000,
        sms: 500,
        gb: 30,
        bonus: 15,
        price: '700 р/мес',
        bottomPrice:
          'Абонентская плата по тарифу Всегда.Связь Мегафон-2 составляет 700 рублей в месяц',
        tariffInfoTitle: 'Преобразите свой опыт связи с нашим новым тарифом!',
        tariffDesc:
          'Мы рады представить вам уникальный агрегированный продукт, который объединяет все ваши потребности в связи и интернете в одном удобном решении. С двумя SIM-картами вы получите максимальную гибкость и эффективность, чтобы наслаждаться бесперебойной связью и быстрым интернетом.',
        tariffAdvantages: {
          title: 'Преимущества нашего тарифа:',
          list: [
            {
              linkText: 'Все в одном',
              description:
                'Используйте первую SIM-карту для звонков и SMS, а вторую — для неограниченного интернета. Больше не нужно выбирать между минутами и трафиком — у вас будет всё, что вам нужно.',
            },
            {
              linkText: 'Гибкость и комфорт',
              description:
                'Подключите обе SIM-карты к одному тарифу и наслаждайтесь идеальным сочетанием связи и интернета, где бы вы ни находились.',
            },
          ],
        },
        tariffPlan: {
          title: 'Что включает наш тариф?',
          list: [
            {
              linkText: 'Первая SIM-карта',
              description:
                '1000 минут для звонков, 500 SMS и 30 ГБ интернета. Идеально для тех, кто активно общается и часто пользуется интернетом.',
            },
            {
              linkText: 'Вторая SIM-карта',
              description:
                'Дополнительные 15 ГБ интернета. Отличное решение для любителей стриминга, социальных сетей и загрузок.',
            },
          ],
        },
        whyChooseUs: {
          title: 'Что включает наш тариф?',
          list: [
            {
              linkText: 'Экономия и удобство',
              description:
                'Получите все необходимые услуги по выгодной цене и не тратьте время на поиск дополнительных пакетов.',
            },
            {
              linkText: 'Надежность и стабильность',
              description:
                'Две SIM-карты обеспечивают стабильное покрытие и высокий интернет-скорость, что делает этот тариф идеальным для активного использования.',
            },
            {
              linkText: 'Легкость в управлении',
              description:
                'Вы легко можете управлять своей связью и интернетом через одно приложение и один тариф, что делает использование простым и удобным.',
            },
          ],
        },
      },
      {
        minut: 2000,
        sms: 1000,
        gb: 50,
        bonus: 25,
        price: '900 р/мес',
        bottomPrice:
          'Абонентская плата по тарифу Всегда.Связь Мегафон-3 составляет 900 рублей в месяц',
        tariffInfoTitle:
          'Откройте для себя идеальное сочетание связи и интернета с нашим новым агрегированным тарифом!',
        tariffDesc:
          'Представляем вам уникальное предложение, которое объединяет все необходимое для полноценной связи и бесперебойного интернета. Наш агрегированный продукт включает две SIM-карты, каждая из которых приносит свои исключительные преимущества.',
        tariffAdvantages: {
          title: 'Преимущества нашего тарифа:',
          list: [
            {
              linkText: 'Все под рукой',
              description:
                'Получите полный комплект услуг для связи и интернета без необходимости покупки дополнительных пакетов.',
            },
            {
              linkText: 'Удобное управление',
              description:
                'Одна SIM-карта для звонков и сообщений, вторая для интернета — вы легко справитесь с управлением благодаря простому интерфейсу.',
            },
            {
              linkText: 'Идеальное решение для активных пользователей',
              description:
                'Подходит для всех, кто много общается и активно пользуется интернетом, будь то работа, развлечение или связь с близкими.',
            },
          ],
        },
        tariffPlan: {
          title: 'Что включает наш тариф?',
          list: [
            {
              linkText: 'Первая SIM-карта',
              description:
                '2000 минут для звонков, 1000 SMS и 50 ГБ интернета. Это идеальное решение для активных пользователей, которые ценят удобство длительных разговоров и постоянный доступ к интернету.',
            },
            {
              linkText: 'Вторая SIM-карта',
              description:
                'Дополнительные 25 ГБ интернета. Отлично подходит для стриминга, загрузок и активного использования онлайн-сервисов без ограничения трафика.',
            },
          ],
        },
        whyChooseUs: {
          title: 'Почему выбирают наш тариф?',
          list: [
            {
              linkText: 'Максимум возможностей',
              description:
                'С 2000 минутами и 1000 SMS у вас всегда будет достаточно средств для общения. Дополнительные 25 ГБ интернета обеспечат вас неограниченными возможностями для онлайн-активностей.',
            },
            {
              linkText: 'Гибкость и удобство',
              description:
                'Используйте первую SIM-карту для всех своих звонков и SMS, а вторую — для непрерывного интернета. Идеально для тех, кто ценит максимальную эффективность и простоту в управлении.',
            },
            {
              linkText: 'Надежное подключение',
              description:
                'Быстрый и стабильный интернет на обеих SIM-картах гарантирует бесперебойную связь и отличное качество соединения в любом месте.',
            },
          ],
        },
      },
      {
        minut: 3500,
        sms: 1000,
        gb: 50,
        bonus: 25,
        price: '1300 р/мес',
        bottomPrice:
          'Абонентская плата по тарифу Всегда.Связь Мегафон-4 составляет 1300 рублей в месяц',
        tariffInfoTitle:
          'Встречайте идеальное решение для максимальной связи и интернета!',
        tariffDesc:
          'Наш новый тарифный пакет сочетает лучшее из обоих миров, предоставляя вам две SIM-карты с превосходными возможностями.',
        tariffAdvantages: {
          title: 'Преимущества нашего тарифа:',
          list: [
            {
              linkText: 'Эффективное управление',
              description:
                'Легко управляемые минуты, SMS и интернет трафик в одном тарифе.',
            },
            {
              linkText: 'Экономия и удобство',
              description:
                'Один пакет, два SIM-карты, полный контроль над вашими потребностями.',
            },
            {
              linkText: 'Для активных пользователей',
              description:
                'Подходит для тех, кто много общается и активно использует интернет, будь то для работы или развлечений.',
            },
          ],
        },
        tariffPlan: {
          title: 'Что включает наш тариф?',
          list: [
            {
              linkText: 'Первая SIM-карта',
              description:
                '3500 минут для звонков, 1000 SMS и 50 ГБ интернета. Идеально для тех, кто активно общается и нуждается в большом объеме интернет-трафика.',
            },
            {
              linkText: 'Вторая SIM-карта',
              description:
                'Дополнительные 25 ГБ интернета. Обеспечивает дополнительный запас для ваших онлайн-активностей.',
            },
          ],
        },
        whyChooseUs: {
          title: 'Почему это ваш идеальный выбор?',
          list: [
            {
              linkText: 'Все, что нужно в одном пакете',
              description:
                'С таким объемом минут и SMS вы будете на связи, а дополнительный интернет-трафик обеспечит бесконечное количество онлайн-активностей.',
            },
            {
              linkText: 'Гибкость и контроль',
              description:
                'Разделите функции между двумя SIM-картами, чтобы оптимально использовать ресурсы и не беспокоиться о перегрузке одной карты.',
            },
            {
              linkText: 'Непревзойденное качество связи',
              description:
                'Наслаждайтесь стабильным интернетом и отличной связью в любом месте.',
            },
          ],
        },
      },
    ];

    const mtcTariffs = [
      {
        minut: 700,
        sms: 300,
        gb: 50,
        bonus: 25,
        price: '650 р/мес',
        bottomPrice:
          'Абонентская плата по тарифу Всегда.Связь Мтс-1 составляет 650 рублей в месяц',
        tariffInfoTitle:
          'Откройте новый уровень связи с нашим уникальным продуктом!',
        tariffDesc:
          'Мы рады представить наш новейший агрегированный продукт, который объединяет преимущества двух SIM-карт в одном удобном решении. Этот тарифный пакет создан для тех, кто ценит как обширные возможности для общения, так и высокоскоростной интернет.',
        tariffAdvantages: {
          title: 'Преимущества нашего тарифа:',
          list: [
            {
              linkText: 'Максимум комфорта',
              description:
                'Объединение двух SIM-карт в одном тарифе обеспечивает полный спектр услуг, который идеально подходит для активного пользования и путешествий.',
            },
            {
              linkText: 'Гибкость и удобство',
              description:
                'Используйте первую SIM-карту для всех ваших звонков и текстов, а вторую — для дополнительного интернета. Идеальное решение для разнообразных потребностей.',
            },
            {
              linkText: 'Гибкость и удобство',
              description:
                'Больше интернета, меньше ограничений: Суммарный объем интернет-трафика позволяет вам наслаждаться интернетом без перерывов и забот.',
            },
            {
              linkText: 'Оптимизация расходов',
              description:
                'Один тариф для всех ваших потребностей снижает необходимость в дополнительных опциях и услугах.',
            },
          ],
        },
        tariffPlan: {
          title: 'Что входит в агрегированный продукт?',
          list: [
            {
              linkText: 'Первая SIM-карта',
              description:
                '700 минут для разговоров — оставайтесь на связи с близкими и коллегами без ограничений. 300 SMS — отправляйте текстовые сообщения без лишних забот. 50 ГБ интернета — наслаждайтесь быстрым интернетом для работы и развлечений.',
            },
            {
              linkText: 'Вторая SIM-карта',
              description: 'Почему стоит выбрать наш агрегированный продукт?',
            },
          ],
        },
        whyChooseUs: {
          title: 'Почему стоит выбрать наш агрегированный продукт?',
          list: [
            {
              linkText: 'Максимальная Гибкость',
              description:
                'С двумя SIM-картами в одном тарифе, вы можете оптимально распределить свои ресурсы. Используйте первую SIM-карту для звонков и SMS, а вторую — для дополнительного интернета. Это идеальное решение для тех, кто хочет получить всё сразу.',
            },
            {
              linkText: 'Удобство и Простота',
              description:
                'Один тарифный план, который охватывает все ваши потребности, исключает необходимость в нескольких тарифах и услугах. Легко управляйте всеми аспектами связи и интернета через одну единое решение.',
            },
            {
              linkText: 'Щедрый Трафик и Долгие Разговоры',
              description:
                'Включенные 700 минут и 300 SMS удовлетворят все ваши потребности в общении, а 60 ГБ интернета на двух SIM-картах обеспечат быстрый и стабильный доступ к интернету в любых ситуациях.',
            },
          ],
        },
      },
      {
        minut: 1000,
        sms: 300,
        gb: 60,
        bonus: 30,
        price: '800 р/мес',
        bottomPrice:
          'Абонентская плата по тарифу Всегда.Связь Мтс-2 составляет 800 рублей в месяц',
        tariffInfoTitle:
          'Откройте новые горизонты связи и интернета с нашим инновационным тарифом!',
        tariffDesc:
          'Знакомьтесь с идеальным решением для активного использования связи и интернета — наш новый тарифный пакет с двумя SIM-картами!',
        tariffAdvantages: {
          title: 'Преимущества нашего тарифа:',
          list: [
            {
              linkText: 'Огромный объем минут и SMS',
              description:
                'Не ограничивайтесь в общении. Наш тариф позволяет вам звонить и писать столько, сколько нужно.',
            },
            {
              linkText: 'Обширный интернет-трафик',
              description:
                'Высокоскоростной интернет, который не прерывается. Идеально для работы и развлечений.',
            },
            {
              linkText: 'Легкость в управлении',
              description:
                'Удобное использование двух SIM-карт с одной абонентской платой.',
            },
          ],
        },
        tariffPlan: {
          title: 'Что включает наш тариф?',
          list: [
            {
              linkText: 'Первая SIM-карта',
              description:
                '1000 минут на звонки, 300 SMS и 60 ГБ интернета. Идеально для ежедневного общения, обмена сообщениями и комфортного серфинга в интернете.',
            },
            {
              linkText: 'Вторая SIM-карта',
              description:
                '30 ГБ дополнительного интернета для тех, кто всегда в сети, не зависимо от места нахождения.',
            },
          ],
        },
        whyChooseUs: {
          title: 'Почему стоит выбрать наш агрегированный тариф?',
          list: [
            {
              linkText: 'Максимальная гибкость',
              description:
                'Используйте первую SIM-карту для звонков и сообщений, а вторую — для неограниченного интернет-серфинга.',
            },
            {
              linkText: 'Все включено',
              description:
                'Забудьте о необходимости переключаться между SIM-картами или думать о дополнительных расходах. Наш тариф обеспечивает полный пакет услуг в одном предложении.',
            },
            {
              linkText: 'Удобство и экономия',
              description:
                'Получите больше возможностей без лишних затрат. Один тариф покрывает все ваши потребности в связи и интернете.',
            },
          ],
        },
      },
      {
        minut: 1500,
        sms: 500,
        gb: 80,
        bonus: 40,
        price: '1000 р/мес',
        bottomPrice:
          'Абонентская плата по тарифу Всегда.Связь Мегафон-3 составляет 1000 рублей в месяц',
        tariffInfoTitle:
          'Увеличьте возможности связи и интернета с нашим новым тарифом!',
        tariffDesc:
          'Представляем уникальный тарифный пакет, который объединяет лучшее из двух миров в одном предложении. С двумя SIM-картами вы получаете идеальное сочетание для максимального комфорта и эффективности!',
        tariffAdvantages: {
          title: 'Преимущества нашего тарифа:',
          list: [
            {
              linkText: 'Огромное количество минут и SMS',
              description:
                'Поддержите активное общение и переписку без лишних забот.',
            },
            {
              linkText: 'Большой объем интернета',
              description:
                'Высокоскоростной интернет для всех ваших онлайн-активностей.',
            },
            {
              linkText: 'Максимальная гибкость',
              description:
                'Используйте первую SIM-карту для связи и интернета, вторую — для дополнительного трафика.',
            },
          ],
        },
        tariffPlan: {
          title: 'Что вас ждет с нашим тарифом?',
          list: [
            {
              linkText: 'Первая SIM-карта',
              description:
                'Наслаждайтесь 1500 минутами на звонки, 500 SMS и 80 ГБ интернета. Это идеальный выбор для тех, кто активно общается и использует интернет для работы и развлечений.',
            },
            {
              linkText: 'Вторая SIM-карта',
              description:
                '30 ГБ дополнительного интернета для тех, кто всегда в сети, не зависимо от места нахождения.',
            },
          ],
        },
        whyChooseUs: {
          title: 'Почему стоит выбрать наш агрегированный тариф?',
          list: [
            {
              linkText: 'Полная свобода',
              description:
                'Первая SIM-карта обеспечивает все ваши потребности в голосовой связи и текстовых сообщениях, а вторая — дает вам дополнительный интернет-трафик, который вы можете использовать по своему усмотрению.',
            },
            {
              linkText: 'Неограниченные возможности',
              description:
                'Большой объем минут и SMS для общения и значительный трафик для интернета — теперь у вас есть все, что нужно для комфортного использования связи и интернета.',
            },
            {
              linkText: 'Удобство и экономия',
              description:
                'Все ваши нужды в одной подписке. Один тариф покрывает все основные потребности без необходимости добавлять дополнительные опции или менять тарифы.',
            },
          ],
        },
      },
      {
        minut: 2000,
        sms: 1000,
        gb: 80,
        bonus: 40,
        price: '1150 р/мес',
        bottomPrice:
          'Абонентская плата по тарифу Всегда.Связь Мегафон-4 составляет 1150 рублей в месяц',
        tariffInfoTitle:
          'Расширьте возможности связи и интернета с нашим новым агрегированным тарифом!',
        tariffDesc:
          'Представляем уникальный агрегированный продукт, который идеально сочетает все необходимое для вашего комфорта. Две SIM-карты, каждая со своими преимуществами, обеспечат вам максимальную гибкость и удобство в использовании!',
        tariffAdvantages: {
          title: 'Преимущества нашего тарифа:',
          list: [
            {
              linkText: 'Максимальная свобода',
              description:
                'Используйте первую SIM-карту для всех основных нужд и вторую для дополнительного интернета — без необходимости менять тариф или добавлять опции.',
            },
            {
              linkText: 'Экономия и комфорт',
              description:
                'Все ваши потребности в одной подписке. Нет необходимости искать дополнительные пакеты или оплачивать дополнительные услуги.',
            },
            {
              linkText: 'Гибкость',
              description:
                'Управляйте связью и интернетом так, как вам удобно. Отличный вариант для активных пользователей и тех, кто ценит надежность и гибкость.',
            },
          ],
        },
        tariffPlan: {
          title: 'Что входит в наш тариф?',
          list: [
            {
              linkText: 'Первая SIM-карта',
              description:
                '2000 минут для звонков, 1000 SMS и 80 ГБ интернета. Отличный выбор для тех, кто активно общается по телефону и использует интернет для работы, развлечений и общения.',
            },
            {
              linkText: 'Вторая SIM-карта',
              description:
                'Дополнительно 40 ГБ интернета. Идеально для стриминга, загрузок и дополнительных онлайн-активностей.',
            },
          ],
        },
        whyChooseUs: {
          title: 'Почему стоит выбрать наш агрегированный тариф?',
          list: [
            {
              linkText: 'Широкие возможности общения',
              description:
                'С 2000 минутами и 1000 SMS вы всегда на связи с близкими и коллегами. Никаких ограничений, только свободное общение.',
            },
            {
              linkText: 'Большой объем интернета',
              description:
                '80 ГБ на первой SIM-карте и дополнительные 40 ГБ на второй — это больше возможностей для серфинга, стриминга и работы в интернете без прерываний.',
            },
            {
              linkText: 'Удобство использования',
              description:
                'Одна SIM-карта для звонков и сообщений, другая для интернета. Переходите между ними по необходимости и получите полный контроль над своим интернет-трафиком и общением.',
            },
          ],
        },
      },
    ];

    // Bosqich holatini saqlash
    let currentIndex = 0;
    let currentTariffs = megafonTariffs; // Dastlab megafon-btn aktiv
    let currentInfoTextIndex = 0; // Info matn indexi

    // Tarif qiymatlarini yangilash
    function updateTariffValues(tariff) {
      minutCount.textContent = tariff.minut;
      smsCount.textContent = tariff.sms;
      gbCount.textContent = tariff.gb;
      bonusCount.textContent = tariff.bonus;
      tariffPrice.textContent = tariff.price;
      selectTariffBottom.textContent = tariff.bottomPrice;
    }
    const selectOpenModalBtn = document.querySelector('.select-modal__open');
    const selectModal = document.querySelector('.select-modal');
    const infoModal = document.querySelector('.info-modal');

    // Modalni ochish funksiyasi
    function openModal(tariff) {
      modals.forEach((modal) => {
        const modalTitle = modal.querySelector('.modal-title');
        const modalMinutesCount = modal.querySelector('.modal-minutes-count');
        const modalSmsCount = modal.querySelector('.modal-sms-count');
        const modalGbCount = modal.querySelector('.modal-gb-count');
        const modalBonusGb = modal.querySelector('.modal-bonus-gb');
        const modalTariffPrice = modal.querySelector('.modal-tariff-price');

        const tariffInfoTitle = infoModal.querySelector('.tariff-info__title');
        console.log(tariffInfoTitle);

        const tariffDesc = infoModal.querySelector('.tariff-desc');

        const tariffAdvantages = infoModal.querySelector('.tariff-advantages');
        const tariffAdvantagesList = infoModal.querySelector(
          '.tariff-advantages__list'
        );

        const tariffPlan = infoModal.querySelector('.tariff-plan');
        const tariffPlanList = infoModal.querySelector('.tariff-plan__list');

        const whyChooseUs = infoModal.querySelector('.why-choose__us');
        const whyChooseUsList = infoModal.querySelector('.why-choose__us-list');

        // Modalni yangilash
        modalTitle.textContent = `Всегда.Связь ${
          currentTariffs === megafonTariffs ? 'Мегафон' : 'МТС'
        }-${currentIndex + 1}`;
        modalMinutesCount.textContent = `${tariff.minut}`;
        modalSmsCount.textContent = `${tariff.sms}`;
        modalGbCount.textContent = `${tariff.gb}`;
        modalBonusGb.textContent = `+ ${tariff.bonus} гб`;
        modalTariffPrice.textContent = tariff.price;
        tariffInfoTitle.textContent = tariff.tariffInfoTitle;
        tariffDesc.textContent = tariff.tariffDesc;

        // TariffAdvantages title va list yangilash
        tariffAdvantages.textContent = tariff.tariffAdvantages.title;
        tariffAdvantagesList.innerHTML = ''; // Avvalgi elementlarni tozalash

        tariff.tariffAdvantages.list.forEach((advantage) => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${advantage.linkText}</strong>: ${advantage.description}`;
          tariffAdvantagesList.appendChild(li);
        });

        // TariffPlan title va list yangilash
        tariffPlan.textContent = tariff.tariffPlan.title;
        tariffPlanList.innerHTML = ''; // Avvalgi elementlarni tozalash

        tariff.tariffPlan.list.forEach((plan) => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${plan.linkText}</strong>: ${plan.description}`;
          tariffPlanList.appendChild(li);
        });

        // WhyChooseUs title va list yangilash
        whyChooseUs.textContent = tariff.whyChooseUs.title;
        whyChooseUsList.innerHTML = ''; // Avvalgi elementlarni tozalash

        tariff.whyChooseUs.list.forEach((reason) => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${reason.linkText}</strong>: ${reason.description}`;
          whyChooseUsList.appendChild(li);
        });
      });
    }

    // Modalni yopish funksiyasi
    function closeModal() {
      modals.forEach((item) => {
        item.classList.remove('show');
      });
    }

    // Tarifni o'zgartirish funksiyasi
    function changeTariff(direction) {
      currentIndex += direction;
      currentIndex = Math.max(
        0,
        Math.min(currentIndex, currentTariffs.length - 1)
      ); // Chegaralar
      updateTariffValues(currentTariffs[currentIndex]);
      currentInfoTextIndex = Math.min(
        currentIndex,
        infoTexts[currentTariffs === megafonTariffs ? 'megafon' : 'mtc']
          .length - 1
      );
      functionsInfo.textContent =
        infoTexts[currentTariffs === megafonTariffs ? 'megafon' : 'mtc'][
          currentInfoTextIndex
        ];
      updateButtonVisibility();

      if (modals[0].style.display === 'flex') {
        openModal(currentTariffs[currentIndex]); // Modal oynasini hozirgi tarif bilan yangilash
      }
    }

    // Tugmalarni boshqarish
    megafonBtn.addEventListener('click', () => {
      currentTariffs = megafonTariffs;
      currentIndex = 0; // Dastlabki bosqich
      updateTariffValues(currentTariffs[currentIndex]);
      currentInfoTextIndex = 0;
      functionsInfo.textContent = infoTexts.megafon[currentInfoTextIndex];
      updateButtonVisibility();
      toggleActiveClass(megafonBtn, mtcBtn, megafonBtn2, mtcBtn2);
    });

    mtcBtn.addEventListener('click', () => {
      currentTariffs = mtcTariffs;
      currentIndex = 0; // Dastlabki bosqich
      updateTariffValues(currentTariffs[currentIndex]);
      currentInfoTextIndex = 0;
      functionsInfo.textContent = infoTexts.mtc[currentInfoTextIndex];
      updateButtonVisibility();
      toggleActiveClass(mtcBtn, megafonBtn, mtcBtn2, megafonBtn2);
    });
    megafonBtn2.addEventListener('click', () => {
      toggleActiveClass(megafonBtn2, megafonBtn, mtcBtn2, mtcBtn);
    });
    mtcBtn2.addEventListener('click', () => {
      toggleActiveClass(mtcBtn2, mtcBtn, megafonBtn2, megafonBtn);
    });
    // "Подробнее" tugmalarini hodisaga bog'lash
    moreDetailsBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        openModal(currentTariffs[currentIndex], 'info-modal'); // Hozirgi tarif ma'lumotlarini modalga yuborish
        infoModal.classList.add('show');
      });
    });

    selectOpenModalBtn.addEventListener('click', () => {
      infoModal.classList.remove('show');
      selectModal.classList.add('show');
    });

    selectedTarifBtn.addEventListener('click', () => {
      openModal(currentTariffs[currentIndex]);
      infoModal.classList.remove('show');
      selectModal.classList.add('show');
    });

    // Next va Prev tugmalariga hodisa biriktirish
    nextBtn.forEach((btn) =>
      btn.addEventListener('click', () => changeTariff(1))
    );
    prevBtn.forEach((btn) =>
      btn.addEventListener('click', () => changeTariff(-1))
    );

    // Modalni yopish hodisasi
    closeModalBtn.addEventListener('click', closeModal);
    closeModalBtn2.addEventListener('click', closeModal);

    // Tugmalar holatini yangilash
    function updateButtonVisibility() {
      prevBtn.forEach((btn) =>
        btn.classList.toggle('hidden', currentIndex === 0)
      ); // Birinchi bosqichda prev yashirin
      nextBtn.forEach((btn) =>
        btn.classList.toggle(
          'hidden',
          currentIndex === currentTariffs.length - 1
        )
      ); // Oxirgi bosqichda next yashirin
    }

    // Boshlang'ich holatni yangilash
    updateTariffValues(currentTariffs[currentIndex]);
    updateButtonVisibility();
    functionsInfo.textContent = infoTexts.megafon[currentInfoTextIndex];
  });
} catch (error) {
  console.log(error);
}
// tarif ==========================================================================================================================================================
// Modallar va tugmalar bilan ishlash uchun optimallashtirilgan kod
try {
  // Elementlarni tanlash
  const cards = document.querySelectorAll('.all-tariffs__card');
  const modals = document.querySelectorAll('.modal');
  const closeModalButtons = document.querySelectorAll(
    '.close-modal, .close-modal-2'
  );
  const modalTriggers = document.querySelectorAll(
    '[data-modal="thanks-modal"]'
  );
  const modalOpenButtons = document.querySelectorAll('[data-modal]');

  // Tariff kartalari va ularga tegishli matnlar
  const simCards = [
    {
      card: document.querySelector('.delivery-sim__card-1'),
      text: document.querySelector('.delivery-sim__card-1-text'),
    },
    {
      card: document.querySelector('.delivery-sim__card-2'),
      text: document.querySelector('.delivery-sim__card-2-text'),
    },
    {
      card: document.querySelector('.delivery-sim__card-3'),
      text: document.querySelector('.delivery-sim__card-3-text'),
    },
    {
      card: document.querySelector('.delivery-sim__card-4'),
      text: document.querySelector('.delivery-sim__card-4-text'),
    },
    {
      card: document.querySelector('.delivery-sim__card-5'),
      text: document.querySelector('.delivery-sim__card-5-text'),
    },
    {
      card: document.querySelector('.delivery-sim__card-6'),
      text: document.querySelector('.delivery-sim__card-6-text'),
    },
    {
      card: document.querySelector('.delivery-sim__card-7'),
      text: document.querySelector('.delivery-sim__card-7-text'),
    },
    {
      card: document.querySelector('.delivery-sim__card-8'),
      text: document.querySelector('.delivery-sim__card-8-text'),
    },
  ];

  // Har bir sim karta uchun o'zgaruvchilarni yaratish va voqealarni ulash
  simCards.forEach(({ card, text }) => {
    card.addEventListener('change', () => {
      if (card.checked) {
        text.textContent = 'перейти со своим номером';
      } else {
        text.textContent = 'получу доставкой';
      }
    });
  });

  // Barcha modallarni yopish funksiyasi
  function closeAllModals() {
    modals.forEach((modal) => modal.classList.remove('show'));
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
  cards.forEach((card) => {
    card.addEventListener('click', function () {
      const modalId = card.getAttribute('data-modal');
      showModal(modalId);
    });
  });

  // Modal ochish tugmalari uchun hodisalar
  modalTriggers.forEach((button) => {
    button.addEventListener('click', function () {
      const currentModal = button.closest('.modal');
      if (currentModal) closeModal(currentModal);
      showModal('thanks-modal');
    });
  });

  // Modal yopish tugmalari uchun hodisalar
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  // Modal tashqarisiga bosilganda yopish
  modals.forEach((modal) => {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal(modal);
    });
  });

  // Barcha modal ochuvchi tugmalar uchun hodisalar
  modalOpenButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const modalId = button.getAttribute('data-modal');
      showModal(modalId);
    });
  });
} catch (error) {
  console.error('Error handling modals:', error);
}
