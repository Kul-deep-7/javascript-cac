/* In JavaScript, when working with the DOM (Document Object Model), you need to 
select elements to manipulate them. Two commonly used collections returned by DOM 
selectors are NodeList and HTMLCollection. Let's break them down:

DOM Selectors: Here are the main ways to select elements:

1). document.getElementById("id") 
getElementById is a method that retrieves an element by its unique ID. (id = "myDiv")
Returns a single element (not a collection).
Example:
let element = document.getElementById("myDiv");


2). document.getElementsByClassName("class")
getElementsByClassName is a method that retrieves all elements with the specified class name. (class = "myClass")
Returns an HTMLCollection.
Example:
let elements = document.getElementsByClassName("myClass");


3). document.getElementsByTagName("tag")
getElementsByTagName is a method that retrieves all elements with the specified tag name. (tag = "p")
Returns an HTMLCollection.
Example:
let elements = document.getElementsByTagName("p");


4). document.querySelector("selector")
querySelector is a method that retrieves the first element that matches the specified CSS selector. (selector = ".myClass")
Returns the first matching element.
Example:
let element = document.querySelector(".myClass");


How querySelector() Works
querySelector("#id") → Selects the first element with the specified ID.
querySelector(".class") → Selects the first element with the specified class.
querySelector("tag") → Selects the first element of that tag type.


5). document.querySelectorAll("selector")
querySelectorAll is a method that retrieves all elements that match the specified CSS selector. (selector = ".myClass")
Returns a NodeList.
Example:
let elements = document.querySelectorAll(".myClass");


**In JavaScript, you can work with attributes of HTML elements using the following methods:

Method	                         Usage                       	                     Example
getAttribute(name)	             Get an attribute value	                    element.getAttribute("class")
setAttribute(name, value)	     Set or update an attribute	                element.setAttribute("data-role", "admin")
removeAttribute(name)	        Remove an attribute                     	element.removeAttribute("data-role")
attributes	                    Get all attributes as a NamedNodeMap	    element.attributes
Direct property	                Modify attributes directly              	element.className = "new-class"



Differences: innerHTML vs textContent vs innerText

Property	    Parses HTML?	Includes Hidden Text?	    Best Use Case
innerHTML	    ✅ Yes	         ✅ Yes	                 Insert or modify HTML content
textContent	    ❌ No	         ✅ Yes	                 Safe way to get/set text content
innerText	    ❌ No	         ❌ No	                 Reads visible text only



NodeList vs Array in JavaScript:
A NodeList looks similar to an Array, but they have some key differences.

1. What is a NodeList?
A NodeList is a collection of DOM nodes, returned by methods like:
document.querySelectorAll()
document.childNodes
document.getElementsByClassName() (returns an HTMLCollection, but similar)

Example: Getting a NodeList

<p class="info">Paragraph 1</p>
<p class="info">Paragraph 2</p>

<script>
    let nodeList = document.querySelectorAll(".info");
    console.log(nodeList); // NodeList(2) [p, p]
</script>


Key Differences Between NodeList and Array:

Feature         	    NodeList	                Array
Data Type	         Collection of DOM nodes	    General JavaScript collection
Can Contain	         Only DOM elements	            Any data types (numbers, strings, objects, etc.)
Live Update?	    ❌ Static (querySelectorAll)
                    ✅ Live (e.g., childNodes)	  ❌ Never updates automatically

Looping Methods	    forEach(), length, item()	    map(), filter(), forEach(), reduce()
Can Modify?	        ✅ Can modify DOM nodes         ✅ Fully supports all array methods
                    but can't use Array methods 
                    directly	

Since NodeLists don’t support all array methods (map(), filter(), etc.), you may need to convert a NodeList into an Array.


What is an HTMLCollection in JavaScript?
An HTMLCollection is a collection of HTML elements returned by DOM methods like:
document.getElementsByTagName()
document.getElementsByClassName()
document.forms, document.images, etc.

It is similar to a NodeList but with some key differences.

How to Get an HTMLCollection?
Example: Using getElementsByClassName()

<p class="info">Paragraph 1</p>
<p class="info">Paragraph 2</p>

<script>
    let collection = document.getElementsByClassName("info"); // Returns an HTMLCollection
    console.log(collection); // Output: HTMLCollection(2) [p, p]
</script>


HTMLCollection only contains HTML elements and is live.
It doesn't support .forEach() or array methods, so you need to convert it to an array.
It's returned by getElementsByTagName() and getElementsByClassName().


 HTMLCollection vs NodeList
Feature	                HTMLCollection	                         NodeList
Stores	                Only HTML elements(p,head)	             Any nodes (text, elements, comments)
Live Updates	        ✅ Yes (updates when DOM changes)	    ❌ No (querySelectorAll returns a static list)
Supports .forEach()	    ❌ No	                                ✅ Yes
Can use .map(),
 .filter()	            ❌ No (convert to array first)	        ❌ No (convert to array first)




 WE USE Array.from() TO CONVERT A NODELIST & HTMLCOLLECTION TO AN ARRAY
 */