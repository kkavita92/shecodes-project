//takes photos from the web which can be used by photoViewer
export function getPhoto(){
    const url="https://picsum.photos/200/300/?random";
    fetch(url)
    .then((resp) => (resp.url))
    .catch(function(error){
        console.log(error);
        })
    }
    