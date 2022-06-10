import operate from '../../Logic/operate';

describe('all check the operations', () => {
  describe('1) check the sum', () => {
    test('should return 3 + 17 = 20', () => {
      const sum = operate(3, 17, '+');
      expect(sum).toBe('20');
    });
  });

  describe('2) check the minus', () => {
    test('should return 30 - 10 = 20', () => {
      const minus = operate(30, 10, '-');
      expect(minus).toBe('20');
    });
  });

  describe('3) check the multiplication', () => {
    test('should return 30  x 10 = 300', () => {
      const minus = operate(30, 10, 'x');
      expect(minus).toBe('300');
    });
  });

  describe('3) check the multiplication', () => {
    test('should return 30  ÷ 10 = 300', () => {
      const minus = operate(30, 10, '÷');
      expect(minus).toBe('3');
    });
  });
});
