import winston from "winston";
import kleur from "kleur";
const { combine, printf } = winston.format;

const myFormat = printf(({ level, message, service })=> {
    let jsonString = `{"message":"${
        level === "error" ?
        kleur.red(message as string) :
        kleur.grey(message as string)
        
        }"`
    jsonString += `"level":"${kleur.bgCyan(level)
        }","service":"${kleur.yellow(service as string)}"`
    return jsonString;
    
})













function createLogger(service:string){
    return winston.createLogger({
        levels: winston.config.syslog.levels,
        defaultMeta: { service },
        format: combine(myFormat),
        transports:[new winston.transports.Console()]
        
    })
}

const gameLogger = createLogger("DIGITAL GAMES");
export default gameLogger;
