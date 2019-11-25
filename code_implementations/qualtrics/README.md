# The Affective Slider on Qualtrics

This folder has the necessary code to implement the Affective Slider in Qualtrics.
I would share the questions directly, but can't find a way to do that (if you
know how, let me know -mjsobrep).

You should end up with this: ![](instruction_images/qualtrics_demo.png)

## Setup, import:
The easiest way to get these elements is to import the [Affective_Slider_shared](Affective_Slider_shared.qsf)

## Setup, custom:
Alternatively you can setup from scratch

- Create a new slider element: ![](instruction_images/make_slider.png)
- Set to 1 choice and 0 grid marks: ![](instruction_images/choices_grid.png)
- Position the slider at 50: ![](instruction_images/set_slider.png)
- Hide the value and force a response: ![](instruction_images/hideVal_forceResp.png)
- Add JS: ![](instruction_images/add_js.png)
- Copy in JS from [arousal.js](arousal.js) and save: ![](instruction_images/copy_js.png)
- Copy the question: ![](instruction_images/copyQ.png)
- Open JS for second question: ![](instruction_images/second_js.png)
- Copy in JS from [pleasure.js](pleasure.js) and save: ![](instruction_images/copyjs2.png)
- Randomize the block of questions: 
  - ![](instruction_images/randomize.png)
  - ![](instruction_images/randomize2.png)

## Issues
### Horizontal Scroll Bars
Qualtrics's style sheet has: `.Skin .HBAR .horizontalbar,.Skin .HSLIDER .horizontalbar{min-width:250px;padding-right:15px}`
This makes the slier bar min width 250px, which can cause horizontal scroll bars
to show up on small screens. 

### Table Layout
This currently uses a table layout for the HTML. That is non ideal. This should
be switched over to a better CSS based layout method. 