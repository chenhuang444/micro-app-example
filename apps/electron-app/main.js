const { app, BrowserWindow } = require('electron')

app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
app.commandLine.appendSwitch('ignore-certificate-errors', 'true');
app.commandLine.appendSwitch('disable-site-isolation-trials');
app.commandLine.appendSwitch('disable-features', 'BlockInsecurePrivateNetworkRequests');
app.commandLine.appendSwitch('disable-web-security');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
    }
  })

  win.loadURL('http://localhost:3000');
  setTimeout(() => {
    win.webContents.openDevTools({mode: 'detach'});
  }, 1500)
}

app.whenReady().then(() => {
  createWindow()
})