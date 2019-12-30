import { UserUpdateModule } from './user-update.module';

describe('UserUpdateModule', () => {
  let userUpdateModule: UserUpdateModule;

  beforeEach(() => {
    userUpdateModule = new UserUpdateModule();
  });

  it('should create an instance', () => {
    expect(userUpdateModule).toBeTruthy();
  });
});
