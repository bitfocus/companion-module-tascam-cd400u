module.exports = async function (self) {
	let varList = [
		{ variableId: 'trackNo', name: 'Track Number' },
		{ variableId: 'trackTime', name: 'Track Time / Frequency' },
		{ variableId: 'trackTimeHours', name: 'Track Time: Hours' },
		{ variableId: 'trackTimeMinutes', name: 'Track Time: Minutes' },
		{ variableId: 'trackTimeSeconds', name: 'Track Time: Seconds' },
		{ variableId: 'errorStatus', name: 'Error Status' },
		{ variableId: 'cautionStatus', name: 'Caution Status' },
		{ variableId: 'deviceStatus', name: 'Device Status' },
	]
	self.setVariableDefinitions(varList)
}
