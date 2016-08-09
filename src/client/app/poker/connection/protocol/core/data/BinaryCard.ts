import {AbstractData} from "./AbstractData";

export class BinaryCard extends AbstractData {
	/** The card suit. */
	public color: number;

	/** The card rank. */
	public sign: number;

	/** The card visibility. */
	public visible: number;

	constructor(parent?:AbstractData) {
		super(parent);
	}
}

