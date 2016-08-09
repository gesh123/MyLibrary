import {join} from 'path';

import {SeedConfig} from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

	PROJECT_TASKS_DIR = join( process.cwd(), this.TOOLS_DIR, 'tasks', 'project' );
	FONTS_DEST = `${this.APP_DEST}/fonts`;
	FONTS_SRC = ['node_modules/font-awesome/fonts/**'];
	//followinf will be used in prod env as src for css files for copy - see task build.theme
	PRIMEUI_THEME = 'omega';
	PRIMEUI_SRC = `node_modules/primeui`;

	constructor() {
		super();
		// this.APP_TITLE = 'Put name of your app here';

		// Add third-party libraries to be injected/bundled.
		this.NPM_DEPENDENCIES = [
			...this.NPM_DEPENDENCIES, //.splice(1), // this removes zone.js
				{src: 'phaser/build/phaser.js', inject: 'libs' }, // PHASER library added to project
    			{src: 'primeui/primeui-ng-all.min.js', inject: true},
	  			{src: `primeui/themes/${this.PRIMEUI_THEME}/theme.css`, inject: true},			//inject selected css theme og primeui (subfolder of css as css/omega)
				{src: `primeui/primeui-ng-all.min.css`, inject: true},					//inject primeui css
	    		{src: `font-awesome/css/font-awesome.min.css`, inject: true}						//inject font-awesome used from components of primeui. fonts are in folder, located one folder up
			// {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
			// {src: 'lodash/lodash.min.js', inject: 'libs'},
		];

		/* Add to or override NPM module configurations: */
		//this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
	}

}
