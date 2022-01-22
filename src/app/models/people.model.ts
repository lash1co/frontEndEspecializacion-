export default class PeopleModel {

    public constructor(init?: Partial<PeopleModel >) {
        Object.assign(this, init);
    }

    public id: string;
    public name: string;
    public apppassword: string;
}