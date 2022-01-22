export default class MenuModel {

    public constructor(init?: Partial<MenuModel >) {
        Object.assign(this, init);
    }
    public id: number;
    public title: string;
    public name: string;
    public url: string;
    public icon: string;
    public badge_variant: string;
    public badge_text: string;
    public children_of: number;
    public created_at: string;
    public es_titulo: number;
    public orden: number;
}