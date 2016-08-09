
import { RequestTourInfoVOData } from "./RequestTourInfoVOData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClGetTournamentsInfoData extends AbstractData {
	public tourTabsTypesVect:RequestTourInfoVOData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
