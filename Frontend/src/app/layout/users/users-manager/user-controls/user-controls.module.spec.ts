import { UserControlsModule } from './user-controls.module';

describe('UserControlsModule', () => {
  let userControlsModule: UserControlsModule;

  beforeEach(() => {
    userControlsModule = new UserControlsModule();
  });

  it('should create an instance', () => {
    expect(userControlsModule).toBeTruthy();
  });
});
