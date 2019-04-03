/* eslint-disable no-undef */
const path = require('path');
const chai = require('chai');
const expect = chai.expect;
const {Calculator} = require('../calculator');

describe('#check correct update requests', function () {
	const calculator = new Calculator();
	const dataProvider = [
		{operandOne:1,operandTwo:1,result:2},
		{operandOne:0,operandTwo:1,result:1},
		{operandOne:1,operandTwo:0,result:1},
		{operandOne:-1,operandTwo:-1,result:-2},
		{operandOne:-1,operandTwo:0,result:-1},
		{operandOne:0,operandTwo:-1,result:-1},
		{operandOne:489.5,operandTwo:15,result:504.5},
		{operandOne:-250,operandTwo:-306,result:-556},
		{operandOne:45.17,operandTwo:80,result:125.17},
		{operandOne:-156,operandTwo:186.7,result:36.7},
		{operandOne:888,operandTwo:-111.1,result:776.9},
	];
	dataProvider.forEach((dataBundle)=>{
		it('should summ two numbers', async function () {
			expect(Calculator.add(dataBundle.operandOne,dataBundle.operandTwo)).to.be.equal(dataBundle.result);
		});
	});
	it('should multiply  two numbers', async function () {
		const calculator = new Calculator();
		expect(Calculator.multiply(2,4)).to.be.equal(8);
	});

	// 	it('should return same Data that was sent to server', async function () {
	// 		const queryResult = await dbMethods.simpleQuery();
	// 		const values = await sheetCommands.combineDataToArray(queryResult);
	// 		await sheetCommands.writeToExcel(values);
	// 		const response = await sheetCommands.readFromExcel();
	// 		values.forEach((line) => {
	// 			line.forEach((cell) => {
	// 				expect(cell).to.be.equal((response.data.values)[values.indexOf(line)][line.indexOf(cell)]);
	// 			});
	// 		});
	// 	});

	// 	it('should return \'ESF\' as server header value', async function () {
	// 		const queryResult = await dbMethods.simpleQuery();
	// 		const values = await sheetCommands.combineDataToArray(queryResult);
	// 		const response = await sheetCommands.writeToExcel(values);
	// 		expect(response.headers.server).to.be.equal('ESF');
	// 	});

	// 	it('should return \'close\' as connection header value', async function () {
	// 		const queryResult = await dbMethods.simpleQuery();
	// 		const values = await sheetCommands.combineDataToArray(queryResult);
	// 		const response = await sheetCommands.writeToExcel(values);
	// 		expect(response.headers.connection).to.be.equal('close');
	// 	});

	// 	it('should return \'close\' as connection url value', async function () {
	// 		const queryResult = await dbMethods.simpleQuery();
	// 		const values = await sheetCommands.combineDataToArray(queryResult);
	// 		const response = await sheetCommands.writeToExcel(values);
	// 		expect(response.config.url).to.be.contain(docId);
	// 	});

	// });


	// describe('#check incorrect update requests', function () {
	// 	it('should return code 400 if data is bad', async () => {
	// 		const errorObject = await sheetCommands.writeToExcel(357);
	// 		expect(errorObject.code).to.be.equal(400);
	// 	});

	// 	it('should return code 401 if credentials are incorrect', async function () {
	// 		const queryResult = await dbMethods.simpleQuery();
	// 		const values = await sheetCommands.combineDataToArray(queryResult);
	// 		const errorObject = await sheetCommands.writeTo(null, docId, values);
	// 		expect(errorObject.code).to.be.equal(401);
	// 	});

	// 	it('should return code 404 if document id is incorrect', async function () {
	// 		const queryResult = await dbMethods.simpleQuery();
	// 		const values = await sheetCommands.combineDataToArray(queryResult);
	// 		const auth = await sheetCommands.setToken(await sheetCommands.getCredentials());
	// 		const errorObject = await sheetCommands.writeTo(auth, '1Oz-wxvVuctqCo25UIwkNnVhqf2nDyrz6aokYz0Py80I', values);
	// 		expect(errorObject.code).to.be.equal(404);
	// 	});

// 	it('should return code 403 if trying to write to other user\'s document', async function () {
// 		const queryResult = await dbMethods.simpleQuery();
// 		const values = await sheetCommands.combineDataToArray(queryResult);
// 		const auth = await sheetCommands.setToken(await sheetCommands.getCredentials());
// 		const errorObject = await sheetCommands.writeTo(auth, '1_h0IJNVSFt3spK_jmC8Hv4GUVPjTKVDMPWPQv_VD8Mw', values);
// 		expect(errorObject.code).to.be.equal(403);
// 	});
});