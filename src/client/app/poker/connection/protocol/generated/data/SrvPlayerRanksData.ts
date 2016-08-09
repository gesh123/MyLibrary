
import { RankInfoData } from "./RankInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayerRanksData extends AbstractData {
	public ranksVect:RankInfoData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
