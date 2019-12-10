import { UsersActivateModule } from './users-activate.module';

describe('UsersActivateModule', () => {
  let usersActivateModule: UsersActivateModule;

  beforeEach(() => {
    usersActivateModule = new UsersActivateModule();
  });

  it('should create an instance', () => {
    expect(usersActivateModule).toBeTruthy();
  });
});
