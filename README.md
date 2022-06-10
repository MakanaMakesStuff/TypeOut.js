# TypeOut.js
A JavaScript plugin that will take a specified text and render it in an iterative fashion at a predetermined speed. See example below
## How do I use it?
You can simply download the script and include/reference it in one of yours projects. <b>Here are 2 ways to implement the script:</b>
- You can specify a classname on your DOM elements such as, 'type-500'. So when you add this class, you must enter 'type-' followed by any number representing miliseconds '-500.' This particluar classname will iterate through the text on document load at one character per 500 miliseconds(0.5 seconds). You must call the set() method on a Typer instance in order to get the classname seletors working properly..
  <p>
  <code>let typer = new Typer()</code><br>
  <code>typer.set()</code>
  </p>
- You can create an instance of the Typer class and bind it to events. For example..
  <p>
  <code>let typer = new Typer()</code><br>
  <code>typer.start('.example', 500)</code>
</p>
<b>Note:</b> In the second implementation above we create an instance of Typer, then we pass a className and number representing miliseconds to the Start() method. Now it will be much easier to bind the execution of code to events such as button clicks or scroll events. Whatever floats your code :)
