# simple-modal

Simple, dependency free javascript modal

simple-modal is a **tiny** javascript and CSS modal library. It works very similarly to Bootstrap modals, without the need for jQuery or Bootstrap. In fact, simple-modal can be swapped out with Bootstrap modals without making any changes to your markup.

simple-modal exposes a single global method, `modal()`, that can be used to launch modals with JavaScript. However, the primary means of using simple-modal is through the use of HTML classes and attributes.

## Features

* Dependency free, no jQuery or Bootstrap

* Tiny
    * JS compressed, gzipped - 534 bytes
    * CSS compressed, gzipped - 593 bytes


* Responsive sizing
    * Modal size responds to viewport size
    * Modals never extend outside the viewport


* Optional size classes
    * modal-sm
    * modal-md
    * modal-lg
    * modal-xl


* Click delegation
    * Modals and buttons that are dynamically created will still work


* Swappable with Bootstrap
    * simple-modal uses the same class names and `modal()` method as Bootstrap, making it super simple to swap out as your project grows


## Sample Code

```html
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Simple Modal Demo</title>

        <!-- Include modal styles -->
        <link rel="stylesheet" type="text/css" href="modal.min.css">
    </head>
    <body>
        <!-- Button for launching the modal -->
        <!-- data-toggle="modal" - this element launches a modal -->
        <!-- data-target="<selector>" - selector of target modal -->
        <button data-toggle="modal" data-target="#myModal">Launch Modal</button>

        <!-- Modal markup -->
        <div id="myModal" class="modal modal-md">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-close">&times;</div>
                    <h1>My Simple Modal</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        sse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>

        <!-- Include Modal Script -->
        <script type="text/javascript" src="modal.min.js"></script>
    </body>
</html>
```

## Browser Support

Firefox | Chrome | IE | Edge | Safari | iOS Safari | Chrome Android
------- | ------ | -- | ---- | ------ | ---------- | --------------
26+     | 28+    | 10+| 12+  | 7+     | 7.1+       | 4.4+
