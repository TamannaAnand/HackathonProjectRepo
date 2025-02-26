function isValidUser(username, password) {
    const validUsers = [
      { username: 'titans', password: 'password123' },
    ];
    return validUsers.some(user => user.username === username && user.password === password);
  }
  
  test('should return true for valid username and password', () => {
    const result = isValidUser('titans', 'password123');
    expect(result).toBe(true);
  });
  
  test('should return false for invalid username', () => {
    const result = isValidUser('admin', 'password123');
    expect(result).toBe(false);
  });

  test('should return false for invalid password', () => {
    const result = isValidUser('titans', 'wrongpassword');
    expect(result).toBe(false);
  });
  