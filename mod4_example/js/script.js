var name = "Hao";
function foo(name) {
    console.log("Hello, "+name);
}
function call(name) {
    var name = "Phuc";
    foo(name);
}
call(name);