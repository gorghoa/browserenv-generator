export default class EnvPublisher
{

  constructor(public env: Object, protected prefix: string) {

  }

  filterEnvironmentVariables(): Object {

    var re = new RegExp("^"+ this.prefix +"([a-zA-Z0-9_]+)$");

    var keys = Object.keys(this.env).filter((key) => {
      return re.test(key);
    }).map((key) => {
      return [key, key.match(re)[1]];
    });
 
    var results = {};
    for(var i = 0; i<keys.length; i++) {
      results[keys[i][1]] = this.env[keys[i][0]];
    }


    return results;
  }


  generateBrowserEnv(): string {

    var envs = this.filterEnvironmentVariables();
    var init = `(function (window) {
                window.__env = window.__env || {};
                `;

    var end = ` }(this));`;

    var middle = "";

    for (var i in envs) {
      middle += " window.__env."+i+" = '" + envs[i] +"';\n";
    }


    return init + middle + end;
  }


}
