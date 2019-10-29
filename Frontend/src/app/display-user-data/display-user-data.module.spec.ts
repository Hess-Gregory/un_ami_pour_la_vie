import { DisplayUserDataModule } from './display-user-data.module';

describe('SignupModule', () => {
  let displayuserdataModule: DisplayUserDataModule;

  beforeEach(() => {
    displayuserdataModule = new DisplayUserDataModule();
  });

  it('should create an instance', () => {
    expect(displayuserdataModule).toBeTruthy();
  });
});
