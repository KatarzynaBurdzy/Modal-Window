'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Showing modal
    // querySelectorAll zwraca nie tablice, ale nodeList która nie posiada właściwości Array.prototype dlatego trzeba użyć pętli do wybrania elementu list a nie np. .map
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
};

// Closing modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(x) {
    if (x.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});