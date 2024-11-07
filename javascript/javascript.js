// JavaScript Document
document.querySelectorAll("nav a").forEach(anchor => {
	anchor.addEventListener("click",
function(event) {
		event.preventDefault();
		
		const targetId =
this.getAttribute("href").substring(1);
		const targetElement =
Document.getElementById(targetId);
		
		//Kaydırma Animasyonu
		window.scrollTo({
			top: targetElement.offsetTop - 50,
			behavior: "smooth"
		})
	})
})