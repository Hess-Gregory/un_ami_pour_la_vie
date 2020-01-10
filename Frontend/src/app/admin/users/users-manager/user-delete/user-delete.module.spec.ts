import { UserDeleteModule } from './user-delete.module';

describe('UserDeleteModule', () => {
  let userDeleteModule: UserDeleteModule;

  beforeEach(() => {
    userDeleteModule = new UserDeleteModule();
  });

  it('should create an instance', () => {
    expect(userDeleteModule).toBeTruthy();
  });
});
