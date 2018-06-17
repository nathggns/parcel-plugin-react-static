# parcel-plugin-react ALPHA

This is a [Parcel](https://github.com/parcel-bundler/parcel) plugin to compile a React/styled-components single page app into a static bundle.

This allows you to do what is commonly known as "server-side rendering", without the server component.

**Note:** This has currently only been developed for personal use. It is untested, and extremely rigid in how it has been written. It makes a lot of assumptions that may not apply to your use case. It is also extremely unperformant. Please consider this when deciding whether to use it. 

On the other hand, if you have a need for a plugin like this, please do consider contributing.   

## Caveats

* Does not support any kind of routing yet. 
* Requires there to be only one HTML page in your bundle
* Requires there to be an `App.js` file that exports your main component
* Requires there to be a `#app` element in your HTML entry file. 
* *Currently requires bundling everything twice – one to create your bundle, another to render your app to your bundle entry file.* 

## Installation

```
$ npm add parcel-plugin-react-static
// or
$ yarn add parcel-plugin-react-static
``` 
 
