function createMineHtml(row, col) {
	var htmlSegment = '<table id="mine_table"><tbody>';
	for (var r = 0; r < row; r++) {
		htmlSegment += '<tr data-row="' + r + '">';
		for(var c = 0; c < col; c++) {
			htmlSegment += '<td class="hide" data-col="' + c + '" data-status="hide"></td>'
		}
		htmlSegment += '</tr>';
	};
	htmlSegment += '</tbody></table>';

	return htmlSegment;
}


function concaveBox(element) {
	// console.log('down 凹下去');
	if('hide' === $(element).attr('data-status')) {
		$(element).removeClass('in');
		$(element).addClass('concave');
	}
}


function concaveAllAroundBox(element) {
	
}


function protrudeBox(element) {
	$(element).removeClass('concave');
}