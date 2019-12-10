import { AddressBookModule } from './address-book.module';

describe('AddressBookModule', () => {
  let addressBookModule: AddressBookModule;

  beforeEach(() => {
    addressBookModule = new AddressBookModule();
  });

  it('should create an instance', () => {
    expect(addressBookModule).toBeTruthy();
  });
});
