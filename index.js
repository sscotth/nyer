const { join } = require('path')

const {
  app,
  BrowserWindow,
  globalShortcut,
  Tray,
} = require('electron')

app.dock.hide()

app.on('ready', () => {
  const audio = new BrowserWindow({ width: 1, height: 1, show: false })
  audio.hide()
  audio.loadURL(`file://${__dirname}/src/audio.html`)

  const nyer = () => audio.webContents.send('nyer')

  const tray = new Tray(join(__dirname, 'IconTemplate.png'))
  tray.setToolTip('Nyer!')
  tray.on('click', nyer)
  tray.on('double-click', nyer)
  tray.on('right-click', nyer)

  globalShortcut.register('CmdOrCtrl+Shift+S', nyer)
})
