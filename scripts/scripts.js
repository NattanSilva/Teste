function listarCards() {
  let carousel = document.querySelector(".carousel");

  carousel.innerHTML = "";

  dataBase.forEach(element => {
    carousel.appendChild(createCardCarousel(element));
  });
}

listarCards();

function createCardCarousel({src}) {
  let card = document.createElement("a");
  
  card.classList.add("carousel-item");
  card.href = "#";
  card.innerHTML = `
    <div class="testi">
      <img src=${src}>
    </div>
  `;

  return card;
}

$(document).ready(function(){
  $('.carousel').carousel({
    padding: 200,
    heght: 150,
  });
  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  }
});