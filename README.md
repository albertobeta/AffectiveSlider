# The Affective Slider (AS)
The Affective Slider (AS) is a new digital scale for the self-assessment of emotion 
composed of two slider controls that measure pleasure (sad - happy) and arousal (sleepy - wideawake). It can
be easily included in electronic surveys and questionnaires. 
The AS is released under a [Creative Commons license](http://creativecommons.org/licenses/by-sa/4.0/) and
can be freely adopted in a broad range of fields, including (but not limited to) marketing research,
user experience testing, science and psychology.

The AS has been empirically validated and presented in the following open access scientific publication:
> Alberto Betella and Paul F.M.J. Verschure, "[The Affective Slider: A Digital Self-Assessment Scale for the Measurement of Human Emotions](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0148037)", PLoS ONE, vol. 11, p. e0148037, 2016. DOI: 10.1371/journal.pone.0148037

![the Affective Slider](https://raw.githubusercontent.com/albertobeta/AffectiveSlider/master/PNGs/AS_full.png)

## Design and implementation guidelines

See the [existing implementations of the AS](https://github.com/albertobeta/AffectiveSlider/tree/master/code_implementations), including [Qualtrics](https://github.com/albertobeta/AffectiveSlider/tree/master/code_implementations/qualtrics). Please feel free to contribute with your own custom implementation.

Custom-tailored implementations of the AS can be developed using any programming
framework (e.g. iOS or Android SDK), as long as they fully comply with the following guidelines:
- Both the pleasure and arousal slider controls must have an horizontal orientation and be presented simultaneously with
the slider thumbs (i.e. the movable elements) always placed at the center of the tracks. For right-to-left writing cultures
the AS can be horizontally mirrored;
- The spacing between the two sliders and their size must be adequate (and proportional to the screen) to allow the user to
easily select the desired values;
- Each one of the sliders must be followed by the intensity cue including the associated emoticons placed at the two extremities;
- All the elements composing the AS must adopt exclusively a greyscale color palette. In case the AS is used on a black
or dark background, the default color palette should be inverted (i.e. black to white);
- Each slider measures a single value on a continuous normalized scale ranging from 0 to 1 with a central value 
(i.e. default thumb position) equal to 0.5 and a minimum resolution of 100 steps (i.e. least step = 0.01). This resolution 
can increase (e.g. least step ≤ 0.001) in case of devices with high-resolution screens, such as desktop PCs and tablets;
- To allow for an easy manipulation, the sliders thumbs must have the shape of a perfect circle or square (with optional 
rounded corners) and be at least 10% bigger than the track bar height.


Moreover, in order to discourage potential biases in ratings, we strongly suggest to implement the following recommendations:
- The presentation order of the two sliders should be randomized (i.e. pleasure above and arousal below, or vice versa);
- User interactions with the thumbs such as clicks or taps should be detected to provide immediate visual feedback 
(e.g. upon interaction, the thumb filling color changes from white to black) and to identify potential dummy ratings 
(e.g. to prevent the user to continue until a rating is performed or to mark the data point as non-genuine for posterior
exclusion in case the thumb is not tapped at all).
