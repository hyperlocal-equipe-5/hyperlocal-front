export const ArraySort = {
	sort(data: any, parameter: string) {
		return data.sort((item1: any, item2: any) => {
			return item1[parameter] < item2[parameter] ? 1 : item1 === item2 ? 0 : -1;
		});
	},
};
