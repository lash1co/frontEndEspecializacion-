export default class FilterModel {

    public constructor(init?: Partial<FilterModel >) {
        Object.assign(this, init);
    }

    public id: string;
    public name: string;
    public rini: string;
    public rfin: string;
}