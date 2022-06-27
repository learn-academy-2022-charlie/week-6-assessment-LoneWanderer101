# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostsController takes from ApplicationController. An index method is created inside the class. Index represents the R in CRUD and will access all items from the database model. 
class BlogPostsController < ApplicationController
  def index

# ---2) An instance of posts. In the index method, we are making an Active Record call that will save all the content from the database as an instance variable. The instance of posts (@posts) will show all blog posts and their data.
    @posts = BlogPost.all
  end

# ---3) A show method represents the R in CRUD. It is a get request which will show one item in the database. it has an instance variable of post. it searches through the blogs with a given id as a parameter and returns the item assigned to the given id which come from the url params.
  def show
    @post = BlogPost.find(params[:id])
  end

# ---4) New method is a get request which provides a form for the user to create new content. In this case a new blog post. Create method will  will create a new blog post by submitting the user data from the form in to the database. 
  def new
    @post = BlogPost.new
  end

  def create
   
# ---5) If the created post is valid, a blog post will be created and stored in the database and it will redirect the user to blog_post_path. If not valid, it will redirect the user to the new_blog_post_path.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    
# ---6) Edit method is a get request. This allows the user to edit an item identified by the id, in the app, which would then store the new information in database with the update method. Update is a put request which will either replace an existing item or create a new one if it doesn't already exist.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
   
# ---7) Similar to question 4 above, if the update is posted successfully, the user will be redirect_to blog_post_path. If not successful, the user will go back and redirect_to edit_blog_post_path. Destroy method is a request to remove some or all information about an item in the blog post app. In this case it takes the item id. Depending on success, the user will be redirected. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else

# ---8) If not destroyed user will redirect_to blog_post_path.
      redirect_to blog_post_path(@post)
    end
  end

# ---9) Everything below the "private" is protected and cannot be called form anywhere else in the program. Params are typically the last methods inside the controller. This is whow it will look when creating strong parameters for an Application Programming Interface (API). In this method if the application asks for blog_post_params, those parameters will require... continued in #10
  private
  def blog_post_params
  
# ---10)  a BlogPost object, while only permitting title and content of a blog.
    params.require(:blog_post).permit(:title, :content)
  end
end
