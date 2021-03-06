import Service from './services/Service'
import HelperCommand from './commands/HelpCommand'
import MakeModelCommand from './commands/make/MakeModelCommand'
import MakeControllerCommand from './commands/make/MakeControllerCommand'
import MakeCommandCommand from './commands/make/MakeCommandCommand'
import ScheduleCommand from './commands/ScheduleCommand_'

export default class ConsoleKernel extends Service {
    lifecycle = 'app';

    commands = [];
    _commands = [
        HelperCommand,
        MakeModelCommand,
        MakeCommandCommand,
        MakeControllerCommand,
        ScheduleCommand
    ];

    constructor() {
        super();

        (this._commands.concat(this.commands)).map(command_clazz => {
            const command = new command_clazz();
            this.app.registerCommand(command)
        })
    }

    async command(name, args) {
        await this.app.command(name, args)
    }
}