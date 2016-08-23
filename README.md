# grunt-jsl10n

> A plugin for localization resources extraction and transformation.

When localizing an application, a common approach is to litter the application code with calls to a common localization function. E.g.:

```js
alert(l10n.T("Your localizable message"));
```

The approach used by this plugin is quite the opposite: instead of manually inserting the calls, you just prepend a common prefix (usually "res:") to your localizable code:

```js
alert("res:Your localizable message");
```

When the plugin runs, the output will be the exact same code in the first snippet (note that the "res:" prefix will be removed).
Why choose this strategy over the other, more common approach? Well, using this method the jsl10n plugin is able to extract a list of resources, to be fed into your localization process.

Jsl10n is great (and irreplaceable) if you use code generation tools like the Sencha Architect, which are great but do not offer an obvious way to handle localization.

### The resources file
The resources file is a json file describing an object. Every object property defines a context, which is a associated to a task. As an example, you could have 2 pages in your application, "firt" and "second". You would setup two tasks as below:

```js
grunt.initConfig({
  jsl10n: {
		firstPage: {
			options: {
				resourcesFile: 'resources.json',
				resourcesContext: 'first'
			},
			files: {
				'first.l10n.js':  'first.js'
			}
		},
		secondPage: {
			options: {
				resourcesFile: 'resources2.json',
				resourcesContext: 'second'
			},
			files: {
				'second.l10n.js':  'second.js'
			}
		}
	},
});
```

The resulting resorces file will look like:

```js
{
	"first": [ ... resources extracted from first.js ... ],
	"second": [ ... resources extracted from second.js ... ],
}
```

How to use the resources.json in order to load your server side is up to you.



## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsl10n --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsl10n');
```

## The "jsl10n" task

### Overview
In your project's Gruntfile, add a section named `jsl10n` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsl10n: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.prefix
Type: `String`
Default value: `'res:'`

This is the string prefix which is searched to identify localizable strings.

#### options.locFn
Type: `String`
Default value: `'l10n.T'`

The name of the localization function which will be injected around localizable strings.

#### options.resourcesFile
Type: `String`
Default value: `null`

The path to the Json file which will hold the list of localizable strings.

#### options.resourcesContext
Type: `String`
Default value: `default`

The resources file is split into multiple resources blocks, called contexts.

### Usage Examples

#### Default options
In this example the script.js file is scanned, every string starting with "res:" is replaced with a call to l10n.T(...), and no resources output file is configured.

```js
grunt.initConfig({
  jsl10n: {
    options: {},
    files: {
      'dest/script.localized.js': 'src/script.js'
    },
  },
});
```

#### Custom Options
In this example, the localizable strings are identified by a "t/" prefix, the localization function is simpy called "localize", and the strings gathered during the scan are inserted into a resources.json file, under the property "myScript".

```js
grunt.initConfig({
  jsl10n: {
    options: {
			prefix: "t/",
			locFn: "localize",
			resourcesFile: "dest/resources.json",
			resourcesContext: "myScript"
		},
    files: {
      'dest/script.localized.js': 'src/script.js'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

v0.2.7 Fixed a bug in the lexer for regular expression literals interpretation.

v0.2.6 Lodash is now a proper dependency and not a dev-dependency.

v0.2.2 Removed useless v8-pofiler dependency. Soorry!

v0.2.1 Documentation changes.

v0.2.0 First implementation of resources file.

v0.1	Early Draft
