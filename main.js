document.onload = insertHR('h1');
document.onload = insertHR('h2');
document.onload = insertHR('h1');
document.onload = alert('hi');

function insertHR(element) {
	var articles = document.getElementsByTagName(element)
		for (var i = 0; i < articles.length; i ++) {
				articles[i].parentNode.insertBefore(document.createElement('hr'), articles[i].nextSibling);
		};
};
