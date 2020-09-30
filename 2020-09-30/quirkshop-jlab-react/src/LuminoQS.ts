import { BoxPanel, Widget } from '@lumino/widgets';

class LuminoQS extends BoxPanel {

  private counterValue = 0;

  private counter: Widget;
  private button: Widget;

  constructor() {
    super();
    this.addClass('jp-Quirkshop-React');
    this.id = 'simple-widget-example';
    this.direction = 'top-to-bottom';
    this.title.label = 'Lumino Quirkshop';
    this.title.closable = true;
    this.counter = this.createCounter();
    this.addWidget(this.counter);
    this.button = this.createButton();
    this.addWidget(this.button);
  }

  private createButton(): Widget {
    const node = document.createElement('div');
    const content = document.createElement('div');
    const button = document.createElement('button');
    button.addEventListener('click', (e:Event) => this.increment(e));
    button.name = 'Counter Button';
    button.innerHTML = 'Increment';
    content.appendChild(button);
    node.appendChild(content);
    return new Widget({node: node})
  }

  private createCounter(): Widget {
    const node = document.createElement('div');
    node.innerHTML = 'You clicked ' + this.counterValue.toString() + ' times';
    return new Widget({node: node})
  }

  private increment(e:Event) {
    this.counterValue++;
    console.log('--- LuminoQS', this.counterValue);
    this.update();
    this.onUpdateRequest
    this.layout.removeWidget(this.counter);
    this.counter = this.createCounter();
    this.insertWidget(0, this.counter);
  }

}

export default LuminoQS;
