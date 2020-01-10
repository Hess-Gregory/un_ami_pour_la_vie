import { UsersInfoModule } from './users-info.module';

describe('UsersInfoModule', () => {
  let usersInfoModule: UsersInfoModule;

  beforeEach(() => {
    usersInfoModule = new UsersInfoModule();
  });

  it('should create an instance', () => {
    expect(usersInfoModule).toBeTruthy();
  });
});
