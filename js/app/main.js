define(["jquery", "calculatewavelength"], function($, cw) {

	var update = function(e) {
		e.preventDefault();
		var ret = cw( $("#length").val(),  $("#width").val(),  $("#height").val());
		
		var $rt = $("#resultTable").empty();
		for (var i in ret.all) {
			var freq = ret.all[i];
			var $row = $("<tr></tr>");$rt.append($row);
			var $cell1 = $("<td></td>");$row.append($cell1);
			
			var freqstr = "";
			if (freq < 1000) {
				freqstr = freq + " Hz";
			} else {
				freqstr = parseInt(freq/10.0)/100.0 + " KHz";
			}
			

			$cell1.text(freqstr);
		}
		
		console.log(ret);
		return false;
	};

    $(function() {
		console.log("Init...");
        $('#sizeForm input').on("change", update);
        $('#sizeForm button').on("click", update);
    });

});

