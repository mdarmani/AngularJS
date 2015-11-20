<p>some texts 33</p>

<div id="maf"></div>

<script>
	(function(a, b) {
        document.getElementById('maf').innerHTML = (a + " " + b);
      })('hello', 'world' );      
</script>  

<script>
	(function test(printTwo) {
        printing: {
            console.log("One");
            //var printTwo = true;
            if (!printTwo) break printing;
            console.log("Two");
        }
        console.log("Three");
    })();    
</script>  