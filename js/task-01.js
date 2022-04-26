const categoryEl = document.querySelectorAll(".item").forEach((element) => {
    console.log('Category:' , element.firstElementChild.textContent);
    console.log('Elements:' , element.querySelectorAll('li').length);
})