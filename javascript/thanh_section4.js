function getSection4Data() {
  const big_div_section4 = document.getElementById("section4_big_container");

  fetch("https://5f749eab1cf3c900161cd568.mockapi.io/api/section4")
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
