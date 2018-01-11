var levels = [
  {
    name: '(1) stack layout vertical (default)',
    instructions: {
      en:
        "<p>Get ready to Learn NativeScript Layouts! Inspired by <a href='http://flexboxfroggy.com/' target='_blank'>Flexbox Froggy</a>, this tool is a fun and easy way for you to learn about mobile app layouts with NativeScript. Each level presents a different mobile app view that needs native UI elements laid out a certain way. NativeScript provides a variety of layout tags to help with this:</p><ul><li><code>&lt;StackLayout&gt;</code> <i>stacks</i> components on top of (or next to) each other;</li><li><code>&lt;WrapLayout&gt;</code> uses available space to <i>wrap</i> components on new rows/columns;</li><li><code>&lt;AbsoluteLayout&gt;</code> places components with <i>absolute</i> top/left coordinates;</li><li><code>&lt;GridLayout&gt;</code> acts like an HTML table, with rows and columns;</li><li><code>&lt;DockLayout&gt;</code> positions components in <i>docked</i> containers (top/bottom/left/right);</li><li><code>&lt;FlexboxLayout&gt;</code> lets you leverage CSS flexbox.</li></ul><p>Let's start with a <code>&lt;StackLayout&gt;</code>. By default, a <code>&lt;StackLayout&gt;</code> will stack components vertically. Change the code below to make it so the UI components align each other, in a <i>horizontal</i> orientation 😉.</p>"
    },
    board: 'nav',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 135 },
      { top: 100, left: 215 }
    ],
    levelone: [
      { top: 100, left: 50 },
      { top: 190, left: 50 },
      { top: 280, left: 50 }
    ],
    answer: '<StackLayout orientation="horizontal">',
    lines: 1,
    hint: '<StackLayout orientation="vertical">',
    preselect: [26, 34],
    before: '',
    after:
      '  <Image src="res://nativescript" stretch="none" />\n  <Image src="res://angular" stretch="none" />\n  <Image src="res://vue" stretch="none" />\n</StackLayout>'
  },
  {
    name: '(2) stack layout horizontal alignment',
    instructions: {
      en:
        "<p><b>You did it!</b> But yeah, that was an easy way to start 😀. Let's level up to <i>align</i> our components relative to the device screen.</p><p>On this view, we want to <i>center</i> all of our components within the <code>&lt;StackLayout&gt;</code>. We do so with the <code>horizontalAlignment</code> property."
    },
    board: 'wp',
    result: [{ top: 100, left: 110 }, { top: 100, left: 195 }],
    answer:
      '<StackLayout orientation="horizontal" horizontalAlignment="center">',
    lines: 1,
    hint: '<StackLayout orientation="horizontal" horizontalAlignment="">',
    preselect: [59, 59],
    before: '',
    after:
      '  <Image src="res://webpack" stretch="none" />\n  <Image src="res://preact" stretch="none" />\n</StackLayout>'
  },
  {
    name: '(3) stack layout horizontal and vertical alignment',
    instructions: {
      en:
        '<p><b>Great!</b> You just learned how to center some components on the screen 😎.</p><p>But what if we wanted to center align our components horizontally <i>and</i> vertically?</p><p>In the previous level, you added the <i>center</i> attribute to the <code>horizontalAlignment</code> property. In this lesson we will have to add a <code>verticalAlignment</code> property. Go for it:</p>'
    },
    board: 'vr',
    result: [{ top: 290, left: 110 }, { top: 290, left: 200 }],
    answer:
      '<StackLayout orientation="horizontal" horizontalAlignment="center" verticalAlignment="center">',
    lines: 2,
    hint:
      '<StackLayout orientation="horizontal" horizontalAlignment="center" >',
    preselect: [67, 67],
    before: '',
    after:
      '  <Image src="res://vue" stretch="none" />\n  <Image src="res://redux" stretch="none" />\n</StackLayout>'
  },
  {
    name: '(4) stack layout stagger elements',
    instructions: {
      en:
        "<p><b>Nice work!</b> Time to take our <code>&lt;StackLayout&gt;</code> knowledge to the next level 🙌.</p><p>This time we want to <i>align individual components</i> on our screen, within a single <code>&lt;StackLayout&gt;</code> tag. Remember the <code>horizontalAlignment</code> property? Well, you can also assign that property to individual UI components!</p><p>Let's stagger the placement of our components by aligning the Angular logo to the left, the Vue logo in the center, and the Preact logo to the right by adding a <code>horizontalAlignment</code> to each <code>Image</code> tag and giving each the appropriate left, center, or right value.</p>"
    },
    board: 'avp',
    result: [
      { top: 100, left: 50 },
      { top: 190, left: 155 },
      { top: 270, left: 260 }
    ],
    answer:
      '<Image src="res://angular" stretch="none" horizontalAlignment="left" />\n<Image src="res://vue" stretch="none" horizontalAlignment="center" />\n<Image src="res://preact" stretch="none" horizontalAlignment="right" />',
    lines: 3,
    hint:
      '<Image src="res://angular" stretch="none" />\n<Image src="res://vue" stretch="none" />\n<Image src="res://preact" stretch="none" />',
    before: '<StackLayout orientation="vertical">',
    after: '</StackLayout>'
  },
  {
    name: '(5) wrap layout horizontal',
    instructions: {
      en:
        "<p><b>Awesome!</b> Even if you had to cheat with the \"Help!\" button, you've still learned something...right?</p><p>Let's put the <code>&lt;StackLayout&gt;</code> to rest for now and instead concentrate on learning the <code>&lt;WrapLayout&gt;</code>.</p><p>If you recall, the <code>&lt;WrapLayout&gt;</code> simply <i>wraps</i> components around each other, filling the available space (either horizontally - in rows, or vertically - in columns). By default, the <i>orientation</i> of a <code>&lt;WrapLayout&gt;</code> is horizontal.</p><p>Let's see what this looks like by plugging <i>horizontal</i> into the <i>orientation</i> property below:</p>"
    },
    board: 'navpwri',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 135 },
      { top: 100, left: 215 },
      { top: 190, left: 50 },
      { top: 190, left: 135 },
      { top: 190, left: 215 },
      { top: 280, left: 50 }
    ],
    answer: '<WrapLayout orientation="horizontal">',
    lines: 1,
    hint: '<WrapLayout orientation="">',
    preselect: [25, 25],
    before: '',
    after:
      '  <Image src="res://nativescript" stretch="none" />\n  <Image src="res://angular" stretch="none" />\n  <Image src="res://vue" stretch="none" />\n  <Image src="res://preact" stretch="none" />\n  <Image src="res://webpack" stretch="none" />\n  <Image src="res://redux" stretch="none" />\n  <Image src="res://nativescripting" stretch="none" />\n</WrapLayout>'
  },
  {
    name: '(6) wrap layout vertical',
    instructions: {
      en:
        "<p>I knew you had it in you! 😉</p><p>Now let's switch up our <code>&lt;WrapLayout&gt;</code> to wrap our components so that they take up available space in the next column. Hint: the orientation is <i>vertical</i>.</p>"
    },
    board: 'navpwri',
    result: [
      { top: 100, left: 50 },
      { top: 190, left: 50 },
      { top: 280, left: 50 },
      { top: 370, left: 50 },
      { top: 460, left: 50 },
      { top: 100, left: 135 },
      { top: 190, left: 135 }
    ],
    answer: '<WrapLayout orientation="vertical">',
    lines: 1,
    hint: '<WrapLayout orientation="">',
    preselect: [25, 25],
    before: '',
    after:
      '  <Image src="res://nativescript" stretch="none" />\n  <Image src="res://angular" stretch="none" />\n  <Image src="res://vue" stretch="none" />\n  <Image src="res://preact" stretch="none" />\n  <Image src="res://webpack" stretch="none" />\n  <Image src="res://redux" stretch="none" />\n  <Image src="res://nativescripting" stretch="none" />\n</WrapLayout>'
  },
  {
    name: '(7) absolute layout standard',
    instructions: {
      en:
        '<p>Let\'s keep marching on 🚶! The <code>&lt;WrapLayout&gt;</code> is pretty easy to grok, so let\'s move on to the next layout: <code>&lt;AbsoluteLayout&gt;</code></p><p>If you\'re a web developer, you may shy away from absolute positioning of elements in favor of responsive layouts. The same rules generally apply to NativeScript too. Since screen sizes vary greatly, you only want to use an <code>&lt;AbsoluteLayout&gt;</code> in the most predictable situations where you can safely position components using top/left values that are relative to the layout container.</p><p>Confused? Don\'t be. In the code editor, simply assign <i>top</i> and <i>left</i> properties to each <code>Image</code> component, like so:</p><ul><li><code>&lt;Image src="res://nativescript" stretch="none" top="10" left="10" /&gt;</code></li><li><code>[...] top="10" left="170"</code></li><li><code>[...] top="170" left="10"</code></li><li><code>[...] top="170" left="170"</code></li></ul><p>⚠️ Tip: The values of the top/left properties are "density-independent pixels" (a unit of measure to allow layouts to be designed independent of screen density).</p>'
    },
    board: 'navp',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 135 },
      { top: 190, left: 50 },
      { top: 190, left: 135 }
    ],
    answer:
      '<Image src="res://nativescript" stretch="none" top="10" left="10" />\n<Image src="res://angular" stretch="none" top="10" left="170" />\n<Image src="res://vue" stretch="none" top="170" left="10" />\n<Image src="res://preact" stretch="none" top="170" left="170" />',
    lines: 4,
    hint:
      '<Image src="res://nativescript" stretch="none" />\n<Image src="res://angular" stretch="none" />\n<Image src="res://vue" stretch="none" />\n<Image src="res://preact" stretch="none" />',
    preselect: [25, 25],
    before: '<AbsoluteLayout>',
    after: '</AbsoluteLayout>'
  },
  {
    name: '(8) absolute layout overlapping',
    instructions: {
      en:
        "<p><b>Great!</b> But it's time to take it up another notch. The real power of the <code>&lt;AbsoluteLayout&gt;</code> can be seen when you need to position components in ways you can't with other layout containers. For example, say you want to <i>overlap</i> components. How would we go about doing that?</p><p>The obvious way is to simply set new top/left values and call it good. We are going to try a different way though, and that's with adding a <i>margin</i> property to an element. Yes, the same CSS margin you use on the web!</p><p>In this example, go ahead and add a margin of 30 to the second <code>Image</code> element and see what that does. 🧐</p>"
    },
    board: 'wr',
    result: [{ top: 100, left: 50 }, { top: 130, left: 80 }],
    answer:
      '<Image src="res://redux" stretch="none" top="10" left="10" margin="30" />',
    lines: 1,
    hint: '<Image src="res://redux" stretch="none" top="10" left="10"  />',
    preselect: [63, 63],
    before:
      '<AbsoluteLayout>\n  <Image src="res://webpack" stretch="none" top="10" left="10" />\n',
    after: '</AbsoluteLayout>'
  },
  {
    name: '(9) dock layout stretchlastchild = false',
    instructions: {
      en:
        "<p>You're really getting the hang of this aren't you? 😎 But I think it's time we moved on to the <code>&lt;DockLayout&gt;</code>.</p><p>You generally use the <code>&lt;DockLayout&gt;</code> when you want to position elements up against the sides of its parent container (often the page/view itself).</p><p>Let's start simple by focusing on <i>docking</i> our icons on the left/top/right/bottom of our screen. Pay attention to the <code>stretchLastChild</code> property, as that will play into what we do in the next lesson.</p><p>⚠️ Don't be surprised if the final element positions look odd, as you have to remember the docking containers end up looking like this: <img src='https://docs.nativescript.org/img/modules/layouts/dock-layout1.png' width='15%' align='top' /></p>"
    },
    board: 'navw',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 150 },
      { top: 190, left: 260 },
      { top: 490, left: 150 }
    ],
    answer:
      '<Image src="res://vue" stretch="none" dock="right" />\n<Image src="res://webpack" stretch="none" dock="bottom" />',
    lines: 2,
    hint:
      '<Image src="res://vue" stretch="none" dock="" />\n<Image src="res://webpack" stretch="none" dock="" />\n',
    preselect: [44, 44],
    before:
      '<DockLayout stretchLastChild="false">\n  <Image src="res://nativescript" stretch="none" dock="left" />\n  <Image src="res://angular" stretch="none" dock="top" />\n',
    after: '</DockLayout>'
  },
  {
    name: '(10) dock layout stretchlastchild = true',
    instructions: {
      en:
        "<p>Now that you have a rough idea of what the <code>&lt;DockLayout&gt;</code> can do, let's look more closely at that <code>stretchLastChild</code> property. Setting <code>stretchLastChild</code> to true actually lets you \"dock\" an item in the middle of the parent container. The <i>LastChild</i> part of the name is key to telling you that the last element listed is the one that will get <i>stretched</i> or <i>centered</i> in your layout.</p><p>This time, go ahead and set the <code>stretchLastChild</code> to true and see what happens to our elements.</p><p>⚠️ Like in the last lesson, the final element positions might not be quite what you expect, as the docking containers end up looking like this: <img src='https://docs.nativescript.org/img/modules/layouts/dock-layout2.png' width='15%' align='top' /></p>"
    },
    board: 'navw',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 150 },
      { top: 190, left: 260 },
      { top: 190, left: 150 }
    ],
    answer: '<DockLayout stretchLastChild="true">',
    lines: 1,
    hint: '<DockLayout stretchLastChild="">\n',
    preselect: [30, 30],
    before: '',
    after:
      '  <Image src="res://nativescript" stretch="none" dock="left" />\n  <Image src="res://angular" stretch="none" dock="top" />\n  <Image src="res://vue" stretch="none" dock="right" />\n  <Image src="res://webpack" stretch="none" dock="bottom" />\n</DockLayout>'
  },
  {
    name: '(11) grid layout simple column',
    instructions: {
      en:
        "<p>🏆 for you! But...you're not done yet!</p><p>This is a good thing, as we are about to start working with the most powerful layout container of them all: the <code>&lt;GridLayout&gt;</code></p><p>It's easiest to think of a <code>&lt;GridLayout&gt;</code> the same way you think of an HTML table. It has rows and columns, and you specify the size of your rows/columns (along with which row/column each element should be placed into). Simple enough, right?</p><p>Let's start this lesson by focusing on columns. We'll make a two column layout with <code>auto</code> sizing on both columns (more on this later). You just need to plug in the appropriate 0-based index column in each element below.</p>"
    },
    board: 'ir',
    result: [{ top: 100, left: 50 }, { top: 100, left: 135 }],
    answer:
      '<Image src="res://nativescripting" stretch="none" row="0" col="0" />\n<Image src="res://redux" stretch="none" row="0" col="1" />\n',
    lines: 2,
    hint:
      '  <Image src="res://nativescripting" stretch="none" row="0" col="" />\n  <Image src="res://redux" stretch="none" row="0" col="" />\n',
    preselect: [65, 65],
    before: '<GridLayout columns="auto, auto" rows="auto">',
    after: '</GridLayout>'
  },
  {
    name: '(12) grid layout simple column + simple row',
    instructions: {
      en:
        "<p>Alright alright...I know that was too easy. 😅</p><p>Let's step it up a little and add some <code>rows</code> to our <code>&lt;GridLayout&gt;</code></p><p>Again, like with HTML table columns, we have rows that act the same way.</p><p>In this lesson, let's organize six image elements in a two column/three row layout. Again, we will explain what the heck <code>auto</code> means in a later lesson.</p>"
    },
    board: 'navwir',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 135 },
      { top: 190, left: 50 },
      { top: 190, left: 135 },
      { top: 280, left: 50 },
      { top: 280, left: 135 }
    ],
    answer:
      '<Image src="res://nativescript" stretch="none" row="0" col="0" />\n<Image src="res://angular" stretch="none" row="0" col="1" />\n<Image src="res://vue" stretch="none" row="1" col="0" />\n<Image src="res://webpack" stretch="none" row="1" col="1" />\n<Image src="res://nativescripting" stretch="none" row="2" col="0" />\n<Image src="res://redux" stretch="none" row="2" col="1" />\n',
    lines: 6,
    hint:
      '  <Image src="res://nativescript" stretch="none" row="" col="0" />\n  <Image src="res://angular" stretch="none" row="" col="1" />\n  <Image src="res://vue" stretch="none" row="" col="0" />\n  <Image src="res://webpack" stretch="none" row="" col="1" />\n  <Image src="res://nativescripting" stretch="none" row="" col="0" />\n  <Image src="res://redux" stretch="none" row="" col="1" />\n',
    preselect: [54, 54],
    before: '<GridLayout columns="auto, auto" rows="auto, auto, auto">',
    after: '</GridLayout>'
  },
  {
    name: '(13) grid layout colspan',
    instructions: {
      en:
        "<p>Yay! That was a bit of a tough one. Even if you used <i>Help!</i>, I won't tell anyone. 😉</p><p>Now we can look at the next HTML-like attribute of the <code>&lt;GridLayout&gt;</code>, <code>colSpan</code>. Just like with HTML tables, we can <i>span</i> an element across multiple columns by using this property.</p><p>Let's set it up so that the image in the second row spans across all three columns.</p><p>Admittedly, using images for this exercise doesn't <i>quite</i> make sense, but trust me when I say the image is spanning all three columns. 😜</p>"
    },
    board: 'navp',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 135 },
      { top: 100, left: 220 },
      { top: 190, left: 50 }
    ],
    answer:
      '<Image src="res://nativescript" stretch="none" row="0" col="0" />\n<Image src="res://angular" stretch="none" row="0" col="1" />\n<Image src="res://vue" stretch="none" row="0" col="2" />\n<Image src="res://preact" stretch="none" row="1" col="0" colSpan="3" />\n',
    lines: 4,
    hint:
      '  <Image src="res://nativescript" stretch="none" row="0" col="0" />\n  <Image src="res://angular" stretch="none" row="0" col="1" />\n  <Image src="res://vue" stretch="none" row="0" col="2" />\n  <Image src="res://preact" stretch="none" row="1" col="0" colSpan="" />\n',
    preselect: [258, 258],
    before: '<GridLayout columns="auto, auto, auto" rows="auto, auto">',
    after: '</GridLayout>'
  },
  {
    name: '(14) grid layout rowspan',
    instructions: {
      en:
        "<p>Great, now let's flip our <code>&lt;GridLayout&gt;</code> on its head 🙃 and learn about the <code>rowSpan</code> property. Again, like with an HTML table, with <code>rowSpan></code> we can <i>span</i> an element across multiple rows.</p><p>Now we can get a little more crafty with our layout and line up our image elements in a unique way. Go ahead and use the <code>rowSpan</code> property on elements in the first two columns so that there is one image in the first column, two in the second, and three in the third.</p>"
    },
    board: 'nawvir',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 135 },
      { top: 100, left: 220 },
      { top: 190, left: 135 },
      { top: 190, left: 220 },
      { top: 280, left: 220 }
    ],
    answer:
      '<Image src="res://nativescript" stretch="none" row="0" col="0" rowSpan="3" />\n<Image src="res://angular" stretch="none" row="0" col="1" />\n<Image src="res://vue" stretch="none" row="1" col="1" rowSpan="2" />\n',
    lines: 3,
    hint:
      '  <Image src="res://nativescript" stretch="none" row="0" col="0" rowSpan="" />\n  <Image src="res://angular" stretch="none" row="0" col="1" />\n  <Image src="res://vue" stretch="none" row="1" col="1" rowSpan="" />\n',
    preselect: [258, 258],
    before: '<GridLayout columns="auto, auto, auto" rows="auto, auto, auto">',
    after:
      '  <Image src="res://webpack" stretch="none" row="0" col="2" />\n  <Image src="res://nativescripting" stretch="none" row="1" col="2" />\n  <Image src="res://redux" stretch="none" row="2" col="2" />\n</GridLayout>'
  },
  {
    name: '(15) grid layout fixed/auto sizing',
    instructions: {
      en:
        '<p>Alright - you think you have the <code>&lt;GridLayout&gt;</code> mastered? Haha! Think again! 😂</p><p>It\'s time to look into how we <i>size</i> our columns.</p><p>Recall in previous lessons we used syntax like <code>columns="auto" rows="auto"</code>? When we use <code>auto</code> we are telling our layout to <i>automatically</i> size the columns/rows based on the actual size of the element.</p><p>What if we wanted to use a <i>specific</i> width on a column though? Luckily we can handle that by simply substituting in a numeric value.</p><p>Let\'s space out our images a little and use a fixed with of <b>200</b> on our first column and <b>200</b> on our first row.</p>'
    },
    board: 'wirp',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 220 },
      { top: 280, left: 50 },
      { top: 280, left: 220 }
    ],
    answer: '<GridLayout columns="200, auto" rows="200, auto">\n',
    lines: 1,
    hint: '<GridLayout columns=", auto" rows=", auto">\n',
    preselect: [21, 21],
    before: '',
    after:
      '  <Image src="res://webpack" stretch="none" row="0" col="0" />\n  <Image src="res://nativescripting" stretch="none" row="0" col="1" />\n  <Image src="res://redux" stretch="none" row="1" col="0" />\n  <Image src="res://preact" stretch="none" row="1" col="1" />\n</GridLayout>'
  },
  {
    name: '(16) grid layout star sizing',
    instructions: {
      en:
        "<p>🏁 Almost done! 🏁</p><p>Let's wrap up the <code>&lt;GridLayout&gt;</code> by looking at the final way to <i>size</i> a row or column, and that is with <code>star</code> sizing...or <code>*</code> rather. Star sizing allows your row/column to take up as much space as possible, <i>after</i> sizing for fixed width and auto width columns (proportionally divided over all of the star-sized columns). Confused yet 😕? It just means that using star sizing will make sure your grid's rows and columns take up as much space as possible.</p><p>Let's take a look at an example that is similar to the placement of images from our last lesson. But this time we are going to use star sizing and add <i>multipliers</i> to get double the space on the first column and first row (hint: <code>2*</code> gives you twice the space of <code>*</code>).</p>"
    },
    board: 'navp',
    result: [
      { top: 100, left: 50 },
      { top: 100, left: 250 },
      { top: 400, left: 50 },
      { top: 400, left: 250 }
    ],
    answer: '<GridLayout columns="2*, *" rows="2*, *">\n',
    lines: 1,
    hint: '<GridLayout columns=", *" rows="2*, *">\n',
    preselect: [21, 21],
    before: '',
    after:
      '  <Image src="res://nativescript" stretch="none" row="0" col="0" />\n  <Image src="res://angular" stretch="none" row="0" col="1" />\n  <Image src="res://vue" stretch="none" row="1" col="0" />\n  <Image src="res://preact" stretch="none" row="1" col="1" />\n</GridLayout>'
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    en:
      "<p style='padding-top:20px'>🎉🎉🎉 <b>Amazing! I always knew you could do it, never had a doubt!</b> 🎉🎉🎉</p><p>Pop the bubbly 🍾 because you are now an (uncertified) NativeScript layout container expert!<p><p>I bet you are wondering where to go from here? Boy oh boy do I have some resources for you:</p><ul><li>Learn about using the <code>&lt;FlexboxLayout&gt;</code> (based on CSS flexbox) on <a href='http://flexboxfroggy.com/' target='_blank'>Flexbox Froggy</a>;</li><li>Read Jen Looper's great article on <a href='https://developer.telerik.com/featured/demystifying-nativescript-layouts/' target='_blank'>Demystifying NativeScript Layouts</a>;</li><li>Learn more about NativeScript by going through the <a href='http://docs.nativescript.org/tutorial/chapter-0' target='_blank'>JavaScript</a> or <a href='http://docs.nativescript.org/angular/tutorial/ng-chapter-0' target='_blank'>Angular</a> getting started tutorials;</li><li>Or just have fun building cross-platform native apps with <a href='https://www.nativescript.org/' target='_blank'>NativeScript</a> and <a href='https://www.nativescript.org/nativescript-sidekick' target='_blank'>NativeScript Sidekick</a>!</ol>"
  },
  board: 'n',
  result: [],
  levelone: [{ top: 100, left: 155 }],
  answer: 'x',
  lines: 0,
  hint: 'x',
  before: 'x',
  after: 'x'
};
