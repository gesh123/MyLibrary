
import { GameData } from "./GameData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTableStateData extends AbstractData {
	public game:GameData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
