document.addEventListener('DOMContentLoaded', () => {
	const content = document.querySelector('#content');
	try {
		fetch('https://ipapi.co/json/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      content.innerHTML = "<h1 class=\"text-white fs-3\">Informações de IP:</h1>";
      Object.entries(data).forEach(([key, value]) => {
        content.innerHTML = content.innerHTML + `<p class="text-white p-0 m-0">${key}: <span class="text-secondary">${value}</span></p>`;
      });
    });
	} catch (err) {
    content.innerText = err;
	}
});
