var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
var color1 = Color.Red;
console.log(color1);
console.log(Color[color1]); // Red
console.log(Color);
