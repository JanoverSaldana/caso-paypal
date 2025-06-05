

export class Category {

    constructor({id = ' ', name = ' ', description = '', income = '0', expenses = '0', countryId = '0', registeredInAt = ''}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.income = income;
        this.expenses = expenses;
        this.countryId = countryId;
        this.registeredInAt = registeredInAt;
    }
}