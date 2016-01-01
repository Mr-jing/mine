;
/**
 * 创建扫雷地图
 * row 地图的行数
 * col 地图的列数
 * total 地图中地雷的数目
 */
function createMineMap(row, col, total) {
	// 雷图
	var map = new Array();

	// 0表示没有雷，9表示有地雷
	var initValue = 0;
	var fillValue = 9;

	// 如果地雷数大于地图格子总数的一半，就随机填充空格
	if(total > row * col / 2) {
		initValue = 9;
		fillValue = 0;
		total = row * col - total;
	}

	// 初始化雷图
	for (var r = 0; r < row; r++) {
		map[r] = new Array();
		for (var c = 0; c < col; c++) {
			map[r][c] = initValue;
		};
	};


	// 记录地雷位置是数组
	// var mine = new Array();

	// 记录随机产生的格子数目
	var count = 0;

	// 随机产生格子
	while(count < total) {
		var r = createRandInt(0, row-1);
		var c = createRandInt(0, col-1);

		if(fillValue !== map[r][c]) {
			map[r][c] = fillValue;
			// mine[count] = new Array(r, c);
			count++;
		}
	}

	// 填充地图
	for (var r = 0; r < row; r++) {
		for (var c = 0; c < col; c++) {

			// 记录某方格周围的地雷数目
			var mineCount = 0;

			if(9 === map[r][c]) {
				continue;
			}

			// 左上
			if(r-1>=0 && c-1>=0 && 9 === map[r-1][c-1]) {
				mineCount++;
			}

			// 中上
			if(r-1>=0 && 9 === map[r-1][c]) {
				mineCount++;
			}

			// 右上
			if(r-1>=0 && c+1<col && 9 === map[r-1][c+1]) {
				mineCount++;
			}

			// 中右
			if(c+1<col && 9 === map[r][c+1]) {
				mineCount++;
			}

			// 下右
			if(r+1<row && c+1<col && 9 === map[r+1][c+1]) {
				mineCount++;
			}

			// 下中
			if(r+1<row && 9 === map[r+1][c]) {
				mineCount++;
			}

			// 下左
			if(r+1<row && c-1>=0 && 9 === map[r+1][c-1]) {
				mineCount++;
			}

			// 中左
			if(c-1>=0 && 9 === map[r][c-1]) {
				mineCount++;
			}

			map[r][c] = mineCount;
		};
	};

	return map;
}


/**
 * 创建一个在min~max范围的随机整数
 */
function createRandInt(min, max) {
	return parseInt(Math.random()*(max-min+1) + min); 
}


function fillMineMap(map) {
}


function getAllAround(r, c, maxRow, maxCol) {
	var points = [];

	// 左上
	if(r-1>=0 && c-1>=0) {
		points.push([r-1, c-1]);
	}

	// 中上
	if(r-1>=0) {
		points.push([r-1, c]);
	}

	// 右上
	if(r-1>=0 && c+1<maxCol) {
		points.push([r-1, c+1]);
	}

	// 中右
	if(c+1<maxCol) {
		points.push([r, c+1]);
	}

	// 下右
	if(r+1<maxRow && c+1<maxCol) {
		points.push([r+1, c+1]);
	}

	// 下中
	if(r+1<maxRow) {
		points.push([r+1, c]);
	}

	// 下左
	if(r+1<maxRow && c-1>=0) {
		points.push([r+1, c-1]);
	}

	// 中左
	if(c-1>=0) {
		points.push([r, c-1]);
	}

	return points;
}


function printMap(map) {
	var str = '';
	var total = 0;
	for(var r in map) {
		for(var c in map[r]) {
			// console.log(map[r][c]);
			str += map[r][c] + "  ";
			total += map[r][c];
		}
		str += "\n";
	}

	alert(str);
	alert(total);
	console.log(str);
	console.log(total);
}


function getTestMineMap() {
	var mineMap = [
		[0, 1, 2, 9, 2, 3, 9, 2],
		[0, 2, 9, 3, 2, 9, 9, 2],
		[0, 3, 9, 3, 1, 2, 2, 1],
		[0, 3, 9, 3, 0, 0, 0, 0],
		[0, 2, 9, 3, 1, 1, 0, 0],
		[0, 1, 1, 3, 9, 2, 0, 0],
		[0, 0, 0, 2, 9, 2, 0, 0],
		[0, 0, 0, 1, 1, 1, 0, 0]
	];

	return mineMap;
}