// // Q#1
// let studentNames = [];

// // Q#2
// let stdntNames = new Array();

// let a=[];
// // Q#3
// let subjects=["English", "Science", "Maths", "Computer"];


// // Q#4
// let age=[23, 20, 19, 16, 12, 24];

// // Q#5
// let blnArr = [true, false, true, false];

// // Q#6
// //Mixed Array
// let info=["Waseem", 24, true];

// // Q#7
// let educationQualification=["SSC", "HSSC", "BCS", "BS","BCOM","MS", "M.Phil.", "PHD"];
// document.write("Qualifications: <br/>");
// document.write("1)"+educationQualification[0]+"<br/>");
// document.write("2)"+educationQualification[1]+"<br/>");
// document.write("3)"+educationQualification[2]+"<br/>");
// document.write("4)"+educationQualification[3]+"<br/>");
// document.write("5)"+educationQualification[4]+"<br/>");
// document.write("6)"+educationQualification[5]+"<br/>");
// document.write("7)"+educationQualification[6]+"<br/>");
// document.write("8)"+educationQualification[7]+"<br/>");


// // Q#8
// let students=["Ahmad", "Samiullah", "Basit"];
// let scores=[320, 230, 480];
// let totalScore=500;
// document.write(`Score of ${students[0]} is ${scores[0]}. Percentage: ${scores[0]/totalScore*100}% <br/>`);
// document.write(`Score of ${students[1]} is ${scores[1]}. Percentage: ${scores[1]/totalScore*100}% <br/>`);
// document.write(`Score of ${students[2]} is ${scores[2]}. Percentage: ${scores[2]/totalScore*100}% <br/>`);


// // Q#9
// let colors=[" Red", " Green", " Yellow", " Blue", " White", " Black", " Orange"];
// document.write(colors+"<br/>");
// // a
// let beginningAdd =prompt("What colot do you want to add at beginning of the list?").toUpperCase();
// colors.unshift(beginningAdd);
// document.write(`The New List of Color after adding ${beginningAdd} at beginning is: <br/> ${colors}<br/>`);
// // b
// let endAdd=prompt("What color do you want to add at the end of the list?").toUpperCase();
// colors.push(endAdd);
// document.write(`The New List of Color after adding ${endAdd} is: <br/> ${colors} <br/>`);
// // c
// colors.unshift("Violet", "Brown");
// document.write(`The New Color after adding two more colors at the beginning:<br/> ${colors} <br/>`);
// //d
// colors.shift();
// document.write(`The New Color after removing first color:<br/> ${colors} <br/>`);
// //e
// colors.pop();
// document.write(`The New Color after removing last color:<br/> ${colors} <br/>`);
// //f
// let clr=["red","yellow","green","blue"];
// let ind=+prompt("At which index do you want to add a Color:");
// let addclr=prompt("Which Color do you want to add:").toUpperCase();
// clr.splice(ind, 0 , addclr);
// document.write(`The New Color after adding ${addclr} at index ${ind} is:<br/> ${clr}<br/>`);
// // g
// let colr=["Red","Orange","Yellow","Green","Blue","Violet","Purple"];
// document.write(`List before removing any colors: <br/> ${colr} <br/>`);
// let indx=+prompt("At which index you want to remove a color:");
// let nmbrclrs=+prompt("How many colors should be removed");
// newcolr=colr.splice(indx,nmbrclrs);
// document.write(`After removing ${nmbrclrs} colors at index ${indx} is: <br/> ${colr}`);


// // Q#10
// let scrs=[320,230,480,120]
// document.write(`Scores of Students : ${scrs} <br/>`);
// scrs.sort();
// document.write(`Ordered Scores of Students : ${scrs} <br/>`);

// // Q#11
// let cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// document.write(`Cities list: <br/> ${cities} <br/>`);
// let selectedCites=cities.slice(2,4);
// document.write(`Select cities list: <br/>${selectedCites}`);


// // Q#12
// var arr=["This", "is", "my","cat"];
// document.write(`Array: <br/> ${arr}<br/>`);
// newarr=arr.join(" ");
// document.write(`String:<br/> ${newarr}<br/>`);

// // Q#13
// let devices=["keyboard", "mouse", "printer", "monitor"];
// document.write(`Devices: <br/> ${devices} <br/>`);
// document.write(`Out: <br/> ${devices.shift()} <br/>`);
// document.write(`Out: <br/> ${devices.shift()} <br/>`);
// document.write(`Out: <br/> ${devices.shift()} <br/>`);
// document.write(`Out: <br/> ${devices.shift()} <br/>`);

// // Q#14
// let elements =["Oxygen", "Hydrogen", "Sodium", "Potassium", "Calcium"];
// document.write(`Devices <br/> ${elements} <br/>`);
// document.write(`Out: <br/> ${elements.pop()} <br/>`);
// document.write(`Out: <br/> ${elements.pop()} <br/>`);
// document.write(`Out: <br/> ${elements.pop()} <br/>`);
// document.write(`Out: <br/> ${elements.pop()} <br/>`);
// document.write(`Out: <br/> ${elements.pop()} <br/>`);

// // Q#15
// let phoneMenufacturer = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write(`<select><option>${phoneMenufacturer[0]}</option><option>${phoneMenufacturer[1]}</option><option>${phoneMenufacturer[2]}</option><option>${phoneMenufacturer[3]}</option><option>${phoneMenufacturer[4]}</option><option>${phoneMenufacturer[5]}</option></select>`);