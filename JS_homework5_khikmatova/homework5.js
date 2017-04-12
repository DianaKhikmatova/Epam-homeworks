var tags = ["html", "body", "head", "div", "ul", "ol", "li", "a", "p", "input", 
	"button", "h1", "h2", "h3", "h4", "h5", "h6", "img", "canvas", "header", 
	"footer", "table", "td", "tr", "th", "form", "i", "b", "strong", "nav", "meta", 
	"main", "video", "audio"];
for (let i = 0; i < tags.length; i++) {
	var elements = document.getElementsByTagName(tags[i]);
	console.log(tags[i] + ": " + elements.length);
}

var childNodesBody = document.body.childNodes;
var childNodesHead = document.head.childNodes;
var count = 0;
for (var i = 0; i < childNodesBody.length; i++) {
if (childNodesBody[i].nodeType === 3) {
		count++;
    }
}
for (var i = 0; i < childNodesHead.length; i++) {
if (childNodesHead[i].nodeType === 3) {
		count++;
    }
}	
console.log("Text nodes: " + count);

