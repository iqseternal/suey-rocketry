import { print, toColor, printClear, type PrintTargetType, toPrintClear } from '@suey/printer';
import { getCurDate, getCurFullDate, getCurTime } from './common';

type PrintColor = ReturnType<typeof toColor>;

function makePrintMessage(
  appColor: PrintColor,
  typeColor: PrintColor, typeMessage: string,
  messageColor: PrintColor,
  ...message: unknown[]
) {
  const ms = message.reduce((pre: string, cur: unknown) => pre + cur, `[Rocketry] [${getCurFullDate()}] [${typeMessage}]`);
  return {
    ms,
    typeMs: [
      appColor, `[Rocketry]`,
      toPrintClear(), ' ',
      typeColor, `${typeMessage}`,
      toPrintClear(), ' ',
      messageColor, ...message,
      toPrintClear()
    ]
  }
}

export class PrinterService {
  static printInfo(...message: unknown[]) {
    print(
      ...makePrintMessage(
        toColor(['magenta', 'bright']),
        toColor(['blue', 'underline']), 'INFO',
        toColor(['blue']),
        ...message
      ).typeMs
    );
  }

  static printWarn(...message: unknown[]) {
    print(
      ...makePrintMessage(
        toColor(['magenta', 'bright']),
        toColor(['yellow', 'underline']), 'WARN',
        toColor(['yellow']),
        ...message
      ).typeMs
    );
  }

  static printError(...message: unknown[]) {
    print(
      ...makePrintMessage(
        toColor(['red', 'bright']),
        toColor(['red', 'underline']), 'ERROR',
        toColor(['red']),
        ...message
      ).typeMs
    );
  }
}

