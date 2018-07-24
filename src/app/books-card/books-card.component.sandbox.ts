import { sandboxOf } from 'angular-playground';
import { BooksCardComponent } from './books-card.component';

export default sandboxOf(BooksCardComponent)
    .add('(Css Default)', {
        template: `<books-card></books-card>`
    });
