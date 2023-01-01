window.addEventListener('load', () => {
    /*const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname');*/

    var inc1 = localStorage.getItem('Inc1');
    var inc2 = localStorage.getItem('Inc2');
    var inc3 = localStorage.getItem('Inc3');

  /*  var Inc1 = sessionStorage.getItem('inc1');
    
    var Inc2 = sessionStorage.getItem('inc2');
    var Inc3 = sessionStorage.getItem('inc3');*/

   
    document.getElementById('result-Inc1').innerHTML = inc1;
    document.getElementById('result-Inc2').innerHTML = inc2;
    document.getElementById('result-Inc3').innerHTML = inc3;

   

})