'use strict'

const Model = use('Model')

class Book extends Model {
    static get table(){
        return 'buku';
    }
    static get primaryKey(){
        return 'id';
    }
}

module.exports = Book
