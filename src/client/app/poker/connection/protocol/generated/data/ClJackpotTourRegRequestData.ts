
import { PokerRegisterJPTData } from "./PokerRegisterJPTData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClJackpotTourRegRequestData extends AbstractData {
	public registerJPTVO:PokerRegisterJPTData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
