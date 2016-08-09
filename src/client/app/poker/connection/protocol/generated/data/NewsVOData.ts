
import { GameSrvNewsMessageData } from "./GameSrvNewsMessageData";



import { AbstractData } from "../../core/data/AbstractData";

export class NewsVOData extends AbstractData {
	public index:number;
		public messageData:GameSrvNewsMessageData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
