import * as gulpLoadPlugins from "gulp-load-plugins";
import * as util from "gulp-util";

const plugins: any = gulpLoadPlugins();

/**
 * This task runs the xmpl modifier scripts
 * It will modify the input xml files so they are in the correct format to be read by the commadns generator script.
 */
export = () => {
  return plugins.run("../tools/commandsGenerator/ModifyXMLs.ps1", {usePowerShell :true} ).exec();
};
