function getSection8Data() {
    const big_div_section8 = document.getElementById("section8_big_div");
  
    fetch("https://truejuice.free.beeceptor.com/section8")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          big_div_section8.insertAdjacentHTML("beforeend",  `<img class="section8_img"  src="${data[i]["img_url"]}" >`)
          }
      });
  }
  
  getSection8Data();

  // [
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/1.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/2.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/3.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/4.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/5.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/6.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/7.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/8.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/9.jpg"
  //   },
  //   {
  //     "img_url": "https://truejuice.vn/images/home/community/10.jpg"
  //   }
  // ]
