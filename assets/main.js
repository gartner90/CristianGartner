var sideMenu = false;

function openPage(num) {
	var body = document.getElementsByTagName("body")[0];
	var elems = document.querySelectorAll(".icon-link");
	var contents = document.querySelectorAll(".cg-col-data");
	if (num == 0) {
		body.classList.add("home");
	} else {
		body.classList.remove("home");
	}
	
	[].forEach.call(elems, function(el, ind) {
	    if (ind == num) {
	    	el.classList.add("active");
	    } else {
	    	el.classList.remove("active");
	    }
	});

	[].forEach.call(contents, function(el, ind) {
	    if (ind == num) {
	    	el.classList.remove("hide");
	    } else {
	    	el.classList.add("hide");
	    }
	});
	sideMenu = true;
	openMenu();
}

function openMenu() {
	var body = document.getElementsByTagName("body")[0];
	sideMenu = !sideMenu;
	if (sideMenu) {
		body.classList.add("menu");
	} else {
		body.classList.remove("menu");
	}
	if (!sideMenu) {
		var dataCotnent = document.getElementsByClassName('cg-col-data');
		
		[].forEach.call(dataCotnent, function(el, ind) {
		    el.scrollTo(0,0);
		});
	}
}
