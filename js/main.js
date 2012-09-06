$(document).ready(function() {
	$(".fancybox").fancybox();
});

function loadApp(name,author,desc,img_url,jar_url){
	var lastRow = $(".app-row:last");
	if(lastRow.children().length >=3){
		lastRow.parent().after("<div class='row-fluid'>\
			<ul class='thumbnails app-row'></ul>\
			</div>");
		var lastRow = $(".app-row:last");
	}
	var appID = $(".thumbnail").length;
	var modalID = "modal-"+appID;
	var startID = "start-"+appID;
	var closeID = "close-"+ appID;
	var closeID2 = "close2-"+ appID;
	var placeHolderID = "javafx-placeholder-"+ appID;
	
	var modalWindow = "<div class='modal hide fade' id='"+modalID+"' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>\
			  <div class='modal-header'>\
				<button id='"+closeID+"' type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button>\
				 <h3>"+name+"<span>&nbsp;&nbsp;<small>"+author+"</small></span></h3>\
			  </div>\
			  <div class='modal-body'>\
				<p>"+desc+"</p>\
				<div id='"+placeHolderID+"'></div>\
				</div>\
			  <div class='modal-footer'>\
				<button id='"+closeID2+"' class='btn' data-dismiss='modal' aria-hidden='true'>Close</button>\
			  </div>\
			</div>";
	var index = img_url.lastIndexOf('.');
	var prefix = img_url.substring(0,index);
	var suffix = img_url.substring(index);
	var img_mini_url = prefix+ "_m"+suffix;
	lastRow.append("<li class='span4'>\
                <div class='thumbnail'>\
                  <a class='fancybox' href='"+img_url+"'><img src='"+img_mini_url+"' alt=''></a>\
                  <div class='caption'>\
                    <h4>"+name+"<span>&nbsp;<small class='pull-right'>"+author+"</small></span></h4>\
                    <p>"+desc+"</p>\
                    <p style='text-align: center;'><a data-toggle='modal' href='#"+modalID+"' class='btn btn-primary btn-large'>Launch</a></p>\
                  </div>\
                </div>\n"+modalWindow+"\n</li>"
				);
	runApp(jar_url,placeHolderID);
}

function hideApplet(){
	$("#javafx-app-placeholder").remove();
}

function runApp(jarUrl, place){
	dtjava.embed(
                {
                url : 'Project2012Viewer.jnlp',
                placeholder : place,
                width : "100%",
                height : 155,
				params: {
					jar: jarUrl,
				},
                jnlp_content : 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxqbmxwIHNwZWM9IjEuMCIgeG1sbnM6amZ4PSJodHRwOi8vamF2YWZ4LmNvbSIgaHJlZj0iUHJvamVjdDIwMTJWaWV3ZXIuam5scCI+DQogIDxpbmZvcm1hdGlvbj4NCiAgICA8dGl0bGU+UHJvamVjdDIwMTJWaWV3ZXI8L3RpdGxlPg0KICAgIDx2ZW5kb3I+RTQwLUc4QzwvdmVuZG9yPg0KICAgIDxkZXNjcmlwdGlvbj5TYW1wbGUgSmF2YUZYIDIuMCBhcHBsaWNhdGlvbi48L2Rlc2NyaXB0aW9uPg0KICAgIDxvZmZsaW5lLWFsbG93ZWQvPg0KICA8L2luZm9ybWF0aW9uPg0KICA8cmVzb3VyY2VzPg0KICAgIDxqZng6amF2YWZ4LXJ1bnRpbWUgdmVyc2lvbj0iMi4yKyIgaHJlZj0iaHR0cDovL2phdmFkbC5zdW4uY29tL3dlYmFwcHMvZG93bmxvYWQvR2V0RmlsZS9qYXZhZngtbGF0ZXN0L3dpbmRvd3MtaTU4Ni9qYXZhZngyLmpubHAiLz4NCiAgPC9yZXNvdXJjZXM+DQogIDxyZXNvdXJjZXM+DQogICAgPGoyc2UgdmVyc2lvbj0iMS42KyIgaHJlZj0iaHR0cDovL2phdmEuc3VuLmNvbS9wcm9kdWN0cy9hdXRvZGwvajJzZSIvPg0KICAgIDxqYXIgaHJlZj0iUHJvamVjdDIwMTJWaWV3ZXIuamFyIiBzaXplPSIxNjAxMDQiIGRvd25sb2FkPSJlYWdlciIgLz4NCiAgICA8amFyIGhyZWY9ImxpYi9jb21tb25zLWNvZGVjLTEuNi5qYXIiIHNpemU9IjI1MzQ5NyIgZG93bmxvYWQ9ImVhZ2VyIiAvPg0KICAgIDxqYXIgaHJlZj0ibGliL2NvbW1vbnMtaW8tMi40LmphciIgc2l6ZT0iMTk4NDAyIiBkb3dubG9hZD0iZWFnZXIiIC8+DQogICAgPGphciBocmVmPSJsaWIvY29tbW9ucy1sb2dnaW5nLTEuMS4xLmphciIgc2l6ZT0iNjUyOTEiIGRvd25sb2FkPSJlYWdlciIgLz4NCiAgICA8amFyIGhyZWY9ImxpYi9mbHVlbnQtaGMtNC4yLjEuamFyIiBzaXplPSIyNDYwNSIgZG93bmxvYWQ9ImVhZ2VyIiAvPg0KICAgIDxqYXIgaHJlZj0ibGliL2h0dHBjbGllbnQtNC4yLjEuamFyIiBzaXplPSI0NjI3NjkiIGRvd25sb2FkPSJlYWdlciIgLz4NCiAgICA8amFyIGhyZWY9ImxpYi9odHRwY2xpZW50LWNhY2hlLTQuMi4xLmphciIgc2l6ZT0iMTIzNjQ2IiBkb3dubG9hZD0iZWFnZXIiIC8+DQogICAgPGphciBocmVmPSJsaWIvaHR0cGNvcmUtNC4yLjEuamFyIiBzaXplPSIyNDQ5OTEiIGRvd25sb2FkPSJlYWdlciIgLz4NCiAgICA8amFyIGhyZWY9ImxpYi9odHRwbWltZS00LjIuMS5qYXIiIHNpemU9IjMwMDY0IiBkb3dubG9hZD0iZWFnZXIiIC8+DQogICAgPGphciBocmVmPSJsaWIvanNvdXAtMS42LjMuamFyIiBzaXplPSIyOTgzNTUiIGRvd25sb2FkPSJlYWdlciIgLz4NCiAgICA8amFyIGhyZWY9ImxpYi9reG1sMi0yLjMuMC5qYXIiIHNpemU9IjQ2ODM0IiBkb3dubG9hZD0iZWFnZXIiIC8+DQogIDwvcmVzb3VyY2VzPg0KPHNlY3VyaXR5Pg0KICA8YWxsLXBlcm1pc3Npb25zLz4NCjwvc2VjdXJpdHk+DQogIDxhcHBsZXQtZGVzYyAgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTUiIG1haW4tY2xhc3M9ImNvbS5qYXZhZngubWFpbi5Ob0phdmFGWEZhbGxiYWNrIiAgbmFtZT0iUHJvamVjdDIwMTJWaWV3ZXIiID4NCiAgICA8cGFyYW0gbmFtZT0icmVxdWlyZWRGWFZlcnNpb24iIHZhbHVlPSIyLjIrIi8+DQogIDwvYXBwbGV0LWRlc2M+DQogIDxqZng6amF2YWZ4LWRlc2MgIHdpZHRoPSIyMDAiIGhlaWdodD0iMTU1IiBtYWluLWNsYXNzPSJvcmcudGp1bXlrLk1haW4iICBuYW1lPSJQcm9qZWN0MjAxMlZpZXdlciIgPg0KICAgIDxmeDphcmd1bWVudD5zdGFydDwvZng6YXJndW1lbnQ+DQogIDwvamZ4OmphdmFmeC1kZXNjPg0KICA8dXBkYXRlIGNoZWNrPSJhbHdheXMiLz4NCjwvam5scD4NCg=='
            },
            {
                javafx : '2.2+'
            },
            {}
            );
}