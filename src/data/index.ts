
export {default as Settings} from './settings';
export {default as Session} from './session';

const _key = (key: string) => `tessatalk_${key}`;

export default {
  get(key:string, fallback:any = null): any | null {
    var res = localStorage.getItem(_key(key));
    if(res != null) {
      return JSON.parse(res);
    }

    return fallback;
  },

  set(key:string, value:any) {
    localStorage.setItem(
      _key(key), 
      JSON.stringify(value)
    );
  },

  delete(key:string): any | null {
    let res = this.get(_key(key));

    if(res != null) {
      localStorage.removeItem(_key(key));
    }

    return res;
  },

  clear() {
    localStorage.clear();
  }
}
