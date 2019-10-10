# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

#  Splitwise signup errors include:
# - First name can't be blank
# - Email address can't be blank
# - Please enter a valid email address.
# - Password is too short (minimum is 8 characters)
# - Password is too common (e.g. '12345', 'password', etc) - please choose something more complex or unique

# To Do
1. make clearErrors action creator, corresponding case in reducer (with conditional logic)
2. add bullets to errors
3. get hover color - how?
4. style splash page
5. nav bar & footer for login page
6. nav bar for greeting page
7. move on to Expenses - before Friends?
8. move on to Friends

### Splash Page
- Add Main Image on right side
- Add Sign Up button on left side
- Add Logo at top left corner
- Add link to Log In and Sign Up at top right corner
- Add Header with text 'Less stress when sharing expenses with anyone' or something to that effect
​
### Log In Page
- Remove Greeting `Welcome to Splatwise` and move links to right side of nav bar
- Remove errors div above form
- Navbar should be flush with top of screen, footer should be flush with bottom
- Splitwise should say Splatwise in top left corner!

### Friendships Table
- need model-level validation for inclusion.  database constraint doesn't exit
- migration - make status a string.
- need a pointer from user to their friends.  user has_many friends through friendships


1. seed database (create faux users).  run be rails db:seed once its ready
2. go through friendships to users where invitee_id == current_user.id or inviter_id == current_user.id
3. try to instantiate friendships in console
4. test friendship assocations
5. test that a friendship cannot be made in the reverse order (inviter becomes invitee).  if it can, add an index on both columsn with the reverse order and add the corresponding model
6. write controller actions
7. json views
8. write components



  # use parens for markup
  # use curlies for blocks of code
# Questions
1. How do I change 'username' to 'First name' in the error messages?
  # add conditional to map in renderErrors
2. How do I render the other errors:
  - Email address can't be blank
  - Please enter a valid email address.
  - Password is too common (e.g. '12345', 'password', etc) - please choose something more complex or unique
    # don't worry about latter two checks
3. What do I do with 'invalid credentials' message in sessions_controller.rb?
  # change to Whoops! We couldn’t find an account for that email address and password.
4. Why am I still seeing a message in console that reads: 'livereload.js?host=localhost:191 WebSocket connection to 'ws://localhost:35729/livereload' failed: Unknown reason'?  I deleted my guard file, removed the 4 guard gems from my Gemfile, then ran bundle install, and even removed the corresponding line from config/environments/development.rb
5. Show Connor my interesting bug log
  # check
6. What to do about .DS_store?  I don't want to add/commit it, but I also don't want to have to manually add everything else (vs. using add .) every time I commit.
  # delete it every time before committing.  write script, get famous
7. Confirming that given my multi-column index, Rails can index the left-most column(s).  Will I need to index the right-most column alone (i.e. invitee_id) 
7. How do I validate uniqueness of a friendship at the model level?


  
