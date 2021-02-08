class Promisses{

    constructor()
    {
        this.StartButtons();
    }

    StartButtons()
    {
        let btnMessage = document.querySelector('#btnMessage');
        let btnMath = document.querySelector('#btnMath');
        let btnFile = document.getElementById('fileInput');

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
                this.DoOperation(value, input2.value);
            });
        });

        
        btnFile.addEventListener('change', (event) =>{
            this.GetPhotos(event).then((filesArray) => {
                this.ShowArray(filesArray);
            });
        });
    }


    ShowArray(files)
    {
        return new Promise((resolve, reject) =>{

            files.forEach(element => {
                let th = document.createElement('td');
                th.style.display = 'block';
                let imagem = document.createElement('video');
                imagem.src = element;
                imagem.className = 'mediaSize';
                th.appendChild(imagem);
                document.querySelector('tr').appendChild(th);
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
            
            setTimeout(() => {
                if(!isNaN(value1))
                {
                    resolve(value1);
                }
                else{
                    reject();
                }
            }, 3000);
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

    GetPhotos(event)
    {

        return new Promise((resolve, reject) =>
        {
            let photos = event.target.files;
            let fileArray = []; 
            if(photos)
            {

                for(let i = 0; i < photos.length; i++)
                {
                    let fileReader = new FileReader();
                    
                    fileReader.onload = () =>{
                        let fileType = fileReader.result.slice(0, 10);
        
                        switch(fileType)
                        {
                            case 'data:video':
                                
                                fileArray.push(fileReader.result);

                                console.log(photos.length);
                                console.log(fileArray.length);

                                if(photos.length == fileArray.length)
                                {
                                    resolve(fileArray);
                                }
                            break;

                            default: break;
                        }
                    }
                    fileReader.readAsDataURL(photos[i]);
                }
            }

            console.log('Sai da primeira promisse');
            
        });
       
    }
}