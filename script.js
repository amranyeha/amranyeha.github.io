const side = document.querySelector('.nav')
document.querySelector('#ham').onclick = () => {
	side.classList.toggle('active')
}
// 
const ham = document.querySelector('#ham')
document.addEventListener('click', function (e) {
	if (!side.contains(e.target) && !ham.contains(e.target)) {
		side.classList.remove('active')
	}
})