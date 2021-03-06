var data = require("sdk/self").data;

var text_entry = require("sdk/panel").Panel({
	contentURL: data.url("WikipediaPopup.html"),
	contentScriptFile: data.url("getWikiPage.js")
	
});

var contextMenu = require("sdk/context-menu");
 var menuItem = contextMenu.Item({
  label: "Wikipedia This",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    text_entry = require("sdk/panel").Panel({
	width: 500,
	height:400,
     // contentURL: data.url("http://www.en.wikipedia.org/wiki/" + selectionText + "?printable=yes"),
contentURL: data.url("https://en.wikipedia.org/wiki/Special:Search/" + selectionText),
      contentScriptFile: data.url("getWikiPage.js?text=selectionText"),
contentStyleFile: data.url("popup.css")
});
	handleClick()
  }
});

function handleClick(state) {
  text_entry.show();
}

text_entry.on("show", function() {
  text_entry.port.emit("show");
});

