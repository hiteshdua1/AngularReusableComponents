import { sandboxOf } from 'angular-playground';
import { ActivityStreakComponent } from './activity-streak.component';

export default sandboxOf(ActivityStreakComponent)
    .add('(Default)', {
        template: `<activity-streak></activity-streak>`
    });
