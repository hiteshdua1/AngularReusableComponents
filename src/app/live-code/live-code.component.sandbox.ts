import { sandboxOf } from 'angular-playground';
import { LiveCodeComponent } from './live-code.component';

export default sandboxOf(LiveCodeComponent)
    .add('(Css Default)', {
        template: `<live-code></live-code>`
    });
