
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvCashierStatusCommand } from "../commands/SrvCashierStatusCommand";
import { SrvCashierStatusData } from "../data/SrvCashierStatusData";
import { SrvCashierStatusDataSerializer } from "./SrvCashierStatusDataSerializer";


export class SrvCashierStatusCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvCashierStatusCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvCashierStatusDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvCashierStatusCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvCashierStatusData();
            SrvCashierStatusDataSerializer.deserialize(buffer, command.data);
	}
}
