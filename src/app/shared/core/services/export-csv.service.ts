import { Injectable } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ExportCsvService {

  constructor() { }

  now(): any {
    return {
      text: moment().format('YYYY-MM-DD.HH:mm:ss')
    };
  }

  isJson(item): boolean {
    item = typeof item !== 'string'
      ? JSON.stringify(item)
      : item;
    try {
      item = JSON.parse(item);
    } catch (e) {
      return false;
    }
    if (typeof item === 'object' && item !== null) {
      return true;
    }
    return false;
  }

  exportCsv(fileName: string = 'info', data: any): void {
    if (this.isJson(data)) {
      const options = {
        filename: `${this.now().text}-${fileName}`,
        fieldSeparator: ',',
        // quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: false,
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
      };
      const csvExporter = new ExportToCsv(options);
      csvExporter.generateCsv(data);
    }
  }

}
