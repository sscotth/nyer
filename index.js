const {
  app,
  BrowserWindow,
  globalShortcut,
  Tray,
} = require('electron')

app.dock.hide()

app.on('ready', () => {
  const audio = new BrowserWindow({ width: 1, height: 1, show: false })
  const nyer = () => console.log('nyer') //audio.webContents.send('nyer')

  audio.hide()
  audio.loadURL(`file://${__dirname}/src/audio.html`)

  const menu = new BrowserWindow({ width: 200, height: 100, show: false, frame: false })
  menu.hide()
  menu.loadURL(`file://${__dirname}/src/menu.html`)

  menu.webContents.openDevTools();
  menu.webContents.on('devtools-opened', () => {
      setImmediate(() => {
          // do whatever you want to do after dev tool completely opened here
          menu.focus();
      });
  });

  const tray = new Tray('IconTemplate.png')
  tray.setToolTip('Nyer!')
  tray.on('click', nyer)
  tray.on('double-click', nyer)
  tray.on('right-click', () => {
    nyer()
    toggleMenu()
  })

  globalShortcut.register('Alt+Shift+A', nyer)

  const toggleMenu = () => {
    if (menu.isVisible()) {
      menu.hide()
    } else {
      showMenu()
    }
  }

  const showMenu = () => {
    const trayPos = tray.getBounds()
    const menuPos = menu.getBounds()
    let x, y = 0
    if (process.platform == 'darwin') {
      x = Math.round(trayPos.x + (trayPos.width / 2) - (menuPos.width / 2))
      y = Math.round(trayPos.y + trayPos.height)
    } else {
      x = Math.round(trayPos.x + (trayPos.width / 2) - (menuPos.width / 2))
      y = Math.round(trayPos.y + trayPos.height * 10)
    }


    menu.setPosition(x, y, false)
    menu.show()
    menu.focus()
  }
})
