function displayCurrentYear() {
	const currentYear = new Date().getFullYear();
	document.getElementById("footer-year").textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", displayCurrentYear);

