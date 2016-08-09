import * as gulpLoadPlugins from "gulp-load-plugins";
import * as util from "gulp-util";

const plugins: any = gulpLoadPlugins();

/**
 * This task sets the PowerShell execution policy so scripts can be run.
 * If the execution policy is not correct generate.commands.modify.xmls and generate.commands.run taks will not execute properly.
 */
export = () => {
	return plugins.run("powershell Set-ExecutionPolicy Unrestricted -Scope CurrentUser").exec();
};
