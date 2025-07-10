import dotenv from "dotenv"
dotenv.config();
export function getEnvVar(key: string, fallback?: string): string{
    if(Object.prototype.hasOwnProperty.call(process.env,key)){
        const value = process.env[key];
        if (value !== undefined && value !== '') {
            return value;
        }
    }
    if (fallback !== undefined) {
        return fallback;
    }
    throw new Error(`Environment variable ${key} is not defined or empty.`);
}