import { sandboxOf } from 'angular-playground';
import { CountdownTimerComponent } from './countdown-timer.component';

export default sandboxOf(CountdownTimerComponent)
  .add('Countdown Timer Component', {
    template: `<countdown-timer></countdown-timer>`
  });
