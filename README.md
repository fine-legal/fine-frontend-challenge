# Fine Frontend assessment

The purpose of this exercise is to for you to show your ability to integrate new features into an already existing project. You may design the page however you like. 

The required features on this page are listed below. 

**Don’t rush or feel stressed**! If you are running out of time, we’d rather see you do your best on implementing few of these requirements than submitting something that you are not fully satisfied with.

## The test

The end product should be an application that fetches posts from an API and displays it as a list of components. 
The user should be able to add and remove posts from favourites and search trough them.
The posts can be of two types: **news** or **banner**. Each should be displayed by a different component.
If the user clicks on a post, it should be redirected to a page displaying the post image, title and content, as well as an "add to favourites" button.
There should be an input where the user can leave its mail to subscribe to our newsletter. This should only do a post to an endpoint with the email as the request body and display a success message if the request was successful.

**Bonus**

It would be nice if I could keep my favourites after reloading and if I could use the application on my mobile device.
Also it would be nice to have some kind of test automation. 

## Endpoints
**Newsletter**: localhost:3000/api/newsletter
**Components List**: localhost:3000/api/list

### Technology stack requirements

The goal of this technical test is to check how would you handle with our current stack. That’s why you must use the following:

- Typescript
- React.js
- CSS3: you can use css pre-processors (SASS or LESS).
- If you like you can use Material UI
- HTML5

### Non-functional requirements

- For the user the **loading times are critical** so have that in mind when developing.
- Pay attention to **code clarity, structure and legibility**.
- The solution should be **bug-free**.
- We will value positively if you include a `README.md` file in your solution with your comments about your approach to the implementation or any relevant information you’d like to include.

### What we look at

- Code quality
- Code structure
- Performance / optimisation
- Search algorithm
- User interface / experience

### Delivery

Please deliver your work as a private fork of the repository. Make sure we can simply clone and run the page directly on a local server.

Good luck! 

If you have any questions regarding the test please send them to **nicolas.mazitelli@fine.legal** and I will get back to you as soon as possible.