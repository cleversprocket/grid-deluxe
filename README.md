# Grid Deluxe

A Flex based CSS grid with loads of helpful utilities.

## Choose one of these methods to add Grid Deluxe to your project

1. Drop one of the .css files located in the `./dist/` directory into your HTML.
    * `grid-deluxe.min.css` is preferred. This is minified with prefixes.
    * `grid-deluxe.css` is unminified.
    * `grid-deluxe-without-prefixes.css` is unminfied and unprefixed.
2. Add `./src/grid.scss` to your SASS workflow.
3. Customize the build.
    * Change the variables at the top of `./src/grid.scss`.
    * Install the devDependencies by running `npm install`.
    * Run gulp with `npm run build`.

## How do I use it?

It's super simple. Drop a `.grid` or a `.vertical-grid` on a container element, then add any `.col-*` class to a child. There are some classes that are children but don't start with `.col`, like `.push-*` and `.pull-*`, but most of them do.

There are also the special alignment classes that start with `.col-` but can be used on a container. In fact, the alignment classes include a flex declaration so you don't even need a `.grid` class if you add one to your container.

For example

```html
<nav class="grid col-pho-justify">
  <a class="col-12 col-pho-3 col-pho-text-align-left">Road</a>
  <a class="col-12 col-pho-3">Mountain</a>
  <a class="col-12 col-pho-3 col-pho-text-align-right">Cruiser</a>
</nav>
```

Breakdown of the above example
1. Between 0px and 413px all anchors will be stacked.
2. At 414px and greater the anchors will be 1/3 the width and justify aligned. The first will be text aligned left and the last will be aligned right.

## So why another CSS grid system?

This grid system's CSS specificity is flat at one class level. You are welcome. Also, There are a lot of CSS frameworks that are chock full of utilities for styling buttons and dropdowns, and they also include a grid. This isn't one of them.
**This is a a laser focused grid system that includes a bunch of stuff you've always wanted to do with a grid system.**

### Like what?

Well, for any breakpoint, you can:

* Justify, center, right, left, vertically align columns.
* Yeah, I said vertically align.
* Ability to break the grid with as many columns as you want that are equal width.
* Change the order of columns.
* You can seriously change the order without dealing with pulling and pushing.
* Change the text alignment.
* Place a column on its own row while keeping the width in tact.

### You no longer have to do silly stuff like this

```css
.thing {
  text-align: center;
}

@media (min-width: 600px) {
  /* This design has to be left aligned between 600px and 1023px */
  .thing {
    text-align: left;
  }
}

@media (min-width: 1024px) {
  /* Ugh, another rule just to turn it back to center */
  .thing {
    text-align: center;
  }
}
```

### With Grid Deluxe you can do this

```html
<div class="thing col-text-align-center col-phb-text-align-left col-tab-text-align-center">
  My shtuff
</div>
```

### Caveats

The CSS specificity is flat so your CSS will also need to be flat for utility like classes. Otherwise your CSS may override the grid in ways you hadn't intented. I recommend using [OOCSS](https://github.com/stubbornella/oocss/wiki). It's a great system for creating reusable CSS that is composable and predictable.

Browser support is >= IE10 and >= Safari 6.1. I've tested IE11 so if you need 10 support then you better test it. Safari 11 looked good on my Mac, but if you need reassuarance it will look good in 6.1 you better test that as well. 


