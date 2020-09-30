import { ReactWidget } from '@jupyterlab/apputils';

import React, { useState } from 'react';

import AnimatedNumber from 'react-animated-number';

/**
 * React component for a counter.
 *
 * @returns The React component
 */
const CounterComponent = (props: {animate: boolean}): JSX.Element => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {
        // Conditional rendering.
        props.animate?
          <div>
            <div>
              You earned{" "}
              <AnimatedNumber
                style={{
                  transition: '1s ease-out',
                  transitionProperty:
                    'background-color, color'
                }}
                stepPrecision={0}
                value={counter}
              />
              !
            </div>
            <button
              onClick={(): void => {
                setCounter(counter + 1000);
              }}
            >
              Increment
            </button>
          </div>
        :
          <div>
            <p>You earned {counter}!</p>
            <button
              onClick={(): void => {
                setCounter(counter + 1000);
              }}
            >
              Increment
            </button>
          </div>
      }
    </div>
  );
};

/**
 * A Counter Lumino Widget that wraps a CounterComponent.
 */
class CounterWidget extends ReactWidget {
  private animate: boolean;
  /**
   * Constructs a new CounterWidget.
   */
  constructor(animate: boolean) {
    super();
    this.animate = animate;
    this.addClass('jp-Quirkshop-React');
  }
  render(): JSX.Element {
    return <CounterComponent 
      animate={this.animate}
      />;
  }
}

export default CounterWidget;
