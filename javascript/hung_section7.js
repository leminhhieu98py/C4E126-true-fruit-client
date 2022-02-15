var slideIndex = 1;

function getSection7Data() {
  const big_div_section7 = document.getElementById("section7_big_container");
  fetch("https://truejuice2.free.beeceptor.com/section7")
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

// [
//   {
//     "paragraph": "Có lẽ, Yoga–Juicing có một mối liên quan đặc biệt, nó tác động từ bên trong, làm cho con người ta trở nên tươi sáng và tràn đầy sinh lực hơn. Tôi thực sự cảm nhận được sự thay đổi rõ rệt bên trong con người mình, thậm chí cả bề ngoài cũng có nhiều sự thay đổi tích cực. Và tất nhiên, tôi vẫn duy trì việc uống nước ép và tập yoga đều đặn hàng ngày cho tới hiện tại, và sẽ tiếp tục duy trì trong tương lai. Tôi và các con sẽ tiếp tục sống khỏe mạnh, yêu đời và có ích, như một cách nối dài sự sống.",
//     "author": "Vũ Ánh Nguyệt",
//     "description": "Tác giả sách “Hành trình bếp bánh” và “Mùi của bếp”"
//   },
//   {
//     "paragraph": "Thanh xuân của mình đã có 6 năm gắn bó với rượu, cafe (mình là bartender 6 năm, các bạn đừng hiểu lầm nghiện ngập nha!) Và 1 năm nay mình dành trọn tình yêu cho Juice. Mình nhận ra một điều: Có vô số những đồ uống, đồ ăn trước đây mình từng làm chẳng mang lại giá trị dinh dưỡng ngoài việc lấp đầy cơn đói hay thỏa mãn cơn khát cả ngoài sirô và các chất hóa học, kem béo, mứt đóng hộp... Cho đến ngày mình tìm thấy blog juicylife.vn của chị Huyền, mình hiểu hơn Juice không còn đơn thuần là nước ép cam, ép bưởi trước kia nữa mà nó là cả thế giới sắc màu được ép từ vô vàn những rau củ quả. Juice không đơn giản chỉ để giải khát nữa mà Juice là cách nhanh nhất và đơn giản nhất giúp cơ thể của mình khỏe hơn, tươi mới hơn với dinh dưỡng, vitamin và enzyme sống từ rau củ quả.",
//     "author": "Nguyễn Huyền",
//     "description": "Nhân viên văn phòng"
//   },
//   {
//     "paragraph": "Tôi đã từng đọc đâu đó rằng 'Tình thương có thể chữa lành được mọi điều'. Biết đến Juice từ 2014 đến nay, Juice vẫn là một bài thuốc giúp tôi cân bằng trong cuộc sống. Mỗi khi công việc, gia đình, cuộc sống và tình cảm gặp stress, tôi vẫn tìm niềm vui từ Juice. Juice là “Tình thương” giúp cuộc sống của tôi mỗi ngày rực rỡ sắc màu hơn. Với tôi, kể từ ngày có thêm “Tình thương”, cuộc sống của tôi dường như rõ ràng hơn, Green hơn, Red hơn, Yellow hơn và đủ vị hơn. Chính vì vậy, tôi muốn đem “Tình thương” ấy dành cho gia đình mình, dành cho người tôi thương và cho cả bản thân tôi nữa.",
//     "author": "Trần Lan Hương",
//     "description": "Biên tập viên truyền hình"
//   },
//   {
//     "paragraph": "Juice - tôi đến với nó như một cái duyên, cũng như cái duyên với môn thể thao tôi theo đuổi: chạy bộ. Mà phàm những cái gì đến từ duyên sẽ ở lại lâu dài và mang tới niềm vui, sự hứng khởi và hạnh phúc cho cuộc sống. Với hơn một năm gắn bó với Juice, tôi thấy cuộc sống của mình thêm nhiều ý nghĩa. Cảm ơn Huyền – tác giả cuốn sách 'Chào Juice' đã không ngần ngại chia sẻ tất cả những thứ liên quan về Juice tới cộng đồng. Với tôi và gia đình, Juice bây giờ không chỉ đơn giản là một thức uống lành mạnh, nó còn như một phong cách sống. Tìm hiểu, pha trộn các loại hoa quả, rau củ để tìm ra các công thức mới mỗi ngày và cả gia đình cùng nhau thưởng thức, đó là niềm vui, hạnh phúc tuyệt vời của tôi.",
//     "author": "Nguyễn Xuân Bách ",
//     "description": "Nhân viên ngân hàng"
//   }
// ]

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
