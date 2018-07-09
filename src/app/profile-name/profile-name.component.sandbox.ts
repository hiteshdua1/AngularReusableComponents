import { sandboxOf } from 'angular-playground';
import { ProfileNameComponent } from './profile-name.component';

export default sandboxOf(ProfileNameComponent)
  .add('Profile Name Component (Default)', {
    template: `<profile-name
    firstName="Hitesh"
    lastName="Dua"
    [rotatedMode]=false
    imageUrl='https://instagram.fdel1-2.fna.fbcdn.net/vp/e4432b65619bc9f21df4d925d4e0178e/5BD8D2CA/t51.2885-19/s150x150/14730462_693741597462287_3772625644182044672_a.jpg'
    >
    </profile-name>`
  })
  .add('Profile Name Component (Rotated)', {
    template: `<profile-name
    firstName="Hitesh"
    lastName="Dua"
    [rotatedMode]=true
    imageUrl='https://instagram.fdel1-2.fna.fbcdn.net/vp/e4432b65619bc9f21df4d925d4e0178e/5BD8D2CA/t51.2885-19/s150x150/14730462_693741597462287_3772625644182044672_a.jpg'
    >
    </profile-name>`
  });
