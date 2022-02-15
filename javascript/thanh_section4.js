function getSection4Data() {
  const big_div_section4 = document.getElementById("section4_big_container");

  fetch("https://truejuice2.free.beeceptor.com/section4")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        big_div_section4.insertAdjacentHTML(
          "beforeend",
          `
          <div class="section4_container">
          <div class="section4_position">
            <div>
              <img
                src="${data[i]["img_url"]}"
                class="section4_img"
              />
            </div>
            <div class="section4_content">
              <h2>${data[i]["head_title"]}</h2>
              <p>
                ${data[i]["paragraphs"][0]}
              </p>
              <p>
              ${data[i]["paragraphs"][1]}
              </p>
              <p class="section4_logo">
                <span
                  class="span_section4"
                  ;
                  style="background-position: 0px -92px"
                ></span>
                <span
                  class="span_section4"
                  ;
                  style="background-position: 0px -368px"
                ></span>
                <span
                  class="span_section4"
                  ;
                  style="background-position: 0px -276px"
                ></span>
              </p>
            </div>
          </div>
        </div>
          `
        );
      }
    });
}

getSection4Data();

// [
//   {
//     "img_url": "https://truejuice.vn/images/home/usp-1.jpg",
//     "head_title": "Liệu trình chuyên biệt",
//     "paragraphs": [
//       "Thiết kế bởi 'Natural Juice Therapist' (NTJ) - Ms. Trần Thanh Huyền là người đầu tiên tại Việt Nam nghiên cứu đạt chứng nhận về liệu pháp cải thiện sức khỏe với nước ép tự nhiên - liệu pháp được sử dụng bởi các chuyên gia dinh dưỡng hàng đầu trên thế giới.",
//       "Mỗi liệu trình được thiết kế và sử dụng các đặc tính chữa bệnh có trong các loại nước ép từ rau xanh, củ quả và các siêu thực phẩm(superfood) cung cấp enzymes, vitamins, khoáng chất, acid amin, chất chống oxy hóa giúp cơ thể chữa lành và có sức khỏe tối ưu."
//     ]
//     },
//     {
//       "img_url": "https://truejuice.vn/images/home/usp-2.jpg",
//       "head_title": "Tiêu chuẩn sức khỏe",
//       "paragraphs": [
//         "100% nguyên liệu rau xanh canh tác hữu cơ rõ ràng nguồn gốc. Luôn tươi ép theo mỗi liệu trình cải thiện sức khỏe từng khách hàng.",
//         "Nguyên chất. Không pha loãng, không sử dụng đường tinh luyện, chất bảo quản và phụ gia. Chai thủy tinh, bao bì đạt tiêu chuẩn, bao bì thân thiện môi trường. Không sử dụng túi nylon, chai nhựa."
//       ]
//       },
//       {
//         "img_url": "https://truejuice.vn/images/home/usp-3.jpg",
//         "head_title": "Công nghệ và dịch vụ hàng đầu",
//         "paragraphs": [
//           "Nước ép True Juice sử dụng công nghệ ép lạnh thủy lực hàng đầu tại Việt Nam. Quy trình sản xuất đảm bảo HACCP an toàn và chất lượng.",
//           "Nước ép True Juice sử dụng công nghệ ép lạnh thủy lực hàng đầu tại Việt Nam. Quy trình sản xuất đảm bảo HACCP an toàn và chất lượng."
//         ]
//         }
// ]