const compress = (a, b = true) => {
		if (typeof a !== 'string') {
			throw new Error('InvalidType');
		}
		if (b) {
			let compressed = '';
			let count = 1;
			for (let i = 0; i < a.length; i++) {
				if (a[i] === a[i + 1]) {
					count++;
				} else {
					compressed += a[i] + count;
					count = 1;
				}
			}
			return compressed;
		} else {
			let decompressed = '';
			for (let i = 0; i < a.length; i++) {
				if (/\d/.test(a[i + 1])) {
					decompressed += a[i].repeat(parseInt(a[i + 1]));
					i++;
				} else {
					decompressed += a[i];
				}
			}
			return decompressed;
		}
	};	
module.exports = compress
