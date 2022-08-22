import LoginValidator from '../components/app';

describe('validate login from LoginValidator class: ', () => {
  const cases = [
    ['_errorlogin'], 
    ['errorlogin_'],
    ['-errorlogin'],
    ['errorlogin-'],
    ['errorlogin1'],
    ['1errorlogin'],
    ['ОшибкаЛогина'],
    ['login123'],
  ];

  test.each(cases)('method LoginValidator should throw Error', (item) => {
    expect(() => LoginValidator.check(item)).toThrow(Error);
  });

  test('valid login', () => {
    expect(LoginValidator.check('user_123-super-char')).toBeTruthy();
  });
});