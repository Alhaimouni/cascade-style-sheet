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