# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
  A foreign key references the primary key.

  Researched answer:
  In the example provided, the model Cohort has_many students, and the student model belongs_to the Cohort. When creating a database, rails automatically adds a primary key. In this example, the Cohort model will hold the primary key and the student model holds the foreign key because the foreign key is always assigned ot the belongs_to model. In Active Records associations class we learned that if you make a mistake and forget to assign a foreign key, you can generate a migration in order to update your database. The syntax will be $ rails generate migration <add_item_to_list>. Always remember to run $ rails db:migrate after generating a migration.

2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Researched answer:
  Show, Create, Edit, Update, Destroy are RESTful routes that must always be passed params. Parameters, or params, are data that is sent from client back to the server. Params require certain information be passed. Then depending on whether the user wants to create or delete a item, the methods called will modify the correct item in the database. For example, if creating a database with blog posts, params can be used to require the ID and possibly a title and content. Strong params must be identified all the way at the bottom of the controller with the keyword "private. Anything below "private" is protected and cannot be called form anywhere else in the program. Params are typically the last methods inside the controller. One has to remember that if a route requires a param, the alias will also require a param gets passed.

3. Name three rails generator commands. What is created by each?
  
  Your answer:
  Rails generate controller, model, and migrate. 

  Researched answer:
  Three rails generator commands are rails generate controller, model, and migrate. Rails generate commands create templates. When running rails generate controller, the controller is created. The controller can be called whatever the app you are creating is intended for. If creating a blog post app, the controller could be named blog_posts. The generate controller uses a boiler plate and creates all the files associated with a controller.
  The generate command for model takes the name of the model we intend to create, the name of each column, and the data type of each column as arguments. If creating a blog post, the syntax could be $ rails generate model Blog title:string content:string.
  Rails generate migrate allows you to make changes to a database. As an example, some of the information that could be changed is the column name, data type, or even adding or removing columns. A migration can also be ran if the developer forgets to include a foreign key when generating a model. Always remember to run $ rails db:migrate in order to execute the changes.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students
  Index. This would list all students.          

action: "POST"   location: /students       
  Create. This would create a new student in the database then redirect somewhere.

action: "GET"    location: /students/new
  New. Show a new student form.

action: "GET"    location: /students/2  
  Show. Show info about specific student with id 2.

action: "GET"    location: /students/2/edit    
  Edit. Show edit form for student with id 2.

action: "PATCH"  location: /students/2      
  Update. Update particular student with id 2 then redirect somewhere.

action: "DELETE" location: /students/2      
  Destroy. Delete particular student with id 2 then redirect somewhere.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a developer, I can create a full-stack rails app.
2. As a developer, my to do lists can have a title and content.
3. As a developer, I can add new to do lists directly to my database.
4. As a user, I can see all to do list titles listed on the home page of the application.
5. As a user, I can click on the title of a list and be routed to a page where I see the title and content  of the to do list I selected.
6. As a user, I can navigate from the show page back to the home page.
7. As a user, I see a form where I can create a new to do list.
8. As a user, I can click a button that will take me from the home page to a page where I can create a to do list.
9. As a user, I can navigate from the form back to the home page.
10. As a user, I can click a button that will submit my to do list to the database.
11. As a user, I when I submit my post, I am redirected to the home page.
12. As a user, I can update my to do list.
13. As a user, I can delete my to do list.