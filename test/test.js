// function testCreateRandInt() {
// }

// 测试createMineMap
function testCreateMineMap(row, col, total) {
	// 生成地图
	var map = createMineMap(row, col, total);

	// 统计方格数和地雷数
	var boxTotal = 0;
	var mineTotal = 0;

	for(var r in map) {
		for(var c in map[r]) {
			r = parseInt(r);
			c = parseInt(c);

			boxTotal++;

			if(9 === map[r][c]) {
				mineTotal++;
				continue;
			}

			// 记录某方格周围的地雷数目
			var aroundMineCount = 0;

			// 左上
			if(r-1>=0 && c-1>=0 && 9 === map[r-1][c-1]) {
				aroundMineCount++;
			}

			// 中上
			if(r-1>=0 && 9 === map[r-1][c]) {
				aroundMineCount++;
			}

			// 右上
			if(r-1>=0 && c+1<col && 9 === map[r-1][c+1]) {
				aroundMineCount++;
			}

			// 中右
			if(c+1<col && 9 === map[r][c+1]) {
				aroundMineCount++;
			}

			// 下右
			if(r+1<row && c+1<col && 9 === map[r+1][c+1]) {
				aroundMineCount++;
			}

			// 下中
			if(r+1<row && 9 === map[r+1][c]) {
				aroundMineCount++;
			}

			// 下左
			if(r+1<row && c-1>=0 && 9 === map[r+1][c-1]) {
				aroundMineCount++;
			}

			// 中左
			if(c-1>=0 && 9 === map[r][c-1]) {
				aroundMineCount++;
			}

			if(aroundMineCount !== map[r][c]) {
				return false;
			}
		}
	}

	// console.log(boxTotal, mineTotal, map);

	if(mineTotal !== total || boxTotal !== row * col) {
		return false;
	}

	return true;
}

QUnit.test('testCreateMineMap', function() {
	ok(testCreateMineMap(6, 6, 1), '6*6 1雷');
	ok(testCreateMineMap(6, 6, 18), '6*6 18雷');
	ok(testCreateMineMap(6, 6, 19), '6*6 19雷');
	ok(testCreateMineMap(6, 6, 35), '6*6 35雷');
	ok(testCreateMineMap(6, 6, 36), '6*6 36雷');
	ok(testCreateMineMap(7, 7, 48), '7*7 48雷');
	ok(testCreateMineMap(8, 8, 63), '8*8 63雷');
	ok(testCreateMineMap(9, 9, 80), '9*9 80雷');
	ok(testCreateMineMap(10, 10, 99), '10*10 99雷');
	ok(testCreateMineMap(11, 11, 120), '11*11 120雷');
	ok(testCreateMineMap(1000, 1000, 50000), '1000*1000 50000雷 这个IE浏览器的Javascript引擎hold不住');
});