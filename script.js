function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const photos = [
  "./assets/photo1.jpg",
  "./assets/photo2.jpg",
  "./assets/photo3.jpg",
  "./assets/photo4.jpg",
  "./assets/photo5.jpg",
  "./assets/photo6.jpg",
  "./assets/photo7.jpg",
  "./assets/photo8.jpg",
  "./assets/photo9.jpg",
  "./assets/photo10.jpg",
  "./assets/photo11.jpg",
  "./assets/photo12.jpg",
  "./assets/photo13.jpg",
  "./assets/photo14.jpg",
  "./assets/photo15.jpg",
  "./assets/photo16.jpg",
  "./assets/photo17.jpg"
];

let currentPhotoIndex = 0;

function openPhotoModal(index) {
  const modal = document.getElementById("photoModal");
  const modalPhoto = document.getElementById("modalPhoto");

  currentPhotoIndex = index;
  modalPhoto.src = photos[currentPhotoIndex];

  modal.style.display = "flex"; // Show modal
}

function closePhotoModal() {
  const modal = document.getElementById("photoModal");
  modal.style.display = "none"; // Hide modal
}

function nextPhoto() {
  if (currentPhotoIndex < photos.length - 1) {
    currentPhotoIndex++;
  } else {
    currentPhotoIndex = 0; // Go back to the first photo
  }
  updateModalPhoto();
}

function prevPhoto() {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
  } else {
    currentPhotoIndex = photos.length - 1; // Go to the last photo
  }
  updateModalPhoto();
}

function updateModalPhoto() {
  const modalPhoto = document.getElementById("modalPhoto");
  modalPhoto.src = photos[currentPhotoIndex];
}


const modal = document.getElementById('photo-modal');
const modalImg = document.getElementById('expanded-photo');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.photo-item').forEach(photo => {
  photo.addEventListener('click', function () {
    modal.style.display = "flex"; 
    modalImg.src = this.src; 
  });
});

closeModal.addEventListener('click', function () {
  modal.style.display = "none";
});


modal.addEventListener('click', function (e) {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
});
