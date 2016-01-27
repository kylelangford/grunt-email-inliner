# Email Boilerplate

Sass / Grunt.js / Zurb Foundation Email Templates (Basic)

### How To Use
Create html/css as normal. When complete, run grunt build:html to apply the styling inline to the elements. This will create a new file in build. Once thats complete run grunt build:css and manually add the compressed css to the build files.

Useful Links
- http://foundation.zurb.com/emails/email-templates.html
- http://www.leemunroe.com/building-html-email/
- http://www.leemunroe.com/sending-email-designers-developers/

Resolve Node dependencies
```
$ npm install

```

Move style.css to inline styles, will create a new file in /build
```
$ grunt build:html

```

Compress CSS for Build
```
$ grunt build:css

```

Watch CSS Changes
```
$ grunt watch

```

Lint CSS
```
$ grunt lint:css

```

Lint HTML
```
$ grunt lint:html

```
