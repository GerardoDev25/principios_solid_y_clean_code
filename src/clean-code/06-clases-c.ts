(() => {
  type Gender = 'M' | 'F';

  interface PersonPros {
    name: string;
    gender: Gender;
    birtdate: Date;
  }

  interface UserProps {
    email: string;
    role: string;
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  interface UserSettingsProps {
    name: string;
    gender: Gender;
    birtdate: Date;
    email: string;
    role: string;
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

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return this.role;
    }
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      birtdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ birtdate, gender, name });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
      this.user = new User({ email, role });
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

  console.log(userSettings);
})();
