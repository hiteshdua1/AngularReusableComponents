import { sandboxOf } from 'angular-playground';
import { CountdownTimerComponent } from './countdown-timer.component';

export default sandboxOf(CountdownTimerComponent)
  .add('Default', {
    template: `<countdown-timer></countdown-timer>`
  });
