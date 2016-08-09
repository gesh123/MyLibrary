
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvAltCurrencyRateCommand } from "../commands/SrvAltCurrencyRateCommand";
import { SrvAltCurrencyRateData } from "../data/SrvAltCurrencyRateData";
import { SrvAltCurrencyRateDataSerializer } from "./SrvAltCurrencyRateDataSerializer";


export class SrvAltCurrencyRateCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvAltCurrencyRateCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvAltCurrencyRateDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvAltCurrencyRateCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvAltCurrencyRateData();
            SrvAltCurrencyRateDataSerializer.deserialize(buffer, command.data);
	}
}
