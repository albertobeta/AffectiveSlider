Qualtrics.SurveyEngine.addOnload(function()
{
	
	var leftEmojiURL = "https://raw.githubusercontent.com/albertobeta/AffectiveSlider/master/PNGs/AS_sleepy.png"
	var rightEmojiURL = "https://raw.githubusercontent.com/albertobeta/AffectiveSlider/master/PNGs/AS_wideawake.png"
	var intensityCue = "https://raw.githubusercontent.com/albertobeta/AffectiveSlider/master/PNGs/AS_intensity_cue.png"
	
	var qid = this.questionId;
	
	console.log(qid);
	
	var statement = jQuery($(qid).select(".statement-container"));
	
	console.log(statement);
		
	statement.hide();
	
	var sliderTable =  jQuery($(qid).select("table"));
	
	//sliderTable.css("background-color", "red");
	
	var sliderRow =  jQuery($(qid).select("tr"));
	
	var sliderBar =  jQuery($(qid).select("td.BarOuter"));

	//sliderBar.css("background-color", "green");

	sliderBar.css("width", "80%");
	
	jQuery(sliderRow.prepend("<td style='width:10%;'><img src='"+leftEmojiURL+"'></td>"));
	
	jQuery(sliderRow.append("<td  style='width:10%;'><img src='"+rightEmojiURL+"'></td>"));
	
	jQuery(sliderTable.after("<div style='width:100%;text-align:center;'><img src='"+intensityCue+"'></div>"));


});