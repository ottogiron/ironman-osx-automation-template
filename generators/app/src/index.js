import Util from './util';

const app = Application.currentApplication();
app.includeStandardAdditions = true;
app.say(Util.Hello("{{.Values.moduleName | default "spaceman"}}"));