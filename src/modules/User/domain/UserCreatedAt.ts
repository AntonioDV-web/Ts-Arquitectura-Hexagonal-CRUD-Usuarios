export class UserCreatedAt {
    value: Date;

    constructor(value: Date) {
        this.value = value;
        this.exec();
    }

    private exec() {
        if (!(this.value instanceof Date)) {
            throw new Error("Fecha de creación debe ser una fecha válida");
        }

        if (this.value > new Date()) {
            throw new Error("Fecha de creación no puede ser en el futuro");
        }
    }
}