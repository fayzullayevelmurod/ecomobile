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
