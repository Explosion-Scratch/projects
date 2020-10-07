function insertHR() {
	var articles = document.getElementsByTagName('h1')
		for (var i = 0; i < articles.length; i ++) {
				articles[i].parentNode.insertBefore(document.createElement('hr'), articles[i].nextSibling)
		}
}
window.onload = insertHR