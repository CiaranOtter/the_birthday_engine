export default class prev_wish {
    constructor() {
        this.birthday;
        this.message;
        this.date_wished;
    }

    setBirthday(birthday) {
        this.birthday = birthday;
    }

    getBirthday() {
        return this.birthday;
    }

    setMessage(message) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }

    setDate(date) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }
}
