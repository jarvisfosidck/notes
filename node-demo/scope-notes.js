function process(data) {
	// do something interesting
}

// anything declared inside this block can go away after!
{
	let someReallyBigData = { .. };

	process( someReallyBigData );
}//notice the cool use of a block just to let let do it thing

// var btn = document.getElementById( "my_button" );
//
// btn.addEventListener( "click", function click(evt){
// 	console.log("button clicked");
// }, /*capturingPhase=*/false );

for (let i=0; i<10; i++) {
	console.log( i );
}
//we can reuse i later !
console.log( i ); // ReferenceError

// const
//
// In addition to let, ES6 introduces const, which also creates a block-scoped variable, but whose value is fixed (constant). Any attempt to change that value at a later time results in an error.

var foo = true;

if (foo) {
	var a = 2;
	const b = 3; // block-scoped to the containing `if`

	a = 3; // just fine!
	b = 4; // error!
}

console.log( a ); // 3
console.log( b ); // ReferenceError!
