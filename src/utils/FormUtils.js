// src/utils/FormUtils.js

export class FormUtils {

  static markAllTouched(touched) {
    Object.keys(touched).forEach(key => touched[key] = true);
  }

  static isValidField(value, validators = [], touched = false) {
    if (!touched) return false;
    return this.getFieldError(value, validators) != null;
  }

  static getFieldError(value, validators = []) {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return null;
  }

  static required(value) {
    if (value === null || value === undefined) {
      return "Este campo es obligatorio.";
    }

    if (typeof value === "string" && value.trim() === "") {
      return "Este campo es obligatorio.";
    }

    if (typeof value === "number" && isNaN(value)) {
      return "Este campo es obligatorio.";
    }

    return null;
  }

  static minLength(min) {
    return (value) => {
      if (typeof value === "string" && value.trim() !== "" && value.length < min) {
        return `Mínimo ${min} caracteres.`;
      }
      return null;
    };
  }

  // ✔ Igual que Validators.min
  static min(min) {
    return (value) => {
      if (value === null || value === "" || isNaN(Number(value))) return null;
      if (Number(value) < min) {
        return `El valor mínimo es ${min}.`;
      }
      return null;
    };
  }

  // ✔ Igual que Validators.email
  static email(value) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (value && !regex.test(value)) {
      return "Formato de correo inválido.";
    }
    return null;
  }
}
