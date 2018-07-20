import { sandboxOf } from 'angular-playground';
import { AboutComponent } from './about.component';

export default sandboxOf(AboutComponent)
  .add('Default', {
    template: `<about></about>`
  });
