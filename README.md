# Client for TimeSplitter: Task Tracking App v 0.1.3

[TimeSplitter Deployed Site](https://patoday.github.io/timesplitter-ember-client/)

TimeSplitter is designed to allow registered users to input tasks they need and/or want to do. All authenticated users tasks are tied with the email they used to create the account and will be visible to them and only them.

##### Current Features

Authenticated users can create a new task, update the task info, mark the task as complete, and delete a task.

# Technologies Used

  * Ember.js
  * JavaScript
  * AJAX
  * HTML
  * GitHub
  * Atom
  * CSS/SASS
  * Bootstrap
  * Handlebars
  * Bash/Terminal
  * Google Chrome
  * Ruby on Rails (Backend API)

# TimeSplitter API Links

  * [TimeSplitter GitHub Repo](https://github.com/PatODay/timesplitter-api)
  * [TimeSplitter Heroku Page](https://dry-hollows-29032.herokuapp.com/)

# Planning

I came up with the idea of doing a task tracking app because I wanted a way other than the notes app on my phone to track activities and chores/responsibilities. Once I had the concept in place it was time to move on to diagramming and laying out my roadmap for this project, and that all begins with...

<!-- I wanted to challenge myself on this project so I elected to use Ember for my front-end.  -->

# Wireframes & ERD

[Wireframes & ERD](https://i.imgur.com/KCWxGXA.jpg)

# User Stories

1. As a user I want to be able to CRUD my tasks and account/profile.
2. As a user with tasks I want to be able to see my complete and incomplete tasks
3. As a user with completed tasks I want to be able to re-open(mark incomplete) any of my completed tasks
4. As a user I want my tasks visible to only me

# Development Process

I knew that I wanted to use Rails for my backend API, as I was very happy with the results from my last full stack app. I elected to go with Ember.js for the front-end of this app. Ember seemed fitting for use with a Rails API, what I had in mind when conceiving/planning out this app, and I wanted to challenge myself and use a new-to-me framework.

I began with setting up my API in Rails, which proved to be fairly straightforward after having developed a full stack app with Rails once before. Once the API and `tasks` resource had been set up and tested successfully I set my sights on Ember.

I spent a lot of time reading the docs and planning out the framework of my app, writing out every command I thought I would want to use and reading up on everything generated through each command. Every feature or component I wanted to work on I checked out to a new branch and did my work there. Once it had been tested successfully, it was merged into development, tested again, then merged into master and deployed.

I was able to perform successful CRUD actions on a resource by Monday of the project week, however passing a info from Ember to the API was tricky. Starting with the `date` instead of passing the date to the API it was sending the value `null`. After some extensive Googling, doc reading, and experimentation I was able to figure out that if the `DS.attr` for `date` was set to `string` instead of `date` the date would be successfully passed to the API.

Next up was toggling tasks as complete or incomplete and disabling or allowing editing of a task respectively. This proved to be fairly straightforward, by following Ember's pattern of `data down, action up` coupled with my notes from class. In my adventures with this feature I learned how finnicky checkboxes in Ember can sometimes be, but I managed to get the tasks to show as completed in the manner I had envisioned, and the checkbox showing up as `checked` for completed tasks and `unchecked` for incomplete tasks.

During the development process I came up with the idea of generating a route for `help` which would bring users to the "help menu" where the features and functionality of the app were detailed out for users. I was able to put this together with ease as it was just everything written out in the `help.hbs` file, and no JS functionality to speak of.

The persisting issue I kept circling back to during the development process was how to prevent a user from successfully submitting an empty task form. I had been trying to use `required` to no avail. After talking with an instructor and looking at StackOverflow I came up with the idea of wrapping all the input fields with a form and moving the action off the button for save and onto the form on "submit" and changed the save button to type `submit` to trigger the action on the form, which worked.

Another hurdle was figuring out how to display UI messaging to a user with no tasks if they navigate to the `tasks` route. I talked through what I was trying to do with some people in my cohort, and with some console logging, reading docs, and talking out my issue and goal I was able to figure out how to properly do that with relative ease.

I'm very happy with what I was able to do with my first foray into the Ember.js waters, and I'm excited to work more with it in the future.

# Images

![alt text](https://i.imgur.com/th7WSdv.png)
![alt text](https://i.imgur.com/YXAlkYG.png)
![alt text](https://i.imgur.com/wWnkhst.jpg)
![alt text](https://i.imgur.com/88VaeH0.jpg)
![alt text](https://i.imgur.com/oRhJlxp.jpg)

# Planned Features/Quality of Life Improvements

  * Have tasks sync with Google Calendar's API
  * Put in a `cancel edit` button which doesn't locally store the new data that was input on cancel
  * Change input form for Work or Recreation to radio buttons
  * Sort tasks by date
  * Sort tasks by work or recreation
  * Push Alerts
  * HTML/CSS Styling

# Setup and Installation

If you wish to contribute to this app:
1. Fork and clone this repo
2. Install dependencies with `npm install` and `npm install ember-cli`
