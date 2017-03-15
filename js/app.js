document.addEventListener('DOMContentLoaded',function() {
	var checkboxes = document.querySelectorAll('[name=checkbox]');
	var operatorSelect = document.querySelector('[name=operator]');
	var circleSelect = document.querySelector('[name=circle]');
	var circles = ['Andhra Pradesh','Assam','Bihar','Chennai','Delhi','Gujarat','Haryana','Himachal Pradesh','Karnataka','Kerala','Kolkata','Madhya Pradesh','Maharashtra','Mumbai','North East','Orissa','Punjab','Rajasthan','Tamil Nadu','Uttar Pradesh (E)','Uttar Pradesh (W)','West Bengal','JK','UTTARANCHAL'];
	var operators = ['Aircel','Airtel','BSNL','Tata Docomo GSM','Idea','Indicom Walky','MTNL Delhi','Reliance GSM/CDMA','Tata Indicom','Telenor','Vodafone','MTS','Videocon Mobile','Virgin GSM','Virgin CDMA','Tata Docomo CDMA','T24','MTNL Mumbai'];
	var button = document.getElementById('proceed');
	var mobileNo = document.querySelector('[name=mobileNo]');
	var id = "";

	function setOptions(array,selector) {
		array.forEach(function (operator) {
			var el = document.createElement('option');
			el.setAttribute('value', operator);
			el.innerHTML = operator;
			selector.appendChild(el);
		});
	}

	setOptions(operators,operatorSelect);
	setOptions(circles,circleSelect);

	checkboxes.forEach(function(checkbox) {
		checkbox.addEventListener('click', function(e) {
			id = e.target.id;
			if(id == 'postpaid') {
				circleSelect.style.display = 'none';
			}
			else {
				circleSelect.style.display = 'block';
			}
		});
	});

	button.addEventListener('click', function(e) {
		if(mobileNo.value.trim() == '' || mobileNo.value.length != 10) {
			swal(
			  'Oops...',
			  "You didn't fill your mobile number",
			  'error'
			);
		}
		else {
				swal({
				  title: 'Enter Amount',
				  input: 'number',
				  showCancelButton: true,
				  confirmButtonText: 'Submit',
				  showLoaderOnConfirm: true,
				  preConfirm: function (amount) {
				    return new Promise(function (resolve, reject) {
				      setTimeout(function() {
				        if (amount <= 50) {
				          reject('The least amount is Rs.50')
				        } else {
				          resolve()
				        }
				      }, 2000)
				    })
				  },
				  allowOutsideClick: false
				}).then(function (amount) {
				  swal({
				    type: 'success',
				    title: 'Successful',
				    html: 'Amount: ' + amount
				  });
				});
		}
	});

});
