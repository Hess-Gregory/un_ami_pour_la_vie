import { AdminManagerModule } from './admin-manager.module';

describe('AdminManagerModule', () => {
  let adminManagerModule: AdminManagerModule;

  beforeEach(() => {
    adminManagerModule = new AdminManagerModule();
  });

  it('should create an instance', () => {
    expect(adminManagerModule).toBeTruthy();
  });
});
