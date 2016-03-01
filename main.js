var main = document.getElementsByClassName('main-menu__item');
	for (var i = 0; i < main.length; i++) {
		main[i].addEventListener('click', function() {
			var elem = this.nextElementSibling,
			    display = elem.style.display;
			if (display == "" || display == "none") {
				elem.style.cssText= "display:block;";
				this.style.cssText="background-color : #ff8663";
				this.lastElementChild.style.cssText="background-image: url('up.png');";
			} else {
				elem.style.cssText= "display:none; ";
				this.style.cssText="background-color : #e7e7e7";
				this.lastElementChild.style.cssText="background-image: url('down.png');";
				}
		});
	}
