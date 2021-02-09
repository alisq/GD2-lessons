
            //ALERT is useful but annoying. consoles are great.
            console.log("nothing broken yet.") 


            // $(".menu-area").addClass("active")

            $(".menu-area").click(function(){

                // if ( $(".menu-area").hasClass("active") ) { //CLOSE THE MENU
                //     $(".menu-area").removeClass("active")
                // } else { //OPEN THE MENU
                //     $(".menu-area").addClass("active")
                // }
                
                //THE EASY WAY            
                $(".menu-area").toggleClass("active")
            })



            // var studentName = "Dina";
            // studentName = studentName+" Tsyuy"

            // alert("Hello, "+ studentName);
            

                

            var allStudents = ["Lucy Chen", "Sissi Chen", "Brandon Cornell","Yuyi Fan","Keith Fernando","Sherysse Gardner","Menna Hafez","Renata Hewryk","Hwa-Jin Jun","Gahyun Lim","Ameena Muhammad","Kahala Orion","Kevin Paeng","Ju Yon Song","Wendy Su","Christine Tan","Alex Townson","Dina Tsyuy","Jianyang Xue","Lim Yu","Rui Zhou","Lillian Zhu"]
            
            var i=0;
            while (i<allStudents.length) {
                console.log(allStudents[i])
                $("<div></div>")
                    .addClass("student")
                    .html(allStudents[i])
                    .appendTo("#everything")

                i=i+1;
            }


            /*

            function(){ //NOTHING GOES BETWEEN PARANTHESES AT THE MOMENT
                WHATEVER YOU WANT TO HAPPEN IN HERE IS YOUR FUNCTION
            }
            
            */

