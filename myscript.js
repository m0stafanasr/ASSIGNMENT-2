var counter = 0;

        console.log(counter);
        showName();

        function showName() {
            var name = prompt("please enter your name:");
            
            if (name = null || name == "") {
                alert('this is not a name!');
                showName();
            }
            else {
                console.log(name.value);
                typePassword();

            }
        }

        function typePassword() {
            var password = prompt("please enter your password");
            if (counter < 3) {
                if (password == '123') {
                    enterMonth();
                }
                else if (password != null || password != '123') {
                    counter++;
                    console.log(counter);
                    alert('wrong password try again!');
                    typePassword();
                }
            }
        }

        function enterMonth() {
            var month = prompt("please enter your month of birth:");
            if (month > 12 || month < 1 || isNaN(month)) {
                if (confirm('please enter a valid month')) {
                    enterMonth();
                }
                else {
                    showName();
                }
            }
            else {
                birthDay(month);

            }
        }
        
        function birthDay(month) {
          
              var day = prompt("please enter your day of birth:");
            if (month == 4 || month == 6 || month == 9 || month == 11 && day > 30 || day < 1 || isNaN(day)) {
                   if (confirm('please enter a valid day')) {
                        birthDay();
                    }
                    else {
                        showName();
                    }
                }
            
            else if (month == 2 && day > 29 || day < 1 || isNaN(day)) {
                    if (confirm('please enter a valid day')) {
                            birthDay();
                        }
                        else {
                            showName();
                        }
                    }
               
               
            else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31 || day < 1 || isNaN(day)) {
                if (confirm('please enter a valid day')) {
                            birthDay();
                        }
                        else {
                            showName();
                        }
                 }
	  else {
                    horscope(month, day);
                }
        }
        function horscope(m, d) {
            // test 
          
                if ((m == 1 && d > 19) || (m == 2 && d < 19)) {
                    alert('aquarius');
                }
                else if((m == 2 && d > 19) || (m == 3 && d < 21)){
                    alert('pisces');
                }
                else if((m == 3 && d > 20) || (m == 4 && d < 21)){
                    alert('aries');
                }
                else if((m == 4 && d > 20) || (m == 5 && d < 22)){
                    alert('taurus');
                }
                else if((m == 5 && d > 21) || (m == 6 && d < 23)){
                    alert('gemini');
                }
                else if((m == 6 && d > 21) || (m == 7 && d < 23)){
                    alert('cancer');
                }
                else if((m == 7 && d > 22) || (m == 8 && d < 23)){
                    alert('leo');
                }
                else if((m == 8 && d > 22) || (m == 9 && d < 24)){
                    alert('virgo');
                }
                else if((m == 9 && d > 22) || (m == 10 && d < 23)){
                    alert('libra');
                }
                else if((m == 10 && d > 22) || (m == 11 && d < 23)){
                    alert('scorpio');
                }
                else if((m == 11 && d > 21) || (m == 12 && d < 22)){
                    alert('saggitarius');
                }
                else if((m == 12 && d > 21) || (m == 1 && d < 20)){
                    alert('capricorn');
                }
                else{
                    alert('please check date');
                }
            }
        
