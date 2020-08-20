import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface ToasterConfig {
  title?: string;
  message: string;
  timeLapse?: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private _toast: ToastrService) {}

  /**
   *
   * @param message Mensaje del toast
   * @param title Titulo del toas
   * @param timeLapse Configuracion del tiempo de la solicitud
   * @param type Tipo de toast
   * @param duration Duracion en segundos
   */
  public success(config: ToasterConfig) {
    this.show('success', config);
  }

  public warning(config: ToasterConfig) {
    this.show('warning', config);
  }

  public info(config: ToasterConfig) {
    this.show('info', config);
  }

  public error(config: ToasterConfig) {
    this.show('error', config);
  }

  private show(type, config: ToasterConfig) {
    let duration = config.duration ? config.duration * 1000 : 4000;
    const title = config.title || '';
    this._toast[type](config.message, title, {
      timeOut: duration,
      progressBar: true,
      enableHtml: true,
      progressAnimation: 'increasing',
      autoDismiss: true,
      closeButton: false,
      tapToDismiss: true,
      extendedTimeOut: 20000,
      positionClass: 'toast-bottom-right',
    });
  }
}
