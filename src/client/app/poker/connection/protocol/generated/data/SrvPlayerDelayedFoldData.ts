
import { GamePlayerDelayedFoldData } from "./GamePlayerDelayedFoldData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayerDelayedFoldData extends AbstractData {
	public reasonVO:GamePlayerDelayedFoldData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
