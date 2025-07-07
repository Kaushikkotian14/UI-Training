var Course1;
(function (Course1) {
    Course1[Course1["Javascript"] = 0] = "Javascript";
    Course1[Course1["TypeScript"] = 1] = "TypeScript";
    Course1[Course1["React"] = 2] = "React";
    Course1[Course1["NodeJS"] = 3] = "NodeJS";
})(Course1 || (Course1 = {}));
var coursess = Course1.Javascript;
var courses = [Course1.Javascript, Course1.TypeScript, Course1.React, Course1.NodeJS];
console.log(coursess); // 0
console.log(courses); // [0, 1, 2, 3]
