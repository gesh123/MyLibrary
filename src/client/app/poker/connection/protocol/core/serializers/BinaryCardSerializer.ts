import {BinaryCard} from "../Data/BinaryCard";
import {ArrayBufferBuilder} from "../../../../utils/ArrayBufferBuilder";

export class BinaryCardSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: BinaryCard): void {

		var encodedCard = 0;

		switch (data.visible) {
			case Consts.CV_Hidden:
				encodedCard = Consts.HIDDEN_BYTE;
				break;
			case Consts.CV_HiddenOwner:
				encodedCard = Consts.HIDDEN_OWNER_BYTE_BASE + (data.sign | (data.color << Consts.CARD_COLOR_SHIFT));
				break;
			case Consts.CV_FaceDown:
				encodedCard = Consts.FACE_DOWN_BYTE;
				break;
			default:
				encodedCard = (data.sign | (data.color << Consts.CARD_COLOR_SHIFT))
				break;
		}

		buffer.setUint8(encodedCard);
	}

	public static deserialize(buffer: ArrayBufferBuilder, data:BinaryCard): void {
		//TODO: implement the deserialize method for BinaryCardSerializer
		buffer.getUint8();
	}
}

const enum Consts {
	HIDDEN_BYTE = 0xff,
	FACE_DOWN_BYTE = 0xfe,
	HIDDEN_OWNER_BYTE_BASE = 0x64,
	CARD_COLOR_SHIFT = 0x4,
	CARD_SIGN_MASK = 0x0f,
	CV_Hidden = 0,
	CV_HiddenOwner = 1,
	CV_FaceDown = 2
}

