(function(){
    console.log('Isto foi demasiado rápido!');
})();

function form (campName){
    return (function(name){
        console.log(campName + ': ' + name);
    })();
};

