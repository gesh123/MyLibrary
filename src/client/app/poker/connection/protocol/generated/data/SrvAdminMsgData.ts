
import { BinaryComposite } from "../../core/data/BinaryComposite";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvAdminMsgData extends AbstractData {
	public TextFormat:BinaryComposite;
		public postAction:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
