const { app, Menu, Tray } = require("electron");
const notify = require('electron-main-notification');

let tray = null;
app.on("ready", () => {
  tray = new Tray("images/tray_icon_purple.png");
  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", type: "radio" },
    { label: "Item2", type: "radio" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "radio" },
    { label: "Quit", role: "quit" },
    {
      label: "Log",
      click() {
        console.log("clicked the button");
      }
    },
    {
      label: "Change Icon",
      click() {
        tray.setImage("images/tray_icon_black.png");
      }
    }
  ]);
  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);
  setInterval(function nofitySeconds(){
    notify('Notification incoming', {body: 'Super easy to use foo!'})
  }, 1000);
});
