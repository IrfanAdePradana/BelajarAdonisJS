'use strict'

const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('buku', (table) => {
      table.increments()
      table.string('judul', 30).nullable()
      table.string('nomor', 30).nullable()
      table.string('penerbit', 50).nullable()
      table.string('penulis', 60).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('buku')
  }
}

module.exports = BooksSchema
