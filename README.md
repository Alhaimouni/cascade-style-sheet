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
  1- external style using link element in the head of html file with rel='stylesheet' and alt will be the path of the outer file

  2- internal style using style element in the head of html

  3- inline style using style attribute for the element 
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

background-position : val1 , val2
val1 : the distance from left
val2 : the distance from top

background-size : auto / cover / contain / width,highet
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