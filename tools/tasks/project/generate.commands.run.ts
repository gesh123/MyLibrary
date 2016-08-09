import * as gulpLoadPlugins from "gulp-load-plugins";
import * as util from "gulp-util";

const plugins: any = gulpLoadPlugins();

/**
 * This task runs the command generator powershell script.
 * It will generate commands, data structures, srializators, constants and maps in src/client/app/Poker/Network/Protocol
 */
export = () => {
	return plugins.run("../tools/commandsGenerator/GenerateCommands.ps1", {usePowerShell :true} ).exec();
};
