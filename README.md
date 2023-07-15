# cascade-style-sheet
The reference for CSS from Al-Zero, this repo will contain all the lectures and tasks solution.


### LV-1
---
<pre>
- CSS : is a language for specifying how documents are presented to users — how they are styled.

- document : is usually a text file structured using a markup language — HTML is the most common markup language,but you may also come across other markup languages such as SVG or XML.
</pre>
---
### LV-2 
---
<pre>
selector {
  propertyOne : value;
  propertyTwo : value
}

The selector can be an element, class or id :

p {
  propertyOne : value
}

.class {
  propertyOne : value
}

#id {
  propertyOne : value
}
</pre>
---
### LV-3
---
<pre>
  Styles ways :
  1- external style using link element in the head of html file with rel='stylesheet' and alt will be the path of the outer file.

  2- internal style using style element in the head of html.

  3- inline style using style attribute for the element.
</pre>
---
### LV-4
---
<pre>
For name conventions usually kebab case in css 

.test-class {

}
</pre>
---
### LV-5
---
<pre>
colors are controlled by rgb 
in hexa 00 min FF max and each color in one part
red color as instance 
rgb : 255 0 0
hexa : #FF 00 00

Background-color : takes color or rgb()

Background-image : url('image link or local path') 

Background-repeat : the default is repeat
but it has :
1) no-repeat 
2) repeat-x
3) repeat-y
</pre>
---
### LV-6
---
<pre>
background-attachment :
default value is scroll to scroll over it 
and we can fix it using fixed

background-position : val1, val2
val1 : the distance from left
val2 : the distance from top

background-size : auto / cover / contain / width, highet
auto : default value , the original size of image.
cover : cover the whole page with allow to crop from image.
contain : as cover but the whole pic will shown and will not croped.
width,highet : we can control the size width and highet as what we want.
</pre>
---
### LV-7
---
<pre>
  padding is the internal distance between the content and the border
  it doesnt take negative values
  padding : top right bottom left
  or we can use 
  padding-top
  padding-right
  padding-bottom
  padding-left
</pre>
---
### LV-8
---
<pre>
  margin
  - It's the external distance between the element and the other elements.
  - It takes negative values.
  - Background-color doesnt contain it .

  ** i can center the element in the screen by using the margin by make it auto , so any extra space will divided by two and give it to each side of the content
</pre>
---
### LV-9
---
<pre>
  Border 
</pre>
---
### LV-10
---
<pre>
  Outline 
  - create outer line around the element like the border but not calculated in element width or highet.
  - deprecated i can use the border instade of it with more features i need.
</pre>
---
### LV-11
---
<pre>
  Block
  - Take Full Width If No Width
  - Add Line Break
  - Respect Padding, Margin, Width, Height

  Inline
  - Do Not Repsepct Width, Height
  - Respect Padding And Margin [ Just right + Left ]
  - Do Not Add Line Break
  - Allow Elements Before And After It in The Same Line

  Inline-Block
  - Allow Elements Before And After It in The Same Line
  - Respect Padding, Margin, Width, Height
</pre>
---
### LV-12
---
<pre>
display: none  VS visability: hidden 

if i hide by display the element will be hidden and the next element will be in the hidden element place 

if i hide by visability the element will be hidden but the next element will stay in it's place without moving
</pre>
---
### LV-17
---
<pre>
Text Shadow:

text-shadow : h-shadow v-shadow blur color
</pre>
---
### LV-18
---
<pre>
Text Alignment:
  text-align: center / left / right
  control the text align and doesnt work for handling arabic text

  direction: ltr / rtl 
  control the direction of the text ltr for english and rtl for arabic 

  vertical-align: middle / top / bottom 
  control the position of the text virtically 

</pre>
---
### LV-19
---
<pre>
  text-decoration: underline / overline / dashed / none /.etc 
  add some decoration to the text and it's usually doesnt used because psedou element can do more
  but we use text-decoration:none;  with <a> element to remove the default underline 

  text-transform: uppercase / lowercase / capitalize / .etc
  uppercase : makes all letters capital
  lowercase : makes all letters small
  capitalize : capitalize first letter of each word 

  used to edit in text for examble make all the text capitalized and preferred to use it for control the text not from html
</pre>
---
### LV-20
---
<pre>
text-indent:
control the space before the text starting

letter-spacing:
control the distance between letters

word-spacing:
control the space between words

line-hieght:
control the distance between lines and the best percent is 160% for reading

white-space:
control the text behavior if it over flow an element 
white-space : normal / nowrap;
normal : default value , the over flow text will go down and the element highet increase.
nowrap : the text will over flow the element

word-break :
control the behavior of word overflow (if the word it self long as links)
word-break: normal / break-word / break-all;
normal : default value, doesnt effect.
break-word : break the word to avoid over flow
break-all : break all thing
</pre>
---
### LV-21
---
<pre>
text-overflow : ellipsis 

if the text flow over the element and i use overflow : hidden 
it will cut the overflow but if i use text-overflow : ellipsis  with it, 
it will show ... at the end to tell that there is somthing croped

</pre>
---
### LV-23
---
<pre>
Font families :
font-family: Arial, Cairo, sans-serif;
cairo  here is fallback font family to make sure that there is alternate if arial is not uploaded

you can use any safe font from the default or upload it from google fonts.
serif : F but with zwaya 
sans(without)-serif : F as i see it now 
</pre>
---
### LV-24
---
<pre>
Font size :
the default size of font is 16px;

em : stand for times which means x1 
2em = parent font size * 2 
4em = parent font size * 4 

rem : stand for root times which means x1 
root is html element font size 

percentage : the size as percent from the parent size

vw : stand for viewport width 1vw = 1% of viewport width 
1200px width  1vw = 12  5vw= 12*5=60
</pre>
---
### LV-30
---
<pre>
  Position : static / relative / absolute / fixed / sticky

  static : default value, cant move the element using position dimentions (top,bottom,left,right).
  relative : moving the element based on itself ( if i say top:20px it will move from it top to bottom by 20px),
  and if any elemnt after it will not move with it also.
  absolute : using absolute the element will be out of the workflow, 
  (the place will be gone and the next element will take the space as display none).
  and if i say bottom 0px the element will be at the bottom of parent element (if parent is relative)
  fixed : the same as absolute but if u scroll the element will be in place.
  sticky : stick in place (if i say top :20px it will stick at 20px from the top)
</pre>
---
### LV-31
---
<pre>
  Z-index :
  used to make elemnt shown above other 
  and it doesnt work without position 
</pre>
---
### LV-32
---
<pre>
  Z-index :
  used to make elemnt shown above other 
  and it doesnt work without position 
</pre>
---
### LV-34
---
<pre>
  Pseudo Classes :
  :hover for hover effect
  :visited for visited ancors 
  :checked for checkbox input feild 
  :focus for pressing at form input feild
</pre>
---
### LV-35
---
<pre>
  Pseudo elemets:
  we use :: for pseudo elements to understand its not pseudo class
  .anything::first-letter in this way i can control the first letter without put it in a span
  .anything::first-line in this way i can control the first line
  .anything::selector in this way i can control the seleciton effect

  Note : i can use these in general as ::selector   and applied for every thing not for a spicific element
</pre>
---
### LV-36
---
<pre>
  Pseudo elemets:
  when we use ::before and ::after 
  we must add a property called content or they will not work
</pre>
<pre>
  p {
  background-color: bisque;
  width: 200px;
  text-align: center;
  vertical-align: middle;
  height: 25px;
  position: relative;
}

p::before {
  content: "";
  width: 20px;
  height: 25px;
  background-color: brown;
  position: absolute;
  left: 0px;
  top:10px;
}

p::after {
  content: "";
  width: 20px;
  height: 25px;
  background-color: rgb(42, 165, 61);
  position: absolute;
  right: 0px;
  bottom: 10px;
}
</pre>
---
### LV-40
---
<pre>
Box-shadow :

box-shadow : h-shadow v-shadow blur spread color position(inside,outside)
</pre>
---
### LV-42
---
<pre>
Transition

transition-duration : the time we need to the process 
transition-delay : the time we need to start after 
transition-property : the properties we need to appply transition duration and delay at ( default value is all )
example : transition-property : margin-left, background-color ;

timing-function : the time curve 
ease : default value (slow - fast - slow)
liner :  (same speed all the time)
ease-in : (slow - fast - fast)
ease-out : (fast - fast - slow )

there is shorthand for transition :D
</pre>
---
### LV-44
---
<pre>
  Margin Collapse

  [1] Only Vertical Margin Collapse
  [2] Bigger Margin Wins
  [3] Margin Collapsing With Elements Without Anything Between
  [4] Nesting Does Not Prevent Collapse
</pre>
---
### LV-45
---
<pre>
  CSS Variables
  
  there are two types ( Global & local variables)
  Global variables are common to use 

  how to declare ? 
  :root {
    --haimouniColor : blue;
    --myPadding : 20px;
  }

  how to use ?
  we can use it using
  var(variableName,fallback value)
  as shown below

  div {
    color : var(--haimouniColor,red)
  }
</pre>
---
### LV-46/53
---
<pre>
  Flexible Box
  For Parent
  - display: flex => To Start Flexible Box
  - flex-direction: row => Default Value
  - flex-wrap: nowrap => Default Value
  - flex-flow: [Flex-Direction] + [Flex-Wrap]
  - justify-content: flex-start => Default Value
  - align-items: stretch => Default Value
  - align-content: stretch => Default Value
  For Child
  - flex-grow: 0 => Default Value
  - flex-shrink: 1 => Default Value
  - order: 0 => Default Value
  - flex-basis: auto => Default Value
  - flex: [Flex Grow] [Flex Shrink] [Flex Basis] 0 1 Auto
  - align-self
</pre>
---
### LV-54
---
<pre>
  Filters 
  used to add filter for images 
  filter : blur / grayscale
  blue : in percent or pexle 
  gryscale : if 100% the image will be black and white if 0 image with original colors
</pre>
---
### LV-55
---
<pre>
  Gradients
  it used as background image
  background-image : linear-gradient(Direction || Angle, Color Stop 1, Color Stop 2, ....)

  direction : i can say to left / to right / to top / to bottom 
  or control it by degree angle (0deg = to top)

    background-image: linear-gradient(
    to right,
    #2980b9 20%,
    #27ae60 20%,  //start
    #27ae60 40%,  //stop
    #d35400 40%,
    #d35400 60%,
    #8e44ad 60%,
    #8e44ad 80%,
    #c0392b 80%
  );
</pre>
---
### LV-56
---
<pre>
  Caret color 
  its the dash color inside the input feild

  Pointer-event 
  it used to control what i can do with element 
  if i say pointer-event : none the thing will lost his event apilities
</pre>
---
### LV-57
---
<pre>
  Grid

  Parent
  - display: grid | inline-grid
  - grid-template-columns: [Number Of Columns In] => [Px, %, Auto, Fraction, Repeat, Mix]
  - grid-template-rows: [Number Of Rows In] => [Px, %, Auto, Fraction, Repeat, Mix]
  - gap: [Row Gap] [Column Gap]
  - justify-content
  - align-content
  - grid-template-areas
  
  Child
  - grid-column: [Grid-Column-Start] [Grid-Column-End]
  - grid-row: [Grid-Row-Start] [Grid-Row-End]
  - grid-area: [Grid-Row-Start] [Grid-Column-Start] [Grid-Row-End] [Grid-Column-End]

  how to specify the grid columns 
  using grid-template-columns 
  grid-template-columns : column1 column2 column3 ...etc 
  sizing and dimentions : [Px, %, Auto, fr, Repeat(), mix]
  repeat work like this 
  grid-template-columns : Repeat(3,200px)    // this means i need 3 coulmns each one is 200px

  difrance between auto and fr 
  (fr is greedy) so if i did this 
  grid-template-columns: auto 1fr;
  // the first column width will be the minimum width to fit the content and the second column will take the whole space 
  // not (50/50 as i expected)

  //create responsive grid columns we can use : repeat(auto-fill, minMax('min-col-width', 1fr));
</pre>
---
### LV-58
---
<pre>
  Grid - Parent - Template Rows And Gap

  grid-template-rows : to specify the rows as the columns exactly 
  gap : to control the space between columns and rows
  gap : rowGap columnGap
</pre>
---
### LV-60
---
<pre>
Create page layout using grid

<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS</title>
    <link rel="stylesheet" href="css/master.css" />
  </head>
  <body>
    <div class="page">
      <h2>Elzero</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section>Content</section>
      <aside>Sidebar</aside>
      <footer>Footer</footer>
    </div>
  </body>
</html> -->

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
ul li {
  display: inline-block;
}
.page {
  height: 100vh;
  background-color: #eee;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
    "logo logo nav nav nav nav nav nav nav nav"
    "cont cont cont cont cont cont cont . side side"
    "foot foot foot foot foot foot foot foot foot foot";
}

//dot to create empty place

h2 {
  grid-area: logo;
  background-color: red;
  color: white;
}
nav {
  grid-area: nav;
  background-color: blue;
  color: white;
}
section {
  grid-area: cont;
  background-color: yellow;
  color: white;
}
aside {
  grid-area: side;
  background-color: green;
  color: white;
}
footer {
  grid-area: foot;
  background-color: black;
  color: white;
}
</pre>
---
### LV-61
---
<pre>
  Grid - Child - Grid Column & Grid Row

  suppose i have a grid has 6 columns and 3 rows 

  grid-column : is the short hand for grid-column-start(included) and grid-column-end(excluded)

  grid-column : 1/7 (the child will take the 6 columns width)
   grid-column-start: 1 start from the first coulmn
   grid-column-end: 7 end at the start of 7th column (end of 6th)

  grid-column : 1/8 (the child will make the parent grid wrong)
  grid-column : span 6 (the child will take the 6 columns width)

</pre>
---
### LV-65/69
---
<pre>
  Transform

  scale() : to multiply element size as stretch

  scale(x-axis,y-axis)
  scale(xy-axis)
  if i use one value it takes it for x and y axises

  rotate() : to rotate the element around it self
  rotate(angle by degree, rad , turn)

  translate() : we use it to move the element on x and y axises 
  translate(x-axis,y-axis)
  translate(x-axis)
  translate(0,y-axis)
  if i use one value it dosent take it for x and y axises

  skew() : we use it to rotate the element angles on x and y axises
  skew(x-axis,y-axis)
  skew(x-axis)
  skew(0,y-axis)
  if i use one value it dosent take it for x and y axises

  matrix() : to do all in one 
  matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())


  transform: matrix(1.2, 0.2679, 0, 1.2, 20, 20);
  transform: translateX(20px) translateY(20px) scaleX(1.2) skewY(15deg) skewX(0deg) scaleY(1.2);
</pre>
---
### LV-70
---
<pre>
  transform-origin

  Syntax
  Default Values => 50% 50% 0
  2D Transform => transform-origin(X, Y)
  3D Transform => transform-origin(X, Y, Z)
  
  X-Axis
  - CSS Unit [px, em, rem]
  - %
  - Keyword
  -- Left = 0%
  -- Center = 50%
  -- Right = 100%

  Y-Axis
  - CSS Unit [px, em, rem]
  - %
  - Keyword
  -- Top = 0%
  -- Center = 50%
  -- Bottom = 100%
</pre>
---
### LV-74/77
---
<pre>
  Animation

  create animation 

    we use keyframes then type the name of animation

      @keyframes change-color {
      0% {
        background-color: red;
      }
      60% {
        background-color: blue;
      }
      100% {
        background-color: black;
      }
    }

  use the animation 


    animation-name to select the animation

    animation-duration for the time.
      the time will be divided as the animation time periods when we created the animation  0-60-100
      so for 10sec duration it will be 6sec red 4 sec blue and it will stop on black

    animation-iteration-count: for repeat the animation cycle i can select (infinate)

    animation-timing-function: linear / ease /ease in /ease out  to control timing curve

    animation-Direction : normal(default)/ reverse/ alternate/ alternate-reverse

    animation-delay : to delay the start (if i use positive number)
    or to start from a spicific time (if i use nigative number as crop from the animation time)

    animation-fill-mode : none/ forwards/ backwards/ both 
      used to apply a frame after the animation ends 
      it depends on the animation-direction also

    animation-play-state: running(default)/ pasued
      we can use it with hover if i hover at the element to pause the animation

      div {
        width: 100px;
        height: 100px;
        background-color: red;
        animation-name: change-color;
        animation-duration: 10s;
      }

</pre>
---
### LV-78/82
---
<pre>
  CSS Selectors

  - *
  - Element => [p, div, h2]
  - Element OtherElement => div p
  - .class-name
  - #id-name
  - .parent .child
  - .class-one.class-two
  - .class-name div, .class-name p
  - Element.class-name => p.class-name
  - .parent > .child => Direct Child
  - -------------------------------------
  - Element + Other Element => [div + p] (next element) the syle will be for the other element [ p ] in this case
  - Element ~ Other Elements => [p ~ div] (same level elements any div under this p)
  - [Attribute]
  - Element[Attribute]
  - [Attribute=Value]
  - Element[Attribute=Value] => input[type="submit"]
  - [Attribute~=Value] => Contains A Word
  - [Attribute*=Value] => Contains A Atring
  - [Attribute^=Value] => Start With A String
  - -------------------------------------
  - :first-child  div:first-child i look for a div if its first child for any
  - :last-child
  - :first-of-type
  - :last-of-type
  - :only-child
  - -------------------------------------
  - :not(Selectors)
  - :nth-child(n)
  - :nth-last-child(n)
  - :nth-of-type(n)
  - :nth-last-of-type(n)
  - -------------------------------------
  - :root
  - :empty
  - ::selection
  - :checked
  - :disabled
  - :required
  - :focus
  - ::placeholder
</pre>
---
### LV-83/88
---
<pre>
  Media Queries

    how to use media-queries 
    1- in css file i can do @media condition {

    }
      Note : its recomanded to place media with styles

    2- in html inside style tag
    3- seperated css file 


    example apply red color in body if the width is more than 1000px and less than 1500 px

    @media (min-width:1000px) and (max-width:1500px) {
      body {
        color : red;
      }
    }

    
</pre>
---




