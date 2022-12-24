(() => {
  type Gender = 'M' | 'F';

  class Person {
    constructor(public name: string, public gender: Gender, public birtdate: Date) {}
  }

  class User extends Person {
    public lastAccess: Date = new Date();

    constructor(
      public email: string,
      public role: string,
      public name: string,
      public gender: Gender,
      public birtdate: Date
    ) {
      super('Gerardo', 'M', new Date());
    }

    checkCredentials() {
      return this.role;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      public email: string,
      public role: string,
      public name: string,
      public gender: Gender,
      public birtdate: Date
    ) {
      super(email, role, 'Gerardo', 'M', new Date());
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'fernando@google.com',
    'Admin',
    'Fernando',
    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings });
})();
