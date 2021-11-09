# TypeOut.js
A JavaScript plugin that will take a specified text and render it in an iterative fashion at a predetermined speed. See example below
## How do I use it?
You can simply download the script and include/reference it in one of yours projects. <b>Here are 2 ways to implement the script:</b>
- You can specify a classname on your DOM elements such as, 'type-500'. So when you add this class, you must enter 'type-' followed by any number representing miliseconds '-500.' This particluar classname will iterate the text onload one character per 500 miliseconds(5 seconds).
- You can create an instance of the Typer class and bind it to events. For example..
  <p>
  <code>let type = new Typer('.example')</code><br>
  <code>type.Start(500)</code>
</p>
<b>Note:</b> In the second implementation above, we create an instance and pass a className as an argument then we call the Start() method and pass a number representing miliseconds as an argument. Now it will be much easier to bind the execution of code to events such as button clicks or scroll events. Whatever floats your code :)
