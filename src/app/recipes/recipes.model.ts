export class Recipe{
    public name : string;
    public descreption : string;
    public imagePath : string;

    constructor(name : string, desc : string, imagePath : string ){
        this.name = name;
        this.descreption = desc;
        this.imagePath = imagePath;
    }
}