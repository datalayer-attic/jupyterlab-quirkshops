import { ReactWidget } from '@jupyterlab/apputils';

import React, { useState } from 'react';

/**
 * React component for a counter.
 *
 * @returns The React component
 */
const CounterComponent = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>You clicked {counter} times!</p>
      <button
        onClick={(): void => {
          console.log('--- CounterComponent', counter);
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

/**
 * A Counter Lumino Widget that wraps a CounterComponent.
 */
class CounterWidget extends ReactWidget {
  /**
   * Constructs a new CounterWidget.
   */
  constructor() {
    super();
    this.addClass('jp-Quirkshop-React');
  }
  render(): JSX.Element {
    return <CounterComponent />;
  }
}

export default CounterWidget;
