import { UserAddModule } from './user-add.module';

describe('UserAddModule', () => {
  let userAddModule: UserAddModule;

  beforeEach(() => {
    userAddModule = new UserAddModule();
  });

  it('should create an instance', () => {
    expect(userAddModule).toBeTruthy();
  });
});
