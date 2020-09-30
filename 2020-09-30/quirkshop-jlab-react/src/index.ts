import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

import LuminoQS from './LuminoQS';

/**
 * Initialization data for the quirkshop-jlab-react extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'quirkshop-jlab-react',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu
    ) => {
    console.log(
      "%cJupyterLab extension quirkshop-jlab-react is activated! yeah!",
      "font-size:30px");

      const { commands, shell } = app;
  
      const command = 'widgets:open-lumino-tab';
      commands.addCommand(command, {
        label: 'Open a Lumino Widget in a Tab',
        caption: 'Open a Lumino Widget in a TabOpen a Lumino Widget in a Tab',
        execute: () => {
          const widget = new LuminoQS();
          shell.add(widget, 'main');
        }
      });
      palette.addItem({ command, category: 'Quirkshop React' });
  
      const quirkshopMenu = new Menu({ commands });  
      quirkshopMenu.title.label = 'Widget Example';
      mainMenu.addMenu(quirkshopMenu, { rank: 80 });
      quirkshopMenu.addItem({ command });

    }
};

export default extension;
