
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvLongCommentData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public longComment:string;
		public version:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
