
import { ReplayInfoData } from "./ReplayInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClRplGetHandHistoryData extends AbstractData {
	public mask:number;
		public replayInfoVector:ReplayInfoData[];
		public isTourHandHistory:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
