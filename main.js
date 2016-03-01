var main = document.getElementsByClassName('main-menu__item'),
	for (var i = 0; i < main.length; i++) {
		main[i].addEventListener('click', function() {
			var elem = this.lastElementChild,
			    display = elem.style.display;
			if (display == "" || display == "none") {
			elem.style.cssText= "display:block;"; 
			} else {
			elem.style.cssText= "display:none;";
				}
		});
	}
