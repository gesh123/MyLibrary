
import { InfoData } from "./InfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClPingData extends AbstractData {
	public info:InfoData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
