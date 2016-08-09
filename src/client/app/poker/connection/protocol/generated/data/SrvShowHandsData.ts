
import { HandInfoData } from "./HandInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvShowHandsData extends AbstractData {
	public showHandListEvalLowHand:HandInfoData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
