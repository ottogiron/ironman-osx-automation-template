import Util from './util';

console.log(Util.Hello("{{.Values.moduleName | default "automation module!" }}"));