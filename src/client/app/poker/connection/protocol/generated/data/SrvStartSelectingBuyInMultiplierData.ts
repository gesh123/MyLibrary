
import { GameJPTPrizeMultiplierData } from "./GameJPTPrizeMultiplierData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvStartSelectingBuyInMultiplierData extends AbstractData {
	public jptPrizeMultiplierVO:GameJPTPrizeMultiplierData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
