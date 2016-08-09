
import { PokerSeatGraceData } from "./PokerSeatGraceData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvStartRebuyGracePeriodData extends AbstractData {
	public graceVO:PokerSeatGraceData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
