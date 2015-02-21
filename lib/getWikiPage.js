// Listen for the "show" event being sent from the
// main add-on code. It means that the panel's about
// to be shown.
//
// Set the focus to the text area so the user can
// just start typing.

self.port.on("show", function onShow() {
  //textArea.focus();
  addContent();
});

function addContent() {
  var content = document.createElement('div');
  div.className = 'wiki';

  document.getElementById('wikiBox').appendChild(div);
}

self.port.on("show", function onShow() {
  document.getElementById("wikiBox").src = "http://en.wikipedia.org/wiki/" + text + "?printable=yes";
});
