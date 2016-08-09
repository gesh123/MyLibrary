
import { BinaryCard } from "../../core/data/BinaryCard";



import { AbstractData } from "../../core/data/AbstractData";

export class GameSeatData extends AbstractData {
	public seatID:number;
		public freeMoney:number;
		public tableMoney:number;
		public playerName:string;
		public franchiseID:number;
		public state:number;
		public cards:BinaryCard[];
		public sign:number;
		public playerType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
