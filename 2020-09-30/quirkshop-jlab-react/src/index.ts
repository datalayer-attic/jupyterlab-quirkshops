import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the quirkshop-jlab-react extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'quirkshop-jlab-react',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log(
      "%cJupyterLab extension quirkshop-jlab-react is activated! yeah!",
      "font-size:30px");
  }
};

export default extension;
