function insertHR(element) {
	var articles = document.getElementsByTagName(element)
		for (var i = 0; i < articles.length; i ++) {
				articles[i].parentNode.insertBefore(document.createElement('hr'), articles[i].nextSibling);
		};
};
window.onload = insertHR('h1');
window.onload = insertHR('h2');
window.onload = insertHR('h1');