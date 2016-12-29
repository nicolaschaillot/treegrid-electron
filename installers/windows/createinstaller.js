const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
     .then(createWindowsInstaller)
     .catch((error) => {
     console.error(error.message || error)
     process.exit(1)
 })

function getInstallerConfig () {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'dist')

    return Promise.resolve({
       appDirectory: path.join(outPath, 'MyWFDashboard-win32-x64/'),
       authors: 'Nicolas Chaillot',
       noMsi: true,
       outputDirectory: path.join(outPath, 'installers/windows-installer'),
       exe: 'MyWFDashboard.exe',
       setupExe: 'MyDashboardInstaller.exe',
       setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'logo.ico')
   })
}
