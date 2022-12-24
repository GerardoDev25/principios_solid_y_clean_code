(() => {
  type Gender = 'M' | 'F';

  interface PersonPros {
    name: string;
    gender: Gender;
    birtdate: Date;
  }

  interface UserProps extends PersonPros {
    email: string;
    role: string;
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Person {
    public birtdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birtdate }: PersonPros) {
      this.name = name;
      this.gender = gender;
      this.birtdate = birtdate;
    }
  }

  class User extends Person {
    public lastAccess: Date = new Date();
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birtdate }: UserProps) {
      super({ name, gender, birtdate });
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return this.role;
    }
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      birtdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ birtdate, email, gender, name, role });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    birtdate: new Date('1985-10-21'),
    email: 'fernando@google.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Fernando',
    role: 'Admin',
    workingDirectory: '/usr/home',
  });

  console.log({ userSettings });
})();
