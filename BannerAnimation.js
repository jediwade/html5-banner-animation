/*jshint 
	asi:true, browser:true
*/
/**
* @file Provides static contstant objects for use with {@link AnimationRule} class methods.
* @namespace BannerAnimation
*/




// -------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------- PUBLIC STATICS ----------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------------------- //
/**
* Object containing the constants related to the keyframe aspect of CSS animations that can be used with the 
* addKeyframe() method of the AnimationRule object.
* @type {!object}
* @readonly
* @constant
* @memberof BannerAnimation
* @property {string} FROM - Same as setting "0%" for the keyframe.
* @property {string} TO - Same as setting "100%" for the keyframe.
*/
var Keyframe = {
	FROM:"from",
	TO:"to"
};

// -------------------------------------------------------------------------------------------------------------- //
/**
* Object containing the constants related to the timing function aspect of CSS animations that can be used with 
* the apply() method of the AnimationRule object.
* @type {!object}
* @readonly
* @constant
* @memberof BannerAnimation
* @property {string} EASE - Specifies an animation with a slow start, then fast, then end slowly.
* @property {string} EASE_IN - Specifies an animation with a slow start.
* @property {string} EASE_OUT - Specifies an animation with a slow end.
* @property {string} EASE_IN_OUT - Specifies an animation with a slow start and end.
* @property {string} LINEAR - Specifies an animation with the same speed from start to end.
*/
var Ease = {
	EASE:"ease",
	EASE_IN:"ease-in",
	EASE_OUT:"ease-out",
	EASE_IN_OUT:"ease-in-out",
	LINEAR:"linear"
};

// -------------------------------------------------------------------------------------------------------------- //
/**
* Object containing the constants related to the iteration aspect of CSS animations that can be used with the 
* apply() method of the AnimationRule object.
* @type {!object}
* @readonly
* @constant
* @memberof BannerAnimation
* @property {string} INFINITE - Specifies that the animation should be played infinite times (forever).
* @property {string} ONCE - Specifies that the animation should be played only one (1) time.
*/
var Iteration = {
	INFINITE:"infinite",
	ONCE:"1"
};

// -------------------------------------------------------------------------------------------------------------- //
/**
* Object containing the constants related to the direction aspect of CSS animations that can be used with the 
* apply() method of the AnimationRule object.
* @type {!object}
* @readonly
* @constant
* @memberof BannerAnimation
* @property {string} NORMAL - The animation should be played as normal.
* @property {string} ALTERNATE - The animation will be played as normal every odd time (1,3,5,etc) and in 
* reverse direction every even time (2,4,6,etc).
* @property {string} REVERSE - The animation should play in reverse direction. Not supported in Apple's Safari web 
* browser.
* @property {string} ALTERNATE_REVERSE - The animation will be played in reverse direction every odd time 
* (1,3,5,etc) and in a normal direction every even time (2,4,6,etc). Not supported in Apple's Safari web browser.
*/
var Direction = {
	NORMAL:"normal",
	ALTERNATE:"alternate",
	REVERSE:"reverse",
	ALTERNATE_REVERSE:"alternate-reverse"
};

// -------------------------------------------------------------------------------------------------------------- //
/**
* Object containing the constants related to the fill mode aspect of CSS animations that can be used with the 
* apply() method of the AnimationRule object.
* @type {!object}
* @readonly
* @constant
* @memberof BannerAnimation
* @property {string} BOTH - The animation will follow the rules for both forwards and backwards. That is, it will 
* extend the animation properties in both directions.
* @property {string} FORWARDS - After the animation ends (determined by animation-iteration-count), the animation 
* will apply the property values for the time the animation ended.
* @property {string} BACKWARDS - The animation will apply the property values defined in the keyframe that will 
* start the first iteration of the animation, during the period defined by animation-delay. These are either the 
* values of the from keyframe (when animation-direction is "normal" or "alternate") or those of the to keyframe 
* (when animation-direction is "reverse" or "alternate-reverse").
* @property {string} NONE - The animation will not apply any styles to the target element before or after it is 
* executing.
*/
var FillMode = {
	BOTH:"both",
	FORWARDS:"forwards",
	BACKWARDS:"backwards",
	NONE:"none"
};




// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------ AnimationRule ----------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------------------- //
/**
* Use the AnimationRule object to create a new set of CSS animations that can be used by HTML elements. The 
* animation is created by gradually changing from one set of CSS styles to another. During the animation, 
* you can change the set of CSS styles many times. Specify when the style change will happen in percent, or 
* with the keywords "from" and "to", which is the same as 0% and 100%. 0% is the beginning of the animation, 
* 100% is when the animation is complete.<br />
* <br />
* To create an animation rule set, create a new variable that is equal to a "new AnimationRule()". After that, 
* call the addKeyframe() method on that variable to add a keyframe to this animation. The next step is to 
* call the addStyle() method with the CSS style you want to apply at this keyframe. You can call the addStyle() 
* method as many times as is needed to cover all the styles that should be set for this keyframe.<br />
* <br />
* Once all styles for that keyframe have been set, you can call the addKeyframe() method again, followed by as 
* many addStyle() calls are needed to complete the rules of this animation.<br />
* <br />
* <b>NOTE:</b> At least 2 keyframes are needed (0% and 100%) for an animation to be complete and work correctly.<br />
* <br />
* After creating all the needed keyframes and the styles to be changed for each keyframe, you must register the 
* the new AnimationRule with the styles in the <head>. To do this, call the register() method on the 
* AnimationRule variable you created earlier, passing in the name of the animation when calling the register() 
* method.<br />
* <br />
* <b>NOTE:</b> Once the register() method has been executed, you can no longer add any new keyframes or style changes.<br />
* <br />
* The final step is call the apply() method on the AnimationRule variable to have that newly created animation 
* get applied to an HTML element. The apply() method takes on several parameters, including the target HTML 
* element, start time, duration, ease type, number of times this animation should play (most likely "1"), 
* the direction the animation should play, and what styles should be applied once the animation is done.<br />
* <br />
* <b>NOTE:</b> You can only apply one (1) animation to an HTML element. Applying a second animation to the same target 
* will cause the first one to not work.<br />
* <br />
* This final step of calling apply() can be called on more than one HTML element and given different options. 
* So for example, if you create a simple opacity fade up animation and want to use it on 4 different HTML elements, 
* call the apply() method 4 times, passing in the appropriate options for each specific target element.
* 
* @constructor
* @class
* @final
* @returns {AnimationRule} - A new instance of the AnimationRule class.
* 
* @example <caption>The following example shows the JavaScript portion of an HTML5 banner creating an animation 
* and uses the minimum required methods in the AnimationRule class in order to properly create a functional HTML5 banner. 
* This example also coveres what each step is doing in the background for your edification.</caption>
* <script type="text/javascript" src="BannerAnimation.js"></script>
* <script type="text/javascript">
* var animation = new AnimationRule();// create a new AnimationRule
* animation.addKeyframe("0%");// create a keyframe that represents the beginning of the animation
* animation.addStyle("opacity", "0");// add an opacity style that should be used for above keyframe
* animation.addStyle("transform", "scale(0.2,0.2)");// add a scale transform style to the same keyframe
* 
* // output at this point would be:
* // 0% {
* // 	opacity:0;
* //	transform:scale(0.2,0.2);
* // }
* 
* animation.addKeyframe("100%");// create a keyframe that represents the end of the animation
* animation.addStyle("opacity", "1");// add an opacity style that should be used for above keyframe
* animation.addStyle("transform", "scale(1,1)");// add a scale transform style to the same keyframe
* 
* // output at this point would be:
* // 0% {
* // 	opacity:0;
* //	transform:scale(0.2,0.2);
* // }
* // 100% {
* // 	opacity:1;
* //	transform:scale(1,1);
* // }
* 
* // after you have finished creating all the keyframes and styles attached to each keyframe, 
* // call the register() method and pass in a name for the animation
* // this will add the animation rule set to the stylesheet
* animation.register("fadeAndScale");
* 
* // at this point, it will have been the same as adding the following style to the <head> styles:
* // @keyframes fadeAndScale {
* // 	0% {
* // 		opacity:0;
* //		transform:scale(0.2,0.2);
* // 	}
* // 	100% {
* //	 	opacity:1;
* //		transform:scale(1,1);
* // 	}
* // }
* 
* // finally, call the apply() method, passing in the appropriate arguments which include 
* // the target of the animation, start time, duration, ease type, number of times to play, direction, and fill-mode
* // animation.apply(target, startTime, duration, ease, iteration, direction, fillMode);
* animation.apply("cta", "1.8s", "0.5s", Ease.EASE_IN, Iteration.ONCE, Direction.NORMAL, FillMode.BOTH);
* 
* // the apply() method example above would be the same as writting CSS in the <head> styles as follows:
* // #cta {
* // 	-webkit-animation:fadeAndScale 0.5s ease-in 1.8s 1 normal both;
* // 	-moz-animation:fadeAndScale 0.5s ease-in 1.8s 1 normal both;
* // 	-o-animation:fadeAndScale 0.5s ease-in 1.8s 1 normal both;
* // 	animation:fadeAndScale 0.5s ease-in 1.8s 1 normal both;
* // }
* </script>
* 
* @example <caption>The following example is contains the same as the one above but showing the chained method usage 
* for shorter lines of JavaScript. It also contains more examples of creating animations with different styles.</caption>
* <script type="text/javascript" src="BannerAnimation.js"></script>
* <script type="text/javascript">
* // this first animation rule is both a fade and scale meant to be used on a CTA button
* var fadeAndScale = new AnimationRule();
* fadeAndScale.addKeyframe("0%").addStyle("opacity", "0").addStyle("transform", "scale(0.2,0.2)");
* fadeAndScale.addKeyframe("100%").addStyle("opacity", "1").addStyle("transform", "scale(1,1)");
* fadeAndScale.register("fadeAndScale");
* fadeAndScale.apply("cta", "1.8s", "0.5s", Ease.EASE_OUT, Iteration.ONCE, Direction.NORMAL, FillMode.BOTH);
* 
* // This animation is used for two primary images in a banner and only fade up in opacity from a starting value of 0 to 1
* var fadeUp = new AnimationRule();
* fadeUp.addKeyframe("0%").addStyle("opacity", "0");
* fadeUp.addKeyframe("100%").addStyle("opacity", "1");
* fadeUp.register("fadeUp");
* // calling apply() once for an HTML element with an id attribute set to "image1"
* fadeUp.apply("image1", "0s", "0.5s", "ease", "1", "normal", "both");
* // calling apply() a second time for a different HTML element with an id attribute set to "image2"
* // this second call to apply() has a different start time and different target, but the rest is the same
* fadeUp.apply("image2", "5s", "0.5s", Ease.EASE_IN_OUT, Iteration.ONCE, Direction.NORMAL, FillMode.BOTH);
* 
* // this last animation is for fading in two blocks of copy that are paired with the two images (referenced above)
* // this example shows having an animation both fade up a target element and then fade it back out
* var fadeInOut = new AnimationRule();
* fadeInOut.addKeyframe("0%").addStyle("opacity", "0");
* fadeInOut.addKeyframe("10%").addStyle("opacity", "1");
* fadeInOut.addKeyframe("90%").addStyle("opacity", "1");
* fadeInOut.addKeyframe("100%").addStyle("opacity", "0");
* fadeInOut.register("fadeInOut");
* fadeInOut.apply("copy1", "0s", "5s", Ease.EASE, Iteration.ONCE, Direction.NORMAL, FillMode.BOTH);
* fadeInOut.apply("copy2", "5s", "4s", Ease.EASE, Iteration.ONCE, Direction.NORMAL, FillMode.BOTH);
* </script>
* 
* @example <caption>The following example shows a full start to finish usage of creating an AnimationRule object and 
* using its methods. It is assumed that the BannerAnimation.js JavaScript file is in the same directory as the HTML 
* file. This example features four frames in total. The first three are just a single image containing everything 
* in that frame. The final frame is composed of a logo, an alpha png image with copy, and a CTA button.</caption>
* <!DOCTYPE html>
* <html>
* 	<head>
* 		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
* 		<meta http-equiv="X-UA-Compatible" content="IE=edge">
* 		<title>banner example</title>
* 		
* 		<style type="text/css">
* 			* {
* 				-webkit-text-size-adjust:none;
* 				-ms-text-size-adjust:none;
* 				margin:0;
* 				padding:0;
* 			}
* 			img {
* 				border:none;
* 				display:block;
* 			}
* 			#banner {
* 				width:300px;
* 				height:250px;
* 				position:absolute;
* 				background-color:#ffffff;
* 				cursor:pointer;
* 			}
* 			#border {
* 				width:300px;
* 				height:250px;
* 				box-sizing:border-box;
* 				border:1px solid #000000;
* 			}
* 			#bkg {
* 				width:300px;
* 				height:250px;
* 				background-color:#ff0000;
* 			}
* 			#image1, #image2, #image3, #logo, #copy, #cta, #copyright, #bkg {
* 				opacity:0;
* 			}
* 			#preloader {
* 				top:109px;
* 				left:134px;
* 				opacity:1;
* 			}
* 			#logo {
* 				left:104px;
* 				top:30px;
* 			}
* 			#copy {
* 				left:64px;
* 				top:100px;
* 			}
* 			#cta {
* 				left:98px;
* 				top:180px;
* 			}
* 			#copyright {
* 				right:3px;
* 				bottom:2px;
* 				font-family:Helvetica, Arial, sans-serif;
* 				font-size:7px;
* 				line-height:7px;
* 				color:rgba(0,0,0,0.9);
* 				text-shadow:rgba(255,0,0,0.2) 0px 0px 3px;
* 				-webkit-transform:translate3d(0,0,0);
* 				-moz-transform:translate3d(0,0,0);
* 				transform:translate3d(0,0,0);
* 			}
* 			.layer {
* 				position:absolute;
* 			}
* 		</style>
* 	</head>
* 
* 	<body>
* 		<div id="banner" onclick="alert('banner clicked')">
* 			<img class="layer" id="preloader" src="preloader.gif" width="32" height="32" alt="">
* 			
* 			<!-- FRAME 1–3 -->
* 			<img class="layer" id="image1" src="image1.jpg" width="300" height="250" alt="">
* 			<img class="layer" id="image2" src="image2.jpg" width="300" height="250" alt="">
* 			<img class="layer" id="image3" src="image3.jpg" width="300" height="250" alt="">
* 			<!-- FRAME 1–3 -->
* 			
* 			<!-- END_FRAME -->
* 			<img class="layer" id="bkg" src="bkg.jpg" width="300" height="250" alt="">
* 			<img class="layer" id="logo" src="logo.png" width="92" height="30" alt="">
* 			<img class="layer" id="copy" src="copy.png" width="172" height="43" alt="">
* 			<img class="layer" id="cta" src="cta.png" width="104" height="38" alt="">
* 			<!-- /END_FRAME -->
* 			
* 			<div class="layer" id="copyright">
* 				&copy;Copyright
* 			</div>
* 			
* 			<div class="layer" id="border"></div>
* 		</div>
* 
* 		<script type="text/javascript" src="BannerAnimation.js"></script>
* 		<script type="text/javascript">
* 			// create a new AnimationRule object
* 			var singleFadeAnimation = new AnimationRule();
* 			
* 			// add the styles for the first keyframe and a style of opacity with a starting value of "0"
* 			singleFadeAnimation.addKeyframe("0%").addStyle("opacity" ,"0");
* 			
* 			// add the styles for the last keyframe and a style of opacity with a starting value of "0"
* 			singleFadeAnimation.addKeyframe("100%").addStyle("opacity", "1");
* 
* 			// register the CSS animation for use
* 			singleFadeAnimation.register("singleFadeAnimation");
* 
* 			function onPageLoad(e) {
* 				window.removeEventListener("load", onPageLoad);
* 				
* 				// All of the calls to apply() are located within the onPageLoad() function. This ensures that 
* 				// the animation does not start until all assets have been loaded.
* 				
* 				// Apply the fade animation to the preloader animated gif and have it play the animation backwards.
* 				// This is so that it will fade away instead of fading up from 0 opacity to 1.
* 				singleFadeAnimation.apply("preloader", "0s", "0.4s", Ease.EASE, Iteration.ONCE, Direction.REVERSE, FillMode.BOTH);
* 				
* 				// Start fading up the first image at the same time the preloader is fading off.
* 				// Notice that this call to apply() is missing the last four arguments. This is ok 
* 				// because the ease, iteration, direction, and fill-mode all have default values.
* 				// If you are fine with the default (which will be most of the time), then this is 
* 				// an acceptable way of calling apply()
* 				singleFadeAnimation.apply("copyright", "0s", "0.5s");
* 				singleFadeAnimation.apply("image1", "0s", "0.5s");
* 				singleFadeAnimation.apply("image2", "3s", "0.5s");// fade up image2 on top of image1
* 				singleFadeAnimation.apply("image3", "6s", "0.5s");// fade up image3 on top of image2
* 				singleFadeAnimation.apply("bkg", "9s", "0.5s");// fade up the background on top of image3
* 				singleFadeAnimation.apply("copy", "10s", "0.5s");// fade up the copy
* 				singleFadeAnimation.apply("logo", "11s", "0.5s");// fade up the logo
* 				singleFadeAnimation.apply("cta", "11.5s", "0.5s");// fade up the cta
* 			}
* 
* 			window.addEventListener("load", onPageLoad);// add event listener for page being done loading
* 		</script>
* 	</body>
* </html>
*/
function AnimationRule() {
	this._keyframes = [];// array of keyframe objects
	this._styleName = "";// style name being applied this this AnimationRule object
	this._registered = false;// boolean if this animation rule has been registered or not
	return this;
}




// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------ AnimationRule static private variables & methods ------------------------------ //
// -------------------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------------------- //
/**
* Figures out which event type that should be used for either the start or end of an animation or transition.
* 
* @param {!string} playbackPosition - Either "start" or "end".
* @memberof AnimationRule
* @final
* @static
* @private
*/
AnimationRule._whichEvent = function(playbackPosition) {
	var el = document.createElement("div");
	
	if (el.style.animation) {
		return "animation" + playbackPosition;
	}
	if (el.style.webkitAnimation) {
		return "webkitAnimation" + playbackPosition.charAt(0).toUpperCase() + playbackPosition.slice(1);
	}
	if (el.style.msAnimation) {
		return "MSAnimation" + playbackPosition.charAt(0).toUpperCase() + playbackPosition.slice(1);
	}
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* Global array containing all the HTML elements that will be animating or are currently animating.
* 
* @type {!string[]}
* @memberof AnimationRule
* @constant
* @static
* @private
*/
AnimationRule._elements = [];

// -------------------------------------------------------------------------------------------------------------- //
/**
* String representation of the JavaScript animation-start CSS property based on the browser rendering engine
* @type {!string}
* @memberof AnimationRule
* @constant
* @static
* @private
*/
AnimationRule._animationStart = AnimationRule._whichEvent("start");

// -------------------------------------------------------------------------------------------------------------- //
/**
* String representation of the JavaScript animation-end CSS property based on the browser rendering engine
* @type {!string}
* @memberof AnimationRule
* @constant
* @static
* @private
*/
AnimationRule._animationEnd = AnimationRule._whichEvent("end");

// -------------------------------------------------------------------------------------------------------------- //
/**
* Callback function for the window "onfocus" event. Triggers the resumeAnimations() method.
* 
* @param {!Object} e - Event data
* @memberof AnimationRule
* @function _onWindowFocus
* @final
* @static
* @private
*/
AnimationRule._onWindowFocus = function(e) {
	window.top.removeEventListener("focus", AnimationRule._onWindowFocus);
	window.top.addEventListener("blur", AnimationRule._onWindowBlur);
	AnimationRule.resumeAnimations();
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* Callback function for the window "onblur" event. Triggers the pauseAnimations() method.
* 
* @param {!Object} e - Event data
* @memberof AnimationRule
* @function _onWindowBlur
* @final
* @static
* @private
*/
AnimationRule._onWindowBlur = function(e) {
	window.top.addEventListener("focus", AnimationRule._onWindowFocus);
	window.top.removeEventListener("blur", AnimationRule._onWindowBlur);
	AnimationRule.pauseAnimations();
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* Callback function for a CSS animation finishing. Removes the "animationEnd" event listener on the HTML 
* element that just finished animating and removes it from the Array of elements that are being animated.
* 
* @param {!Object} e - Event data
* @memberof AnimationRule
* @final
* @static
* @private
*/
AnimationRule._onAnimationEnd = function(e) {
	e.target.removeEventListener(AnimationRule._animationEnd, AnimationRule._onAnimationEnd);
	AnimationRule._elements.splice(AnimationRule._elements.indexOf(e.target), 1);
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* Callback function for a CSS animation starting. Removes the "animationStart" event listener on the HTML 
* element starting to be animated and adds the "animationEnd" event listener on this HTML element.
* 
* @param {!Object} e - Event data
* @memberof AnimationRule
* @final
* @static
* @private
*/
AnimationRule._onAnimationStart = function(e) {
	e.target.removeEventListener(AnimationRule._animationStart, AnimationRule._onAnimationStart);
	e.target.addEventListener(AnimationRule._animationEnd, AnimationRule._onAnimationEnd);
}




// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------ AnimationRule static public methods ------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------------------- //
/**
* Add an event listener to the main webpage window to know when the window/tab becomes unfocused. This will 
* automatically pause/resume the animation if the window/tab is not in focus. Call this method inside an onload 
* function or at the bottom of the JavaScript code in an HTML5 banner.<br />
* <br />
* <b>NOTE:</b> This feature is NOT supported in Safari.<br />
* <br />
* <b>NOTE:</b> This is a static method and should be called on the AnimationRule object exactly as presented in 
* the example below.
* 
* @memberof AnimationRule
* @function addFocusListener
* @see {@link AnimationRule.removeFocusListener}
* @final
* @static
* 
* @example
* AnimationRule.addFocusListener();
*/
AnimationRule.addFocusListener = function() {
	window.top.addEventListener("blur", AnimationRule._onWindowBlur);
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* Remove the focus event listener from the main webpage window. The animation will continue to play in the background 
* if the browser allows it to.<br />
* <br />
* <b>NOTE:</b> This feature is NOT supported in Safari.<br />
* <br />
* <b>NOTE:</b> This is a static method and should be called on the AnimationRule object exactly as presented in 
* the example below.
* 
* @memberof AnimationRule
* @function removeFocusListener
* @see {@link AnimationRule.addFocusListener}
* @final
* @static
* 
* @example
* AnimationRule.removeFocusListener();
*/
AnimationRule.removeFocusListener = function() {
	window.top.removeEventListener("blur", AnimationRule._onWindowBlur);
}




// -------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------- AnimationRule member methods ---------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------------------- //
/**
* Adds a new keyframe to the AnimationRule. After this call method is called, the AnimationRule.addStyle() method 
* is expected to be called at least once before calling addKeyframe() again.
* 
* @param {!string} percentageMarker - The percentage of the animation duration. Allowed values 
* are:<ul><li>0&ndash;100%.</li><li>from (<i>same as <b>0%</b></i>).</li><li>to (<i>same as <b>100%</b></i>).</li></ul>
* @returns {AnimationRule} - A reference to this instance of the AnimationRule object.
* @memberof AnimationRule#
* @function addKeyframe
* @final
* @instance
* @see {@link AnimationRule#addStyle}
* 
* @example
* var fadeAnimation = new AnimationRule();
* fadeAnimation.addKeyframe("0%");// this is the first keyframe
* // add all styles that should be set for this keyframe
* // call next addKeyframe() and then apply any styles for the end keyframe
* fadeAnimation.addKeyframe("100");
*/
AnimationRule.prototype.addKeyframe = function(percentageMarker) {
	if (this._registered === true) {
		window.alert("The animation \"" + this._styleName + "\" has been registered. No more keyframes may be added at this point.");
		return this;
	}
	
	// check to see if the previous keyframe has no styles and if it doesnt, throw alert error
	if (this._keyframes.length !== 0 && this._keyframes[this._keyframes.length-1].styles === "") {
		window.alert("New keyframe being added before any style changes were added to the previous keyframe.");
	}
	
	// if percentage marker is a number, convert to string
	if ((typeof percentageMarker) === "number") {
		percentageMarker = percentageMarker.toString() + "%";
	}
	
	// if the percentage marker value contained a semi-colon, remove it
	if (percentageMarker.indexOf(";") !== -1) {
		percentageMarker = percentageMarker.replace(";", "");
	}

	// if the percentage marker value did not contain a percent sign and was not "to" or "from", add one
	if (percentageMarker.indexOf("to") === -1 && percentageMarker.indexOf("from") === -1) {
		if (percentageMarker.indexOf("%") === -1) {
			percentageMarker = percentageMarker + "%";
		}
	}
	// percentage marker is "to" or "from", check if a percentage sign is present on accident, and if it is, remove it
	else {
		// if a percent sign is detected alongside "to" or "from", remove it
		if (percentageMarker.indexOf("%") !== -1) {
			percentageMarker = percentageMarker.replace("%", "");
		}
		
		// if the percentage marker is "to"
		if (percentageMarker === "to") {
			// if there is a previous keyframe that is not "to", change to "100%"
			if (this._keyframes.length === 1 && this._keyframes[this._keyframes.length-1].keyframe === "0%") {
				percentageMarker = "100%";
			}
			// else if the number of prior keyframes is greater than 1, "from" should not be used. throw error.
			else if (this._keyframes.length > 1) {
				window.alert("The keyframe marker of \"to\" should not have been used in this instance since percentage values where previously used.");
			}
			// else if there are no previous keyframes, assume mistake and make it "0%"
			else if (this._keyframes.length === 0) {
				window.alert("The keyframe marker of \"to\" should not have been used in this instance since this is the first keyframe. Please use \"0%\" or \"from\".");
			}
		}
		// else the percentage marker is "from"
		else {
			if (this._keyframes.length === 0) {
				percentageMarker = "0%";
			}
			else if (this._keyframes.length === 1 && this._keyframes[this._keyframes.length-1].keyframe === "0%") {
				window.alert("The keyframe marker of \"from\" should not have been used in this instance since this is the second keyframe. Please use \"100%\" or \"to\".");
			}
			else {
				window.alert("The keyframe marker of \"from\" should not have been used in this instance. Please use use a percentage value that is a higher value from the previous keyframe marker.");
			}
		}
	}

	this._keyframes.push( {keyframe:percentageMarker, styles:""} );
	return this;
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* Adds a CSS style to the most recently created keyframe.
* 
* @param {!string} name - The name of the CSS property that should be added to the most recent keyframe created. 
* For example, "width" or "opacity". This must be a name surrounded in quotes.
* @param {!string} value - The value of the CSS property that should be changed for the most recent keyframe. For 
* example, "100px" or "1". This must be a value surrounded in quotes.
* @returns {AnimationRule} - A reference to this instance of the AnimationRule object.
* @memberof AnimationRule#
* @function addStyle
* @final
* @instance
* @see {@link AnimationRule#register}
* 
* @example <caption>The following example shows making multiple calls to addStyle() on separate lines.</caption>
* addStyle("opacity", "1");
* addStyle("width", "100px");
* // take note, if more than one transform type is needed, it should be written as
* // the line below with a space separating the transform types
* addStyle("transform", "scale(1.5,1.5) rotate(90deg)");
* 
* @example <caption>The following example shows making concurrent calls to addStyle() on the same line of code. 
* This example just shows this feature and by itself does nothing without a variable named "animation" representing 
* an instance of the AnimationRule object and have previously already created at least 1 keyframe prior to this 
* code example. Please reference the example at the top of the page showing a start to finish example.</caption>
* addStyle("opacity", "1").addStyle("width", "100px").addStyle("transform", "scale(1.5,1.5) rotate(90deg)");
*/
AnimationRule.prototype.addStyle = function(name, value) {
	if (this._registered === true) {
		window.alert("The animation \"" + this._styleName + "\" has been registered. No more styles may be added at this point.");
		return this;
	}
	
	// if keyframes have been created, add the styles to change
	if (this._keyframes.length === 0) {
		window.alert("No keyframe has been created to hold this style change.");
	}
	if (!name || (typeof name) !== "string") {
		window.alert("A CSS property name surrounded in quotes was not provided.");
	}
	if (!value) {
		window.alert("There was nothing provided for the \"value\" in \"addStyle(name, value)\"");
	}
	if ((typeof value) !== "string") {
		window.alert("Please provide a string value for the \"value\" parameter in \"addStyle(name, value)\"");
	}
	
	var style = name + ":" + value + ";";
	
	// Updates the style string to contain all the unique browser animation prefix styles if it is needed 
	if (style.indexOf("transform") !== -1) {
		style = "-webkit-" + style + "\n-moz-" + style + "\n-ms-" + style + "\n-o-" + style + "\n" + style;
	}
	
	this._keyframes[this._keyframes.length - 1].styles += style + "\n";
	return this;
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* After all the keyframes and styles have been added, run this method to register the animation and it will 
* automatically be added to the &lt;style&gt; tag in the &lt;head&gt;.<br />
* <br />
* <b>NOTE:</b> Once the register() method has been executed, you can no longer add any new keyframes or style 
* changes. This method should also only be executed once. Futher calls to this method will result in a JS window.alert() 
* error.
* 
* @param {!string} name - The name that should be applied to this animation.
* @returns {AnimationRule} - A reference to this instance of the AnimationRule object.
* @memberof AnimationRule#
* @function register
* @final
* @instance
* @see {@link AnimationRule#apply}
* 
* @example <caption>The following example assumes an instance of the AnimationRule object has already been created 
* and had keyframes with style changes applied. Please reference the example at the top of the page showing a start 
* to finish example.</caption>
* animation.register("fadeAndScale");
*/
AnimationRule.prototype.register = function(name) {
	// if this animation name has already been registered, throw alert error.
	if (this._registered === true) {
		window.alert("The animation \"" + this._styleName + "\" has already been registered.");
		return this;
	}
	
	// if keyframes have been created, add the styles to change
	if (this._keyframes.length === 0) {
		window.alert("No keyframe has been created with styles added.");
	}
	// check to see if the previous keyframe has no styles and if it doesnt, throw alert error
	else if (this._keyframes.length !== 0 && this._keyframes[this._keyframes.length-1].styles === "") {
		window.alert("No styles where added to the last keyframe created. Please add style changes to the last keyframe before registering this animation.");
	}

	this._styleName = name;

	var styles;
	var output = "";

	// if the style tag does not exist, create one
	if (document.head.getElementsByTagName("style").length === 0) {
		styles = document.createElement("style");
		styles.setAttribute("type", "text/css");
		document.head.appendChild(styles);
	}
	else {
		styles = document.head.getElementsByTagName("style").item(0);
	}

	var i = 0;
	while (i < this._keyframes.length) {
		output += this._keyframes[i].keyframe + " {\n" + this._keyframes[i].styles + "}\n";
		i += 1;
	}

	styles.appendChild(document.createTextNode("@-webkit-keyframes " + this._styleName + " {\n" + output + "}\n"));
	styles.appendChild(document.createTextNode("@-moz-keyframes " + this._styleName + " {\n" + output + "}\n"));
	styles.appendChild(document.createTextNode("@-o-keyframes " + this._styleName + " {\n" + output + "}\n"));
	styles.appendChild(document.createTextNode("@keyframes " + this._styleName + " {\n" + output + "}\n"));

	this._registered = true;
	return this;
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* Apply this animation to an HTML element so that it will be animated. This method can be called more than once to 
* apply the same animation to different HTML elements. Only the "target", "startTime", and "duration" options are 
* required. If no values for "ease", "iterationCount", "direction", or "fillMode" are provided, each ones default 
* value will be used.
* 
* @param {!string} target - The "id" of the HTML element that should have this animation applied to.
* 
* @param {!string} startTime - The time, in seconds or milliseconds, when this animation should start playing. 
* For example, "2000ms" or "2s" for a starting time of 2 seconds.
* @param {!string} duration - How long, in seconds or milliseconds, the animation should play for. For example, 
* "500ms" or "0.5s" for a duration of half a second.
* 
* @param {?string=} [ease="ease"] - The type of ease that should be used for this animation. Supported ease 
* types include:<ul><li>ease (<em>default</em>).</li><li>ease-in.</li><li>ease-out.</li><li>ease-in-out.</li>
* <li>linear.</li></ul>
* 
* @param {?string=} [iterationCount="1"] - Specifies the number of times an animation should be played. Supported 
* values include:<ul><li>number - A number (in quotes) that defines how many times an animation should be played, 
* e.g. "1".</li><li>"infinite" - Specifies that the animation should be played infinite times.</li></ul>
* 
* @param {?string=} [direction="normal"] - The direction property defines whether an animation should play in 
* reverse direction or in alternate cycles. Supported direction types include:
* <ul><li>normal (<em>default</em>) - The animation should be played as normal.</li>
* <li>reverse - The animation should play in reverse direction. Not supported in Apple's Safari web browser.</li>
* <li>alternate - The animation will be played as normal every odd time (1,3,5,etc) and in reverse direction 
* every even time (2,4,6,etc).</li>
* <li>alternate-reverse - The animation will be played in reverse direction every odd time (1,3,5,etc) and 
* in a normal direction every even time (2,4,6,etc). Note: Not supported in Apple's Safari web browser.</li></ul>
* 
* @param {?string=} [fillMode="both"] - The fill-mode property specifies a style for the element when the animation 
* is not playing (when it is finished, or when it has a delay). Supported animation-fill-mode types include:
* <ul><li>both (<em>default</em>) - The animation will follow the rules for both forwards and backwards. That is, 
* it will extend the animation properties in both directions.</li>
* <li>forwards - After the animation ends (determined by animation-iteration-count), the animation will apply 
* the property values for the time the animation ended.</li>
* <li>backwards - The animation will apply the property values defined in the keyframe that will start the first 
* iteration of the animation, during the period defined by animation-delay. These are either the values of the 
* from keyframe (when animation-direction is "normal" or "alternate") or those of the to keyframe (when 
* animation-direction is "reverse" or "alternate-reverse").</li>
* <li>none - The animation will not apply any styles to the target element before or after it is executing.</li></ul>
* 
* @returns {AnimationRule} - A reference to this instance of the AnimationRule object.
* @memberof AnimationRule#
* @function apply
* @final
* @instance
* 
* @example <caption>The following example shows an already created animation object being applied to multiple HTML 
* elements that play at different times, have different durations, and different ease types.</caption>
* animation.apply("cta", "1.8s", "0.3s", "ease", "normal", "1", "both");
* animation.apply("image1", "3.8s", "0.4s", "ease", "normal", "1", "both");
* animation.apply("image2", "7.3s", "0.6s", "ease-out", "normal", "1", "both");
* 
* @example <caption>The following example is the same as the one before but shows off using the constant variable 
* providers to fill in some of the options. The API documentation for the available constants is located in the 
* NAMESPACES - BannerAnimation API section.</caption>
* animation.apply("cta", "1.8s", "0.3s", Ease.EASE, Direction.NORMAL, Iteration.ONCE, FillMode.BOTH);
* animation.apply("image1", "3.8s", "0.4s", Ease.EASE, Direction.NORMAL, Iteration.ONCE, FillMode.BOTH);
* animation.apply("image2", "7.3s", "0.6s", Ease.EASE_OUT, Direction.NORMAL, Iteration.ONCE, FillMode.BOTH);
*/
AnimationRule.prototype.apply = function(target, startTime, duration, ease, iterationCount, direction, fillMode) {
	// if this animation name has not been registered, throw alert error.
	if (this._registered === false) {
		window.alert("The animation has not yet been registered for use. Please call the register() method and provide a name for this animation.");
		return this;
	}
	
	var element = document.getElementById(target);
	
	// TARGET check
	if (!element) {
		window.alert("No element in the HTML has an ID attribute with the value of \"" + target + "\"");
		return this;
	}
	
	// START TIME check
	if (!startTime) {
		window.alert("No value provided for the \"startTime\" parameter.");
		return this;
	}
	else if ((typeof startTime) !== "string") {
		window.alert("Please provide a number in seconds or milliseconds surrounded by quotes, e.g. \"1.5s\" for seconds or \"1500ms\" for milliseconds");
		return this;
	}

	// DURATION check
	if (!duration) {
		window.alert("No value provided for the \"duration\" parameter.");
		return this;
	}
	else if ((typeof duration) !== "string") {
		window.alert("Please provide a number in seconds or milliseconds surrounded by quotes, e.g. \"1.5s\" for seconds or \"1500ms\" for milliseconds");
		return this;
	}

	// EASE check
	if (!ease) {
		ease = Ease.EASE;
	}
	else if (ease !== Ease.EASE && ease !== Ease.EASE_IN && ease !== Ease.EASE_IN_OUT && ease !== Ease.EASE_OUT && ease !== Ease.LINEAR) {
		window.alert("Please provide a valid option for the ease type. This can be Ease.EASE, Ease.EASE_IN, Ease.EASE_OUT, Ease.EASE_IN_OUT, or Ease.LINEAR. The ease parameter can also be left blank and it will default to an easing type of Ease.EASE.");
		return this;
	}

	// ITERATION COUNT check
	if (!iterationCount) {
		iterationCount = "1";
	}
	// if it is a number, convert to whole number in case it has decimals
	else if ((typeof iterationCount) === "number") {
		iterationCount = "" + (iterationCount >> 0);
	}
	else if ((typeof iterationCount) === "string" && iterationCount !== Iteration.INFINITE) {
		if (isNaN(parseInt(iterationCount)) === true) {
			window.alert("The value for \"iterationCount\" is not a valid number. Please provide a whole number value for the \"iterationCount\" parameter.");
			return this;
		}
		else {
			iterationCount = parseInt(iterationCount);
		}
	}

	// DIRECTION check
	if (!direction) {
		direction = Direction.NORMAL;
	}
	else if (direction !== Direction.NORMAL && direction !== Direction.REVERSE && direction !== Direction.ALTERNATE && direction !== Direction.ALTERNATE_REVERSE) {
		window.alert("The value for \"direction\" is not valid. Please provide a valid value for the \"direction\" parameter.");
		return this;
	}

	// FILL MODE check
	if (!fillMode) {
		fillMode = FillMode.BOTH;
	}
	else if (fillMode !== FillMode.FORWARDS && fillMode !== FillMode.BACKWARDS && fillMode !== FillMode.BOTH && fillMode !== FillMode.NONE) {
		window.alert("The value for \"fillMode\" is not valid. Please provide a valid value for the \"fillMode\" parameter.");
		return this;
	}

	var animation = this._styleName + " " + duration + " " + ease + " " + startTime + " " + iterationCount + " " + direction + " " + fillMode;
	
	var ua = navigator.userAgent;
	var isSafari = (ua.indexOf("WebKit") !== -1 && ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1 && ua.indexOf("OPR") === -1) ? true : false;
	if (isSafari === false) {
		element.addEventListener(AnimationRule._animationStart, AnimationRule._onAnimationStart);
		/*
		"AnimationRule._elements" is the Array variable holding a reference to each element being animated if the 
		browser is not Safari.
		*/
		AnimationRule._elements.push(element);
	}

	element.style["-webkit-animation"] = animation;
	element.style["-moz-animation"] = animation;
	element.style["-o-animation"] = animation;
	element.style.animation = animation;
	
	return this;
}




// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------ AnimationRule static public methods ------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------------------- //
/**
* Loops through all HTML elements in the elements Array and sets the "animation-slay-state" CSS style to "running" 
* for all animations that were in the middle of playing and the ones that had yet to start (based on delay).<br />
* <br />
* <b>NOTE:</b> This is a static method and should be called on the AnimationRule object exactly as presented in 
* the example below.
* 
* @memberof AnimationRule
* @function resumeAnimations
* @see {@link AnimationRule.pauseAnimations}
* @final
* @static
* 
* @example
* AnimationRule.resumeAnimations();
*/
AnimationRule.resumeAnimations = function() {
	var i = AnimationRule._elements.length - 1;
	while (i > -1) {
		AnimationRule._elements[i].style["-webkit-animation-play-state"] = "running";
		AnimationRule._elements[i].style["-moz-animation-play-state"] = "running";
		AnimationRule._elements[i].style["-o-animation-play-state"] = "running";
		AnimationRule._elements[i].style.animationPlayState = "running";
		i -= 1;
	}
}

// -------------------------------------------------------------------------------------------------------------- //
/**
* Loops through all HTML elements in the elements Array and sets the "animation-slay-state" CSS style to "paused" 
* to freeze any animation currently playing and any animation that has yet to play.<br />
* <br />
* <b>NOTE:</b> This is a static method and should be called on the AnimationRule object exactly as presented in 
* the example below.
* 
* @memberof AnimationRule
* @function pauseAnimations
* @see {@link AnimationRule.resumeAnimations}
* @final
* @static
* 
* @example
* AnimationRule.pauseAnimations();
*/
AnimationRule.pauseAnimations = function() {
	var i = AnimationRule._elements.length - 1;
	while (i > -1) {
		AnimationRule._elements[i].style["-webkit-animation-play-state"] = "paused";
		AnimationRule._elements[i].style["-moz-animation-play-state"] = "paused";
		AnimationRule._elements[i].style["-o-animation-play-state"] = "paused";
		AnimationRule._elements[i].style.animationPlayState = "paused";
		i -= 1;
	}
}