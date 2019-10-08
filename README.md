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

# To Do
1. make clearErrors action creator, corresponding case in reducer (with conditional logic)
2. add bullets to errors
3. get hover color - how?
4. style splash page
5. nav bar & footer for login page
6. nav bar for greeting page
7. move on to Expenses - before Friends?
8. move on to Friends

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


  
