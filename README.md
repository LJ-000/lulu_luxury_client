# Welcome to Lulu Luxury!

<img height="400" src="https://www.bjtonline.com/sites/bjtonline.com/files/styles/bjt30_article_large/public/time_tide-miavana-web.jpg?itok=itMq8Bd9&timestamp=1524495882"></img>

## About Lulu Luxury

Lulu Luxury is a (fictional) vacation planning app for every person’s (or penguin’s) needs! This app is dedicated to Lulu the penguin from the Georgia aquarium.

This app is a single page application that houses a React front end, and a Ruby backend.

## Login

The Lulu Luxury app is a resort vacation planning app that has two types of users in mind - the vacation resort goers themselves (in this case, known as the patrons or travelers), or the resorts (or rather, the assumed resort owners) themselves.

At the top in the navigation bar, we have the option to click home at any time, or click to directly go to either the patron traveler login side or the resort log in side. But from the home page, users can just click on the “log in” button to continue.

There is both an option for the patron login or the resort login. Regardless of whether you're a patron or a resort loggin in, you’ll need to use your full name and your password.

If your name is not in our database, you’ll get an alert saying the information was not found, and have the option to try logging in again. Alternatively, if the user knows that they don’t have an account lined up, they can create one with the new member form at the bottom of the page.

## Signing Up

To become a Lulu Luxury Member, you’ll just need to sign up with your full name, age, as well as an email and phone number to reach you at.

Once a new user has successfully signed up, they can go ahead and log in. The user should now get an alert that says the account has been found along with the reservations, and can click on “go to profile” to continue.

## Patron Home Page

Patron users can see that all of their upcoming resort stay reservations, as well as any previous resort stays they've had.

Further down the page, users can see the entire list of current resorts on our app, and their current availabilities for vacation stays. If a user wants to book another resort stay, they can click "Book reservation" and it will be added to their reservations list.

Underneath all of the resort information cards, users can also see the upcoming excursion reservations that the user has booked. The user can click on the “See excursion info” button to get a little popover that shows more details about the excursion.

Lastly, on the off-chance that a resort stay needs to be cancelled, the user can go back up to the upcoming reservations and click “cancel reservation”.

## Resort Home Page

Resort profiles have the option to see all of the patrons that current have reservations booked for stays at the resort. The resort user can click on “see patron info” on each patron to see more information about them, including whether or not they've paid yet.

Underneath the patrons list, the resort can also see the excursions that are available to this resort specifically, and click on see excursion info to see the additional info about the excursion as well as the dates that excursions are currently booked for.

## Back-End

Feel free to check out the back-end repo and current Lulu Luxury database <a href="https://github.com/LJ-000/lulu_luxury_backend">here</a>.
