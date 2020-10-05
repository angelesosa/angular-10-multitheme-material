// import { Utils } from 'src/app/app.utils';


export class ErrorMessage {

  /**
   *
   * @param name Nombre de la validacion
   * @param value Valor de la validacion
   */
  static getValitorMessage(name: string, value?: any) {
    const messages = {
      'required': 'Este campo es requerido.',
      'email': 'El email ingresado no es válido.',
      'minlength': `Requiere ${value.requiredLength} caracteres como mínimo.`,
      'maxlength': `Requiere ${value.requiredLength} caracteres como máximo.`,
      'invalid_letters_accent_spaces': 'Este campo solo admite letras.',
      'invalid_alphanumeric': 'Este campo solo admite letras y numeros.',
      'invalid_number': 'Este campo solo admite números.',
      'invalid_email': 'El email ingresado no es válido',
      'invalid_url': 'La url ingresada no es válida.',
      // 'invalid_password': 'La contraseña ingresada no es válida.',
      'invalid_password': 'Tu contraseña debe tener entre 5 y 20 caracteres, una minúscula, una mayúscula y un número.',
      'limitMinMax': `El valor debe estar entre ${value.min} - ${value.max}`,
      'invalid_characters': (matches: any[]) => {
        let matchedCharacters = matches;
        matchedCharacters = matchedCharacters.reduce((characterString, character, index) => {
          let string = characterString;
          string += character;
          if (matchedCharacters.length !== index + 1) {
            string += ', ';
          }
          return string;
        }, '');
        return `Estos caracteres no estan permitidos: ${matchedCharacters}`;
      },
      'mustBeCheckedError': 'Este campo es requerido.',
      'invalid_ipAddress': 'La IP ingresado no es válida.',
    }

    return messages[name]
  }

}
