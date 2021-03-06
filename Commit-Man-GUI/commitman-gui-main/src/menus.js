//import { ipcRenderer, shell } from 'electron';
const { ipcRenderer, remote } = window.require('electron');

export const menus = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open Repo',
        click: (item, win, e) => {
          ipcRenderer.send('open-repo');
        }
      },
      {
        label: 'Open Terminal',
        click: (item, win, e) => {
          ipcRenderer.send('open-in-terminal', "C:\\Users");
        }
      },
      {
        label: 'Exit',
        click: (item, win, e) => {
          remote.getCurrentWindow().close();
        }
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About',
        click: (item, win, e) => {
          ipcRenderer.send('about-dialog-show');
        }
      }
    ]
  }
];