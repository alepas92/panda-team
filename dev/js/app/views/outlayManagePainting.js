managePanelPainting('outlays');
managePanelPainting('incomes');

function managePanelPainting (type) {

	if (type === 'outlays') {
		var placeholder = document.getElementById('manage-outlay'),
			fieldset;
		
		for (var key in data[todayKeyWord].outlays) {
			fieldset = document.createElement('fieldset');
			fieldset.className = 'manage-panel-fieldset';

			placeholder.appendChild(fieldset);
		}

	} else if ( type === 'incomes' ) {
		var placeholder = document.getElementById('manage-income'),
			fieldset;

		for (var key in data[todayKeyWord].incomes) {
			fieldset = document.createElement('fieldset');
			fieldset.className = 'manage-panel-fieldset';

			placeholder.appendChild(fieldset);
		}
	}
}

	function createInputField () {
		createLable();
	}

		function createLable () {
			var label = document.createElement( 'label' );
			return label
		}