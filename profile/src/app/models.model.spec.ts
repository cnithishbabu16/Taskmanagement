import { ProfileService1 } from './models.model';
import { ProfileService } from './profile.service';

describe('Models', () => {
  it('should create an instance', () => {
    expect(new ProfileService()).toBeTruthy();
  });
});
