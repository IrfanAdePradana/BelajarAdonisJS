'use strict'
const Book = use('App/Models/Book')
class BookController {
    async index ({response}){
        let books = await Book.all()

        return response.json(books)
    }

    async show ({params, response}){
        const book = await Book.find(params.id)

        return response.json(book)
    }

    async store ({request, response}){
        const bookInfo = request.only(['judul', 'nomor', 'penerbit', 'penulis'])

        const book = new Book()
        book.judul = bookInfo.judul
        book.nomor = bookInfo.nomor
        book.penerbit = bookInfo.penerbit
        book.penulis = bookInfo.penulis

        await book.save()

        return response.status(201).json(book)
    }
    
    async update ({params, request, response}){
        const bookInfo = request.only(['judul', 'nomor', 'penerbit', 'penulis'])

        const book = await Book.find(params.id)
        if(!book){
            return response.status(404).json(book)
        }
        book.judul = bookInfo.judul
        book.nomor = bookInfo.nomor
        book.penerbit = bookInfo.penerbit
        book.penulis = bookInfo.penulis

        await book.save()
        return response.status(201).json(book)
    }

    async delete ({params, response}){
        const book = await Book.find(params.id)

        if(!book){
            return response.status(404).json({data : 'resource not found'})
        }
        await book.delete()

        return response.status(204).json(null)
    }
}

module.exports = BookController
