var slideIndex = 1;

function getSection7Data() {
  const big_div_section7 = document.getElementById("section7_big_container");
  fetch("https://6207b20522c9e90017d32ead.mockapi.io/section7")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        big_div_section7.insertAdjacentHTML(
          "beforeend",
          `<div class="mySlides fade">
          <div>
            <p>
            ${data[i]["paragraph"]}
            </p>
            <p class="people">
            ${data[i]["author"]}
              <br />
              ${data[i]["description"]}
            </p>
          </div>
          <div class="text">Caption Text</div>
        </div>`
        );
      }

      showSlides(slideIndex);
    });
}
getSection7Data();

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  if (slides.length === 0) {
    return;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
