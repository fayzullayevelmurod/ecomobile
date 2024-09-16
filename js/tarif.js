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
  // General function to handle any checkbox group
  // function setupCheckboxHandler(
  //   checkboxes,
  //   textElement,
  //   checkedText,
  //   uncheckedText
  // ) {
  //   function updateText() {
  //     const isChecked = Array.from(checkboxes).some((btn) => btn.checked);
  //     textElement.textContent = isChecked ? checkedText : uncheckedText;
  //   }

  //   // Initially update the text content based on the checkboxes' states
  //   updateText();

  //   // Add event listeners to all checkboxes
  //   checkboxes.forEach((btn) => {
  //     btn.addEventListener('change', updateText);
  //   });
  // }

  // // Select all groups of checkboxes and their corresponding text elements
  // const deliveryESimCard1 = document.querySelectorAll('.delivery-esim__card-1');
  // const deliveryESimCard1Text = document.querySelector(
  //   '.delivery-esim__card-1-text'
  // );
  // const deliveryESimCard2 = document.querySelectorAll('.delivery-esim__card-2');
  // const deliveryESimCard2Text = document.querySelector(
  //   '.delivery-esim__card-2-text'
  // );
  // const deliveryESimCard3 = document.querySelectorAll('.delivery-esim__card-3');
  // const deliveryESimCard3Text = document.querySelector(
  //   '.delivery-esim__card-3-text'
  // );
  // const deliveryESimCard4 = document.querySelectorAll('.delivery-esim__card-4');
  // const deliveryESimCard4Text = document.querySelector(
  //   '.delivery-esim__card-4-text'
  // );

  // const deliveryESimCard5 = document.querySelectorAll('.delivery-esim__card-5');
  // const deliveryESimCard5Text = document.querySelector(
  //   '.delivery-esim__card-5-text'
  // );
  // const deliveryESimCard6 = document.querySelectorAll('.delivery-esim__card-6');
  // const deliveryESimCard6Text = document.querySelector(
  //   '.delivery-esim__card-6-text'
  // );
  // const deliveryESimCard7 = document.querySelectorAll('.delivery-esim__card-7');
  // const deliveryESimCard7Text = document.querySelector(
  //   '.delivery-esim__card-7-text'
  // );
  // const deliveryESimCard8 = document.querySelectorAll('.delivery-esim__card-6');
  // const deliveryESimCard8Text = document.querySelector(
  //   '.delivery-esim__card-8-text'
  // );

  // // Call the function for each group
  // setupCheckboxHandler(
  //   deliveryESimCard1,
  //   deliveryESimCard1Text,
  //   'e-SIM',
  //   'физическая, получу доставкой'
  // );
  // setupCheckboxHandler(
  //   deliveryESimCard2,
  //   deliveryESimCard2Text,
  //   'e-SIM',
  //   'физическая, получу доставкой'
  // );
  // setupCheckboxHandler(
  //   deliveryESimCard3,
  //   deliveryESimCard3Text,
  //   'e-SIM',
  //   'физическая, получу доставкой'
  // );
  // setupCheckboxHandler(
  //   deliveryESimCard4,
  //   deliveryESimCard4Text,
  //   'e-SIM',
  //   'физическая, получу доставкой'
  // );
  // setupCheckboxHandler(
  //   deliveryESimCard5,
  //   deliveryESimCard5Text,
  //   'e-SIM',
  //   'физическая, получу доставкой'
  // );
  // setupCheckboxHandler(
  //   deliveryESimCard6,
  //   deliveryESimCard6Text,
  //   'e-SIM',
  //   'физическая, получу доставкой'
  // );
  // setupCheckboxHandler(
  //   deliveryESimCard7,
  //   deliveryESimCard7Text,
  //   'e-SIM',
  //   'физическая, получу доставкой'
  // );
  // setupCheckboxHandler(
  //   deliveryESimCard8,
  //   deliveryESimCard8Text,
  //   'e-SIM',
  //   'физическая, получу доставкой'
  // );

  // // Add event listeners to all checkboxes
  // deliveryESimCard1.forEach((btn) => {
  //   btn.addEventListener('change', updateCardText);
  // });
  // General function to handle any checkbox group
  function setupCheckboxHandler(
    checkboxes,
    textElement,
    checkedText,
    uncheckedText
  ) {
    function updateText() {
      const isChecked = Array.from(checkboxes).some((btn) => btn.checked);
      textElement.textContent = isChecked ? checkedText : uncheckedText;
    }

    // Initially update the text content based on the checkboxes' states
    updateText();

    // Add event listeners to all checkboxes
    checkboxes.forEach((btn) => {
      btn.addEventListener('change', updateText);
    });
  }

  // Create an array of checkbox groups and their corresponding text elements
  const checkboxGroups = [
    {
      checkboxes: document.querySelectorAll('.delivery-esim__card-1'),
      textElement: document.querySelector('.delivery-esim__card-1-text'),
    },
    {
      checkboxes: document.querySelectorAll('.delivery-esim__card-2'),
      textElement: document.querySelector('.delivery-esim__card-2-text'),
    },
    {
      checkboxes: document.querySelectorAll('.delivery-esim__card-3'),
      textElement: document.querySelector('.delivery-esim__card-3-text'),
    },
    {
      checkboxes: document.querySelectorAll('.delivery-esim__card-4'),
      textElement: document.querySelector('.delivery-esim__card-4-text'),
    },
    {
      checkboxes: document.querySelectorAll('.delivery-esim__card-5'),
      textElement: document.querySelector('.delivery-esim__card-5-text'),
    },
    {
      checkboxes: document.querySelectorAll('.delivery-esim__card-6'),
      textElement: document.querySelector('.delivery-esim__card-6-text'),
    },
    {
      checkboxes: document.querySelectorAll('.delivery-esim__card-7'),
      textElement: document.querySelector('.delivery-esim__card-7-text'),
    },
    {
      checkboxes: document.querySelectorAll('.delivery-esim__card-8'),
      textElement: document.querySelector('.delivery-esim__card-8-text'),
    },
  ];

  // Call the function for each group in the array
  checkboxGroups.forEach(({ checkboxes, textElement }) => {
    setupCheckboxHandler(
      checkboxes,
      textElement,
      'e-SIM',
      'физическая, получу доставкой'
    );
  });

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
