class Promisses{

    constructor()
    {
        this.StartButtons();
    }

    StartButtons()
    {
        let btnMessage = document.querySelector('#btnMessage');
        let btnMath = document.querySelector('#btnMath');

        let input1 = document.getElementById('value1');
        let input2 = document.getElementById('value2');
        let resultado = document.getElementById('result');

        btnMessage.addEventListener('click', () =>{
            this.ShowMessage().then(() => {
                console.log('BITCH!');
            })
        });

        btnMath.addEventListener('click', () =>{
            this.DoMath(input1.value).then((value) => 
            {
                this.DoOperation(value, input2.value).then((valorFinal) =>
            {
                resultado.value = valorFinal;
            }).catch(() =>
                {
                    alert('Insira apenas números');
                });
    
            }).catch(() =>
                {
                alert('Insira apenas números');
                });  
        });
    }

    ShowMessage()
    {
        return new Promise((resolve, reject) =>{
            console.log('SCIENCE');
            resolve(4);
        });
    }

    DoMath(value1)
    {
        return new Promise((resolve, reject) =>{
            
            if(!isNaN(value1))
            {
                resolve(value1);
            }
            else{
                reject();
            }

        });
    }

    DoOperation(value1, value2)
    {
        return new Promise((resolve, reject) =>{

            if(!isNaN(value2)) 
            {
                resolve(parseFloat(value1) + parseFloat(value2));
            }
            else
            {
                reject();
            }
        }); 
    }

}