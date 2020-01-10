import { UsersManagerModule } from './users-manager.module';

describe('UsersManagerModule', () => {
  let usersManagerModule: UsersManagerModule;

  beforeEach(() => {
    usersManagerModule = new UsersManagerModule();
  });

  it('should create an instance', () => {
    expect(usersManagerModule).toBeTruthy();
  });
});
