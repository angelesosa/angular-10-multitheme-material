import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface ToastConfig {
  title?: string;
  message: string;
  timeLapse?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(
    private _toast: ToastrService
  ) { }

  /**
   *
   * @param message Mensaje del toast
   * @param title Titulo del toas
   * @param timeLapse Configuracion del tiempo de la solicitud
   * @param type Tipo de toast
   * @param duration Duracion en segundos
   */
  public show(config: ToastConfig) {
    let duration;
    const title = config.title || '';
    const type = config.type || 'success';
    if (!config.duration) {
      duration = (type == 'success' || type == 'info') ? 4000 : 5000
    } else {
      duration = duration * 1000;
    }
    this._toast[type](config.message, title, {
      timeOut: duration,
      progressBar: true,
      enableHtml: true,
      progressAnimation: 'increasing',
      closeButton: false,
      tapToDismiss: true,
      extendedTimeOut: 20000,
      positionClass: 'toast-bottom-full-width'
    })
  }
}
