function getSection8Data() {
    const big_div_section8 = document.getElementById("section8_big_div");
  
    fetch("https://5f749eab1cf3c900161cd568.mockapi.io/api/section8")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          big_div_section8.insertAdjacentHTML("beforeend",  `<img class="section8_img"  src="${data[i]["img_url"]}" >`)
          }
      });
  }
  
  getSection8Data();
