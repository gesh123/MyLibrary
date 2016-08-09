
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUserMoreMoneyNotifyCommand } from "../commands/SrvUserMoreMoneyNotifyCommand";
import { SrvUserMoreMoneyNotifyData } from "../data/SrvUserMoreMoneyNotifyData";
import { SrvUserMoreMoneyNotifyDataSerializer } from "./SrvUserMoreMoneyNotifyDataSerializer";


export class SrvUserMoreMoneyNotifyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUserMoreMoneyNotifyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUserMoreMoneyNotifyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUserMoreMoneyNotifyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUserMoreMoneyNotifyData();
            SrvUserMoreMoneyNotifyDataSerializer.deserialize(buffer, command.data);
	}
}
