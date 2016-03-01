var sub1 = document.getElementsByClassName('sub-menu1')[0],
	main = document.getElementsByClassName('main-menu__item'),
	sub2 = document.getElementsByClassName('sub-menu2')[0],
	main2 = document.getElementsByClassName('main-menu__item2')[0],
	sub3 = document.getElementsByClassName('sub-menu3')[0],
	main3 = document.getElementsByClassName('main-menu__item3')[0],
	sub4 = document.getElementsByClassName('sub-menu4')[0],
	main4 = document.getElementsByClassName('main-menu__item4')[0];
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
// main1.addEventListener('click', function() {
// 	var display = sub1.style.display;
// 	if (display == "" || display == "none") {
// 	sub1.style.cssText= "display:block;"; 
// 	} else {
// 		sub1.style.cssText= "display:none;";
// 	}
// });
// main2.addEventListener('click', function() {
// 	var display = sub2.style.display;
// 	if (display == "" || display == "none") {
// 	sub2.style.cssText= "display:block;"; 
// 	} else {
// 		sub2.style.cssText= "display:none;";
// 	}
// })
// main3.addEventListener('click', function() {
// 	var display = sub3.style.display;
// 	if (display == "" || display == "none") {
// 	sub3.style.cssText= "display:block;"; 
// 	} else {
// 		sub3.style.cssText= "display:none;";
// 	}
// })
// main4.addEventListener('click', function() {
// 	var display = sub4.style.display;
// 	if (display == "" || display == "none") {
// 	sub4.style.cssText= "display:block;"; 
// 	} else {
// 		sub4.style.cssText= "display:none;";
// 	}
// })
