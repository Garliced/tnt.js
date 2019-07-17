import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class tnt implements IBotCommand {

    private readonly _command = "tnt"

    help(): string {
        return "(Admin only) Deletes random amount of messages";
    }   

     isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {
        
        messageObject.delete(0);

        if(!messageObject.member.hasPermission("ADMINISTRATOR"))
        {
            messageObject.channel.send(`Get an admin role first ${messageObject.author.username} :p`)
                .then(message => {
                    (message as Discord.Message).delete(5000);

                });
            return;

        }


        let numberOfMessagesToDelete = Math.random()*15;
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);




        messageObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }

    
}
