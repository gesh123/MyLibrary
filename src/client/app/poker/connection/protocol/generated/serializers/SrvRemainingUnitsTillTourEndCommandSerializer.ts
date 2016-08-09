
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvRemainingUnitsTillTourEndCommand } from "../commands/SrvRemainingUnitsTillTourEndCommand";
import { SrvRemainingUnitsTillTourEndData } from "../data/SrvRemainingUnitsTillTourEndData";
import { SrvRemainingUnitsTillTourEndDataSerializer } from "./SrvRemainingUnitsTillTourEndDataSerializer";


export class SrvRemainingUnitsTillTourEndCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvRemainingUnitsTillTourEndCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvRemainingUnitsTillTourEndDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvRemainingUnitsTillTourEndCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvRemainingUnitsTillTourEndData();
            SrvRemainingUnitsTillTourEndDataSerializer.deserialize(buffer, command.data);
	}
}
