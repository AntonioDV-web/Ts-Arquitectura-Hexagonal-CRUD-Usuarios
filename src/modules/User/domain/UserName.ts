export class UserName {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.exec();
    }

    private exec() {
        if (!this.value || this.value.length === 0) {
            throw new Error("Nombre de usuario no puede estar vacío");
        }

        if (this.value.length < 3 || this.value.length > 100) {
            throw new Error("Nombre de usuario debe tener al menos 3 caracteres y un máximo de 100 caracteres");
        }

        if (typeof this.value !== "string") {
            throw new Error("Nombre de usuario debe ser un texto");
        }
    }
}