import { AllUsersModule } from './all-users.module';

describe('AllUsersModule', () => {
  let allUsersModule: AllUsersModule;

  beforeEach(() => {
    allUsersModule = new AllUsersModule();
  });

  it('should create an instance', () => {
    expect(allUsersModule).toBeTruthy();
  });
});
