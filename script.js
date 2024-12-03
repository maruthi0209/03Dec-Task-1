// Question 1
/**
 * Scenario: Online Library Membership
---------------------------------------
Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:

Basic Membership: Access to only free books.

Standard Membership: Access to free books and discounted paid books.

Premium Membership: Access to all books, including exclusive content.

Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.
 */
var userMembership = "standard";
if (userMembership == "basic") {
    console.log(`Your Access level is ${userMembership}. You can access only free books`);
} else if (userMembership == "standard") {
    console.log(`Your Access level is ${userMembership}. You can access free books and discounted paid books.`);
} else if (userMembership == "premium") {
    console.log(`Your Access level is ${userMembership}. You can access all books, including exclusive content.`);
} else {
    console.log(`Sorry! membership type is invalid.`);
}


// Question 2
/**
 * Scenario: E-Commerce Discount Application
---------------------------------------------
Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.
 */
var user = {
    'membershipStatus' : 'vip',
    'purchaseAmount' : 450
}
if (user['membershipStatus'] == "regular" && (user['purchaseAmount'] > 1 && user['purchaseAmount'] < 100)) {
    console.log(`Sorry, no discount is applicable. Your final price is ${user['purchaseAmount']}`);
} else if (user['membershipStatus'] == "regular" && (user['purchaseAmount'] >= 100 && user['purchaseAmount'] < 500)) {
    console.log(`5% discount is applicable. Your final price is ${user['purchaseAmount'] * 0.95}`);
} else if (user['membershipStatus'] == "regular" && user['purchaseAmount'] >= 500) {
    console.log(`10% discount is applicable. Your final price is ${user['purchaseAmount'] * 0.90}`);
} else if (user['membershipStatus'] == "vip" && (user['purchaseAmount'] > 1 && user['purchaseAmount'] < 100)) {
    console.log(`10% discount is applicable. Your final price is ${user['purchaseAmount'] * 0.90}`);
} else if (user['membershipStatus'] == "vip" && (user['purchaseAmount'] >= 100 && user['purchaseAmount'] < 500)) {
    console.log(`15% discount is applicable. Your final price is ${user['purchaseAmount'] * 0.85}`);
} else if (user['membershipStatus'] == "vip" && user['purchaseAmount'] >= 500) {
    console.log(`20% discount is applicable. Your final price is ${user['purchaseAmount'] * 0.80}`);
} else if ((user['membershipStatus'] != "regular" || user['membershipStatus'] != "vip") || (user['purchaseAmount'] < 0)) {
    console.log("The data you have entered is invalid. ");
} else {
    console.log("Please enter valid data.");
}


// Question 3
/**
 * Scenario: Academic Scholarship Eligibility
----------------------------------------------
Context: A university offers scholarships to students based on their GPA and extracurricular involvement:

Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.
 */
var student = {
    'gpa' : 3.5,
    'extracurriculars' : ['sports', 'painting', 'swimming'],
    'communityServiceHours' : 150
}
var scholarships = [];
if (student['gpa'] >= 3.5) {
    scholarships.push('Merit-Based');
    //console.log(`The student is eligible for Merit-Based Scholarship`);
}
if (student['gpa'] >= 3.0 && student['extracurriculars'].length >= 2) {
    scholarships.push('Leadership');
    //console.log(`The student is eligible for Leadership Scholarship`);
}
if (student['gpa'] >= 2.5 && student['communityServiceHours'] >= 100) {
    scholarships.push('CommunityService');
    //console.log(`The student is eligible for Community Service Scholarship`);
}
if (scholarships.length > 0) {
    console.log(`The student is applicable for ${scholarships.length} scholarships. They are - `);
    for (var i = 0; i < scholarships.length; i++) {
        console.log(scholarships[i], "Scholarship");
    }
} else {
    console.log("The student is not applicable for any scholarship.");
}


// Question 4 
/**
 * Scenario: Movie Ticket Pricing
----------------------------------
Context: A movie theater charges different prices based on the day of the week and the customer's age:

Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

Weekends: Standard price of $15. Seniors and children receive a 30% discount.

Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.
 */
var day = "sunday";
var customerAge = 5;
var weekends = ['sunday', 'saturday'];
var weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
if  ((weekends.includes(day)) && (customerAge >= 65 || (customerAge > 0 && customerAge < 12))){
    console.log(`The ticket price is ${15 * 0.7}`);
} else if ((weekends.includes(day) && (customerAge < 65 && customerAge >= 12))) {
    console.log("The ticker price is 15");
} else if ((weekdays.includes(day)) && (customerAge >= 65 || (customerAge > 0 && customerAge < 12))) {
    console.log(`The ticker price is ${12 * 0.5}`);
} else if (weekdays.includes(day) && (customerAge < 65 && customerAge >= 12)) {
    console.log("The ticket price is 12");
} else {
    console.log("You have entered invalid data. Please enter valid day and customer age.");
}


// Question 5
/**
 * Scenario: Event Registration Validation
-------------------------------------------
Context: An event registration system needs to validate user inputs before confirming their registration:

The user must be 18 years or older to register.

The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

The user must provide a valid email address.

Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.
 */
var newUser = {
    'age' : 22,
    'email' : "valid"
}
var numberOfParticipants = 20;
if ((numberOfParticipants < 100 && numberOfParticipants >= 0) && ((newUser['age'] >= 18) && newUser['email'] == "valid")) {
    console.log("The user can be registered for the event.");
} else if ((numberOfParticipants < 100 && numberOfParticipants >= 0) && ((newUser['age'] > 0 && newUser['age'] < 18) && newUser['email'] == "valid")) {
    console.log("Sorry, the user must be 18 years or older to register.");
} else if ((numberOfParticipants < 100 && numberOfParticipants >= 0) && ((newUser['age'] >= 18) && newUser['email'] != "valid")) {
    console.log("Sorry, the user must provide a valid email address.");
} else if (numberOfParticipants >= 100) {
    console.log("Sorry, The event allows a maximum of 100 participants. The event is full, hence no more registrations are accepted. ");
} else {
    console.log("You have entered invalid data. Please enter valid data.");
}


