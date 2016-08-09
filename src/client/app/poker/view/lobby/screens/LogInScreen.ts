/**
 * Created by gsemerdjiev on 25.7.2016 г..
 */
import {Component} from "@angular/core";
import {LobbySignalsBus} from "../../../bussiness/lobby/signals/LobbySignalsBus";
import {PokerLoginVO} from "../../../bussiness/common/model/vo/PokerLoginVO";
import {SrvLogonOkData} from "../../../connection/protocol/generated/data/SrvLogonOkData";
import {SrvLogonErrorData} from "../../../connection/protocol/generated/data/SrvLogonErrorData";
import {DevConsole} from "../../../devTools/console/DevConsole";
import {Dialog, Button, InputText} from 'primeng/primeng';

@Component({
	selector: "logInScreen",
	template: `
	<p-dialog header="Login" [(visible)]="display" modal="modal" showEffect="fade" [resizable]="false" [responsive]="true">
    	<p>
			<input type="text" placeholder="Your username" name="username" [(ngModel)]="model.username" pInputText style="width:100%">
		</p>
    	<p>
			<input type="password" placeholder="Your password" name="password" [(ngModel)]="model.password" pInputText style="width:100%">
		</p>
        <footer>
            <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
                <button type="button" pButton icon="fa-close" (click)="display=false" label="Cancel"></button>
				<button type="submit" pButton icon="fa-sign-in" (click)="login($event)" label="Log In"></button>
            </div>
        </footer>
	</p-dialog>

	<button type="text" (click)="showDialog()" pButton icon="fa-external-link-square" label="Log In Dialog"></button>
	`,
	directives: [Dialog,Button,InputText]

})
export class LogInScreen
{

	protected model = {
		username: "",
		password: "",
		message: "",
		logged: false
	};

	protected display: boolean = false;

	constructor(private signalsBus:LobbySignalsBus)
	{
		signalsBus.onSrvLogonOk.add(this.onSrvLogonOkHandler, this);
		signalsBus.onSrvLogonError.add(this.onSrvLogonErrorHandler, this);
	}

	protected showDialog() {
        this.display = true;
    }

	protected login(event:Event):void
	{
		DevConsole.log("Login attempt !!!");
		this.signalsBus.onClLogon.dispatch(new PokerLoginVO(this.model.username, this.model.password, false));
		event.preventDefault();
	}

	private onSrvLogonOkHandler(command:SrvLogonOkData):void
	{
		DevConsole.log( "acc. status: " + command.accountStatus + "\r nickname: " + command.nickname, command);
		this.model.logged = true;
		this.display = false;
	}

	private onSrvLogonErrorHandler(command:SrvLogonErrorData):void
	{
		DevConsole.error("Logon error !!! ID: " + command.errorVO.errorID, command);
		this.model.logged = false;
	}
}
