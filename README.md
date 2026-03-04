1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById() selects one element using its ID.

getElementsByClassName() selects multiple elements using class name. It returns a live HTMLCollection.

querySelector() selects the first matching element using CSS selector.

querySelectorAll() selects all matching elements using CSS selector. It returns a static NodeList.
2. How to create and insert a new element into DOM?
const div = document.createElement("div");
div.innerText = "Hello World";
document.body.appendChild(div);

3. What is Event Bubbling?
Event Bubbling means when an event happens on a child element, it first runs on the target element and then bubbles up to its parent elements.
4. What is Event Delegation? Why is it useful?
Event Delegation means adding an event listener to a parent element instead of multiple child elements.
It is useful because:
Improves performance
Works for dynamically added elements
Requires less code
5. Difference between preventDefault() and stopPropagation()
preventDefault() stops the default browser behavior (like form submit reload).
stopPropagation() stops the event from bubbling up to parent elements.
