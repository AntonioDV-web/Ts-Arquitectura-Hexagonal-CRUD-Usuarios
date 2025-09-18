export class UserEmail {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.exec();
    }

    private exec() {
        if (!this.value || this.value.length === 0) {
            throw new Error("Email no puede estar vacío");
        }

        if (typeof this.value !== "string") {
            throw new Error("Email debe ser un texto");
        }

        if (!this.value.includes("@") || !this.value.includes(".")) {
            throw new Error("Email no es válido");
        }

        if (this.value.length < 5 || this.value.length > 100) {
            throw new Error("Email debe tener al menos 5 caracteres y un máximo de 100 caracteres");
        }
    }
}