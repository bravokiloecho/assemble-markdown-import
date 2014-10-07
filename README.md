# assemble-markdown-data

> An [Assemble](http://assemble.io) plugin for importing and parsing of markdown from data sources.

Inspired and borrowed heavily from [adjohnson916](https://github.com/adjohnson916)'s [assemble-markdown-data](https://github.com/adjohnson916/assemble-markdown-data) plugin.

## Usage

First, setup a project with Grunt and Assemble.

Then install the plugin: 

```sh
npm install --save-dev assemble-markdown-import
```

Add the plugin to your Grunt assemble config:

```js
assemble: {
  options: {
    plugins: [ 'assemble-markdown-import' ]
  },
  ...
},
```

For any markdown file you want to be imported and parsed,
define it as an object with `markdownFile` as the key whose value is the full path to the markdown file.
After being imported, but before rendering, this object will be replaced by the HTML that results from parsing the markdown.

## Example

```yml
# profile.yml
name: Julio Barnes
about:
  markdownFile: './text/about_julio_barnes.md'
age: 64
```

Resulting JavaScript object:

```js
{
  "name": "Julio Barnes",
  "about": "<h2>I am Julio</h2><p>I am...<ul><li>Brave</li><li>Strong</li><li>Noble</li></ul><p>I also like pudding.</p>
  "age": 64
}
```

If you're using Jade with Assemble, then output the item with the `!=` operator to output the unescaped HTML. Eg:

```
div!=profile.markdownFile
```
