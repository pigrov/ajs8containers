import Validator from '../components/app';

describe('validateUsername from Validator class: ', () => {
  const cases = [
    ['_username'],
    ['username_'],
    ['-username'],
    ['username-'],
    ['username1'],
    ['1username'],
    ['абв'],
    ['user1234'],
  ];

  test.each(cases)('method validateUsername should throw Error', (item) => {
    expect(() => Validator.check(item)).toThrow(Error);
  });

  test('valid user name', () => {
    expect(Validator.check('user_123-super-char')).toBeTruthy();
  });
});