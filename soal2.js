function total(x) {
  var bilangan = [];
  if(x>=0){
      bilangan.push('Bulat','Cacah')
  }else if(x<=0)
        bilangan.push('Bulat','Negatif')

 if(x>=1){
        bilangan.push('Asli')
 }else if(x==0){
        bilangan.push('Nol')
 }

 if(x%2==0){
        bilangan.push('Genap')
 }else if(x%2==1){
        bilangan.push('Ganjil')
 }
 for(i=1; i<x; i++){
     if(x%i==0){
         bilangan.push('Bukan Prima')
     }
     else{
         bilangan.push('Prima')
     }
 }
  
 console.log(bilangan)

}
console.log(total(13))
 
    // z = x + y
    // return z
    // } console.log(total(4,5))
    // console.log(z)

