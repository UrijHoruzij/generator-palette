import { generate } from '..';

test('Generate palettes from a given color', () => {
	expect(generate('#1890ff')).toEqual([
		'#e6f7ff',
		'#bae7ff',
		'#91d5ff',
		'#69c0ff',
		'#40a9ff',
		'#1890ff',
		'#096dd9',
		'#0050b3',
		'#003a8c',
		'#002766',
	]);
});

test('Generate dark palettes from a given color', () => {
	expect(
		generate('#1890ff', {
			theme: 'dark',
			backgroundColor: '#141414',
		}),
	).toEqual([
		'#111d2c',
		'#112a45',
		'#15395b',
		'#164c7e',
		'#1765ad',
		'#177ddc',
		'#3c9ae8',
		'#65b7f3',
		'#8dcff8',
		'#b7e3fa',
	]);
});
