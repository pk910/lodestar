/**
 * @module logger
 */

export enum LogLevel {
  error,
  warn,
  info,
  debug,
  trace
}

export const LogLevels = [
  "error",
  "warn",
  "info",
  "debug",
  "trace"
];

export const defaultLogLevel = LogLevel.info;

export interface ILoggerOptions {
  level: typeof LogLevel[number];
  module: string;
}

export interface ILogger {
  level: LogLevel;
  silent: boolean;

  info(message: string|object, context?: object): void;
  important(message: string|object, context?: object): void;
  warn(message: string|object, context?: object): void;
  error(message: string|object, context?: object): void;
  debug(message: string|object, context?: object): void;
  trace(message: string|object, context?: object): void;
  child(options: ILoggerOptions): ILogger;
}
