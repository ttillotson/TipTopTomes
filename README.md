# TipTopTomes

[Live Demo](https://tiptoptomes.herokuapp.com/)

TipTopTomes is a book review website inspired by Goodreads that allows users to browse, review and collect books. It runs a Rails/PostgreSQL backend with React/Redux powered frontend.

TipTopTomes was created in 10 days, though further development is expected.

## Features

![Login Demo](https://user-images.githubusercontent.com/29738420/39853608-1074de22-53d8-11e8-9f6a-7d3cbd665993.gif)

+ Secure backend to frontend user authentication powered by BCrypt.

+ Create custom bookshelves to track your stationary series

+ User specific Shelf-Status available on book pages

+ Books can be rated and reviewed

### Books

![Demo Show Page](https://user-images.githubusercontent.com/29738420/39853670-6bced5d4-53d8-11e8-9c9d-9a304c9a3bbf.gif)
Books display standard book information with a user-specifc box if a review has been made. Unfortunately User's will not be allowed to add books to the library due to this being a demo site.

### Reviews

![Review CRUD](https://user-images.githubusercontent.com/29738420/39853481-56f8f618-53d7-11e8-95e3-f2423efac54b.gif)
Reviews are displayed in a most recent fashion with a user content box at the top appearing for every reviewed book. User's have full CRUD access to Reviews.

### Bookshelves

![Bookshelf](https://res.cloudinary.com/tiptoptomes/image/upload/v1523657814/Screen_Shot_2018-04-13_at_2.56.06_PM.png)
Showcases all books in a given collection with links to the books and other shelves belonging to the reader.  

## Things Learned

As a whole this was a very instructional project (as all tend to be) with React/Redux's pairing functionality coming together as the project wore on. As with any project, there are many things I wish I could have done better knowing what I do now. With that in mind, here are a couple of things I wish I had known going in and what I would've done differently.

+ Ideal Redux State and Store
    + Flat State is a Friendly State: I nested quite a bit of my state because I saw an association between the data. Towards the end, this became very problematic to deal with as I needed to pull info from nested data, where I should've dedicated a slice of state to any information I needed, and update the state as needed by the page.

    + Associations and Rails do Heavy Lifting: because I was nexting my state, I was pulling the specific information I needed rather than pulling the relevant association and accessing the store for it as the react way of doing things.
        ```
            json.extract! shelf, :name
            username = shelf.user.username
            json.owner  username
            json.memberships do
            if shelf.memberships.length > 1
                shelf.memberships.each do |membership|
                owner_review = membership.book.reviews
                        .select{ |review| review.author_id == membership.user.id }[0]
                
                json.set! membership.id do
                    json.extract! membership, :id, :created_at
                    json.book do
                        json.partial! 'api/books/book', book: membership.book
                        json.avg_rating membership.book.average_rating
                        json.rating owner_review.rating if owner_review
                    end

                    if current_user
                        current_user_review = membership.book
                        .reviews.select{ |review| review.author_id == current_user.id }[0] 
                    end
                end
        
        ```
    + This hurts to look back on. Definitely worked on this towards the end of the project by partialing out components of calls to help separation of concerns.

### Future Features

+ Search

+ Rank by Rating

+ Tags

+ Shelf Information on Book Show Page

#### [Further Information](https://github.com/ttillotson/TipTopTomes/wiki)