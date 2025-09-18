export class UserId {
    value: string;

    constructor(value: string){
        this.value = value;
        this.exec();
    }

    private exec(){
        if(this.value.length < 5){
            throw new Error("EL id debe tener almenos 5 caracteres");
        }
    }

}