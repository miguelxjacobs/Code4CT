/* CART FUNCTIONALITY ONLY! */

    // let courses = [];
    let cart = [];

    //Add a course
    function addCourse(course, price) {
        // Creation of item
        let item = {
            course: course,
            price: price,
        }

        // Add items to cart
        if (cart.length !=0) {
            // Search item in array with loop
            let check = false;

            for (let cartItem in cart) {
                if (cart[cartItem].name === item.name) {
                    check = true;
                }
            }

            // If check returns false, item was not found in array
            if (!check) {
                cart.push(item);
            }
        }
        else {
            cart.push(item);
        }

        // Throw course item into variable
        let itemShow = document.getElementsByClassName('course_name');

        // Prevents item duplication
        itemShow.innerHTML = "";

        // Display cart item in shopping cart
        for (let val in cart) {
            // <p> node
            var node = document.createElement('p');
            // text node
            var textNode = document.createTextNode(cart[val].name);

            //  Append text to <p>
            node.appendChild(textNode);

            // Append <p> to cart with class="course"
            itemShow.appendChild(node);
        }
    }

    // Clear shopping cart
    function removeCourse() {
        
        let itemName = document.getElementsByClassName('course_name');
        let itemPrice = document.getElementsByClassName('course_price');

        itemName.innerHTML = "";
        itemPrice.innerHTML = "";
    }