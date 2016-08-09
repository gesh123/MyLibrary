
import { PokerSeatGraceData } from "./PokerSeatGraceData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayersInRebuyGracePeriodData extends AbstractData {
	public seats:PokerSeatGraceData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
