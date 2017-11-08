var levels = [
  {
    name: '(1) stack layout vertical (default)',
    instructions: {
      'en': '<p>Get ready to Learn NativeScript Layouts! Inspired by <a href=\'http://flexboxfroggy.com/\' target=\'_blank\'>Flexbox Froggy</a>, this tool is a fun and easy way for you to learn about mobile app layouts with NativeScript. Each level presents a different mobile app view that needs native UI elements laid out a certain way. NativeScript provides a variety of layout tags to help with this:</p><ul><li><code>&lt;StackLayout&gt;</code> <i>stacks</i> components on top of (or next to) each other;</li><li><code>&lt;WrapLayout&gt;</code> uses available space to <i>wrap</i> components on new rows/cols;</li><li><code>&lt;AbsoluteLayout&gt;</code> places components with <i>absolute</i> x/y coordinates;</li><li><code>&lt;GridLayout&gt;</code> acts like an HTML table, with rows and cols;</li><li><code>&lt;DockLayout&gt;</code> positions components in <i>docked</i> containers (top/bottom/left/right);</li><li><code>&lt;FlexboxLayout&gt;</code> lets you leverage CSS flexbox.</li></ul><p>Let\'s start with a <code>&lt;StackLayout&gt;</code>. By default, a <code>&lt;StackLayout&gt;</code> will stack components vertically. Change the code below to make it so the UI components align each other, in a <i>horizontal</i> orientation 😉.</p>'
    },
	board: 'nav',
	result: [ {'top': 100, 'left': 50}, {'top': 100, 'left': 135}, {'top': 100, 'left': 215} ],
	levelone: [ {'top': 100, 'left': 50}, {'top': 190, 'left': 50}, {'top': 280, 'left': 50} ],
	answer: "<StackLayout orientation=\"horizontal\">",
	lines: 1,
	hint: "<StackLayout orientation=\"vertical\">",
	preselect: [26, 34],
    before: "",
    after: "  <Image src=\"res://nativescript\" stretch=\"none\" />\n  <Image src=\"res://angular\" stretch=\"none\" />\n  <Image src=\"res://vue\" stretch=\"none\" />\n</StackLayout>"
  },
  {
    name: '(2) stack layout horizontal alignment',
    instructions: {
		'en': '<p><b>You did it!</b> But yeah, that was an easy way to start 😀. Let\'s level up to <i>align</i> our components relative to the device screen.</p><p>On this view, we want to <i>center</i> all of our components within the <code>&lt;StackLayout&gt;</code>. We do so with the <code>horizontalAlignment</code> property.'
	  },
	board: 'wp',
	result: [ {'top': 100, 'left': 110}, {'top': 100, 'left': 195} ],
	answer: "<StackLayout orientation=\"horizontal\" horizontalAlignment=\"center\">",
	lines: 1,
	hint: "<StackLayout orientation=\"horizontal\" horizontalAlignment=\"\">",
	preselect: [59, 59],
    before: "",
    after: "  <Image src=\"res://webpack\" stretch=\"none\" />\n  <Image src=\"res://preact\" stretch=\"none\" />\n</StackLayout>"
  },
  {
    name: '(3) stack layout horizontal and vertical alignment',
    instructions: {
      'en': '<p><b>Great!</b> You just learned how to center some components on the screen 😎.</p><p>But what if we wanted to center align our components horizontally and vertically?</p><p>In the previous level, you added the <i>center</i> attribute to the <code>horizontalAlignment</code> property. In this lesson we will have to add a <code>verticalAlignment</code> property. Go for it:</p>'
    },
	board: 'vr',
	result: [ {'top': 290, 'left': 110}, {'top': 290, 'left': 200} ],
	answer: "<StackLayout orientation=\"horizontal\" horizontalAlignment=\"center\" verticalAlignment=\"center\">",
	lines: 2,
	hint: "<StackLayout orientation=\"horizontal\" horizontalAlignment=\"center\" >",
	preselect: [67, 67],
    before: "",
    after: "  <Image src=\"res://vue\" stretch=\"none\" />\n  <Image src=\"res://redux\" stretch=\"none\" />\n</StackLayout>"
  },
  {
    name: '(4) stack layout stagger elements',
    instructions: {
      'en': '<p><b>Nice work!</b> Time to take our <code>&lt;StackLayout&gt;</code> knowledge to the next level 🙌.</p><p>This time we want to <i>align individual components</i> on our screen, within a single <code>&lt;StackLayout&gt;</code> tag. Remember the <code>horizontalAlignment</code> property? Well, you can also assign that property to individual UI components!</p><p>Let\'s stagger the placement of our components by aligning the Angular logo to the left, the Vue logo in the center, and the Preact logo to the right by adding a <code>horizontalAlignment</code> to each <code>Image</code> tag and giving each the appropriate left, center, or right value.</p>'
    },
	board: 'avp',
	result: [ {'top': 100, 'left': 50}, {'top': 190, 'left': 155}, {'top': 270, 'left': 260} ],
	answer: "<Image src=\"res://angular\" stretch=\"none\" horizontalAlignment=\"left\" />\n<Image src=\"res://vue\" stretch=\"none\" horizontalAlignment=\"center\" />\n<Image src=\"res://preact\" stretch=\"none\" horizontalAlignment=\"right\" />",
	lines: 3,
	hint: "<Image src=\"res://angular\" stretch=\"none\" />\n<Image src=\"res://vue\" stretch=\"none\" />\n<Image src=\"res://preact\" stretch=\"none\" />",
    before: "<StackLayout orientation=\"vertical\">",
    after: "</StackLayout>"
  },
  {
    name: '(5) wrap layout horizontal',
    instructions: {
      'en': '<p><b>Awesome!</b> Even if you had to cheat with the "Help!" button, you\'ve still learned something...right?</p><p>Let\'s put the <code>&lt;StackLayout&gt;</code> to rest for now and instead concentrate on learning the <code>&lt;WrapLayout&gt;</code>.</p><p>If you recall, the <code>&lt;WrapLayout&gt;</code> simply <i>wraps</i> components around each other, filling the available space (either horizontally - in rows, or vertically - in columns). By default, the <i>orientation</i> of a <code>&lt;WrapLayout&gt;</code> is horizontal.</p><p>Let\'s see what this looks like by plugging <i>horizontal</i> into the <i>orientation</i> property below:</p>'
    },
	board: 'navpwri',
	result: [ {'top': 100, 'left': 50}, {'top': 100, 'left': 135}, {'top': 100, 'left': 215}, {'top': 190, 'left': 50}, {'top': 190, 'left': 135}, {'top': 190, 'left': 215}, {'top': 280, 'left': 50} ],
	answer: "<WrapLayout orientation=\"horizontal\">",
	lines: 1,
	hint: "<WrapLayout orientation=\"\">",
	preselect: [25, 25],
    before: "",
    after: "  <Image src=\"res://nativescript\" stretch=\"none\" />\n  <Image src=\"res://angular\" stretch=\"none\" />\n  <Image src=\"res://vue\" stretch=\"none\" />\n  <Image src=\"res://preact\" stretch=\"none\" />\n  <Image src=\"res://webpack\" stretch=\"none\" />\n  <Image src=\"res://redux\" stretch=\"none\" />\n  <Image src=\"res://nativescripting\" stretch=\"none\" />\n</WrapLayout>"
  },
  {
    name: '(6) wrap layout vertical',
    instructions: {
      'en': '<p>I knew you had it in you! 😉</p><p>Now let\'s switch up our <code>&lt;WrapLayout&gt;</code> to wrap our components so that they take up available space in the next column. Hint: the orientation is <i>vertical</i>.</p>'
    },
	board: 'navpwri',
	result: [ {'top': 100, 'left': 50}, {'top': 190, 'left': 50}, {'top': 280, 'left': 50}, {'top': 370, 'left': 50}, {'top': 460, 'left': 50}, {'top': 100, 'left': 135}, {'top': 190, 'left': 135} ],
	answer: "<WrapLayout orientation=\"vertical\">",
	lines: 1,
	hint: "<WrapLayout orientation=\"\">",
	preselect: [25, 25],
    before: "",
    after: "  <Image src=\"res://nativescript\" stretch=\"none\" />\n  <Image src=\"res://angular\" stretch=\"none\" />\n  <Image src=\"res://vue\" stretch=\"none\" />\n  <Image src=\"res://preact\" stretch=\"none\" />\n  <Image src=\"res://webpack\" stretch=\"none\" />\n  <Image src=\"res://redux\" stretch=\"none\" />\n  <Image src=\"res://nativescripting\" stretch=\"none\" />\n</WrapLayout>"
  },
  {
    name: '(7) absolute layout standard',
    instructions: {
      'en': '<p>Let\'s keep marching on 🚶! The <code>&lt;WrapLayout&gt;</code> is pretty easy to grok, so let\'s move on to the next layout: <code>&lt;AbsoluteLayout&gt;</code></p><p>If you\'re a web developer, you may shy away from absolute positioning of elements in favor of responsive layouts. The same rules generally apply to NativeScript too. Since screen sizes vary greatly, you only want to use an <code>&lt;AbsoluteLayout&gt;</code> in the most predictable situations where you can safely position components using top/left values that are relative to the layout container.</p><p>Confused? Don\'t be. In the code editor, simply assign <i>top</i> and <i>left</i> properties to each <code>Image</code> component, like so:</p><ul><li><code>&lt;Image src=\"res://nativescript\" stretch=\"none\" top=\"10\" left=\"10\" /&gt;</code></li><li><code>[...] top=\"10\" left=\"170\"</code></li><li><code>[...] top=\"170\" left=\"10\"</code></li><li><code>[...] top=\"170\" left=\"170\"</code></li></ul><p><i>The values of the top/left properties are "density-independent pixels" (a unit of measure to allow layouts to be designed independent of screen density).</i></p>'
    },
	board: 'navp',
	result: [ {'top': 100, 'left': 50}, {'top': 100, 'left': 135}, {'top': 190, 'left': 50}, {'top': 190, 'left': 135} ],
	answer: "<Image src=\"res://nativescript\" stretch=\"none\" top=\"10\" left=\"10\" />\n<Image src=\"res://angular\" stretch=\"none\" top=\"10\" left=\"170\" />\n<Image src=\"res://vue\" stretch=\"none\" top=\"170\" left=\"10\" />\n<Image src=\"res://preact\" stretch=\"none\" top=\"170\" left=\"170\" />",
	lines: 4,
	hint: "<Image src=\"res://nativescript\" stretch=\"none\" />\n<Image src=\"res://angular\" stretch=\"none\" />\n<Image src=\"res://vue\" stretch=\"none\" />\n<Image src=\"res://preact\" stretch=\"none\" />",
	preselect: [25, 25],
    before: "<AbsoluteLayout>",
    after: "</AbsoluteLayout>"
  },
  {
    name: '(8) absolute layout overlapping',
    instructions: {
      'en': '<p><b>Great!</b> But it\'s time to take it up another notch. The real power of the <code>&lt;AbsoluteLayout&gt;</code> can be seen when you need to position components in ways you wouldn\'t normally be able to position them. For example, say you want to overlap components. How would we go about doing that?</p><p>The obvious way is to simply set new top/left values and call it good. We are going to try a different way, and that\'s with adding a <i>margin</i> property to an element. Yes, the same CSS margin you use on the web!</p><p>In this example, go ahead and add a margin of 30 to the second <code>Image</code> element and see what that does.</p>'
    },
	board: 'wr',
	result: [ {'top': 100, 'left': 50}, {'top': 130, 'left': 80} ],
	answer: "<Image src=\"res://redux\" stretch=\"none\" top=\"10\" left=\"10\" margin=\"30\" />",
	lines: 1,
	hint: "<Image src=\"res://redux\" stretch=\"none\" top=\"10\" left=\"10\"  />",
	preselect: [63, 63],
    before: "<AbsoluteLayout>\n  <Image src=\"res://webpack\" stretch=\"none\" top=\"10\" left=\"10\" />\n",
    after: "</AbsoluteLayout>"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You did it!</p>'
  },
  board: 'n',
  result: [],
  answer: '',
  lines: 0,
  hint: '',
  before: '',
  after: ''
};