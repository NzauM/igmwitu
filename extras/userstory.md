# User Story
* A user should be able to Add a post, together with its captions and several tags
* A user should be able to See all posts =====
* A user should be able to like a post  
* A user should be able to see the number of likes on a post

# Models
* Post => id, caption, image
* User
* Profile
* Tag => name, category
* Post-Tags => id, post_id, tag_id
* Like => id, post_id, user_id




<br>

# Already Done:
A  working react frontend with interfaces for adding  and viewing posts.<br>
API is configured to accept requests, i,e Cors configuration done.<br>
Models and DB Setup, Routes and Controller actions for creating and Showing Posts(Without their tags).

<br>

# ToDo;
* Setup Likes model and Ensure users can like posts and see number of likes on a post.(CRUD Recap and Associations)
* # Steps:
    Generate model and run migrations
    Setup Controllers together with actions
    Setup Relationships
    Setup resource routes

    Setup like component on client that posts to my likes model

* Setup Tags and Ensure users can choose tags they want for their posts.(Convenience Builders, Serializing associations)
* # Steps:
        Create tags table => Generate Tag model and run migrations and seed Tags table
        Fetch tags on the frontend and display them to users i.e through dropdowns, checkboxes
        Add selected tags to formData to ensure we get it through(params hash in the create controller method)
        Create association(many-to-many) between posts and tags i.e create join table 
        
        get tags from params[:hash], then get a specific tag's id and associate post with this tag. So create a record in the post-tags joint table(post_id, as the post and tag_id as id from this specific tag) => post - posttags => has_many: post.posttags.create()

        












