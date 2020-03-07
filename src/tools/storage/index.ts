class AWStorage {

  private storage: Storage;

  constructor(type: 'localStorage' | 'sessionStorage' = 'localStorage') {
    if (['sessionStorage', 'localStorage'].indexOf(type) === -1) {
      throw console.error('Type can only be session/local storage');
    }
    this.storage = window[type];
  }

  save(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  saveMulti(datas: any) {
    if (datas instanceof Array) {
      for (const item of datas) {
        this.save(item.key, item.value);
      }
    } else if (datas instanceof Object) {
      const keys = Object.keys(datas);
      for (const key of keys) {
        this.save(key, datas[key]);
      }
    }
  }

  read(key: string) {
    try {
      let result = JSON.parse(this.storage.getItem(key) as any);
      return result;
    } catch (err) {
      return this.storage.getItem(key);
    }
  }

  readMulti(keys: string[]) {
    return keys.map(key => this.read(key));
  }

  clear(key: string) {
    this.storage.removeItem(key);
  }

  clearMulti(keys: string[]) {
    for (const key of keys) {
      this.clear(key);
    }
  }

  clearAll() {
    this.storage.clear();
  }
}

export const sessionStorage = new AWStorage('sessionStorage');
export const localStorage = new AWStorage('localStorage');
