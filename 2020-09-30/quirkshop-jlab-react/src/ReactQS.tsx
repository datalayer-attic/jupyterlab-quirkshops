import { ReactWidget } from '@jupyterlab/apputils';

import React, { useState } from 'react';

import AnimatedNumber from 'react-animated-number';
import Button from '@material-ui/core/Button';

import { getRandomInt } from './util';

/**
 * React component for a counter.
 *
 * @returns The React component
 */
const CounterComponent = (props: {animate: boolean}): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const doIncrement = () => {
    const increment = getRandomInt(10000);
    setIncrement(increment);
    setCounter(counter + increment);
  }
  return (
    <div>
      {
        // Conditional rendering.
        props.animate?
          <div>
            <div>
              You earned{" "}
              <AnimatedNumber
                duration={increment / 10}
                stepPrecision={0}
                value={counter}
              />
              !
            </div>
            <button
              onClick={() => { doIncrement() }}
            >
              Increment
            </button>
            <div>
              <Button 
                variant="contained" 
                color="default" 
                onClick={() => { doIncrement() }}
              >
                Increment
              </Button>
            </div>
          </div>
        :
          <div>
            <p>You earned {counter}!</p>
            <button
              onClick={() => { doIncrement() }}
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
    this.addClass('jp-Quirkshop-React');
    this.animate = animate;
  }
  protected render(): JSX.Element {
    return <CounterComponent 
      animate={this.animate}
      />;
  }
}

export default CounterWidget;
