Aplikasi Baca Buku dengan fliphtml5 dan Next.js

Backend NextJs
Web NextJs
Mobile Expo

Database PostgreSQL

Skema Databas

User 
id
name
username
email
password
profile_picture

Category
id
name
displa_name
is_active

Genre 
id
name
display_name
is_active

Book
id
title
author
publisher
description
cover_image
book_url
category_id
is_active

genres
id
genre_id
book_id

User_Book_Rating
id
user_id
book_id
rating

User_Book_Wishlist
id
user_id

Comment
id
user_id
book_id
comment
parent_comment_id 
created_at

<!-- Relasi -->
Book.category_id → Category.id
Genres.book_id → Book.id
Genres.genre_id → Genre.id

User_Book_Rating.user_id → User.id
User_Book_Rating.book_id → Book.id

User_Book_Wishlist.user_id → User.id
User_Book_Wishlist.book_id → Book.id

Comment.parent_comment_id → Comment.id
