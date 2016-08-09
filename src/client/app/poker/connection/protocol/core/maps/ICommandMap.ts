import {IPokerCommand} from "../commands/IPokerCommand";
/**
 * Created by hivaga on 7/16/2016.
 */
export interface ICommandsMap
{
	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
  getCommand(pid:number, cid:number):{new():IPokerCommand};

}
