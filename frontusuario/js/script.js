function login(){

    const us = document.querySelector("#nomeusuario");
    const sh = document.querySelector("#senha");
    
    //usamos o comando trim para eleminar os espaços

    if(us.value.trim() == "" || sh.value.trim()==""){
        return alert("Você deve preencher os campos");
    }
    

    fetch("http://127.0.0.1:4000/api/v1/users/login",{
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeusuario:us.value,
            senha:sh.value
        })
    }).then((res)=>res.json())
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>console.error(`Erro ao tenta acessar a api ${error}`));



}

function cadastrarUsuario(){
    const us = document.querySelector("#txtusuario");
    const sh = document.querySelector("#txtsenha");
    const ft = document.querySelector("#txtfotoperfil");

    if(us.value.trim()=="" || sh.value.trim()=="" || ft.value.trim()==""){
        return alert("Preencha todos os campos");
    }
    fetch("http://127.0.0.1:4000/api/v1/users/cadastrar",{
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeusuario:us.value,
            senha:sh.value,
            foto:ft.value
        })
    })
    .then((res)=>res.json())
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>console.error(`Erro na api ${error}`))
}

function carregarLivros(){
    const conteudo = document.querySelector(".conteudo");
    fetch("http://localhost:4003/api/v1/livros/detalhes")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.payload.map((rs)=>{
            let card = `<div class="card col-md-3 livro">
            <img src=${rs.foto1} class="card-img-top">
            <div class="card-body">
            <h3>${rs.nometitulo}</h3>
              <p class="card-text">Autor:${rs.autor}</p>
              <p class="card-text" style="text-decoration:line-through">De R$ ${rs.precoatual}</p>
              <p class="card-text">R$ ${rs.precodesconto<1 ? rs.precoatual : rs.precodesconto}</p>
              <a class="btn btn-warning" href="detalhes.html?idlivro=${rs.idtitulo}">Saiba mais</a>
            </div>
          </div>`;

            conteudo.innerHTML += card;

        })
    })
    .catch((error)=>console.error(`erro na api ${error}`))

}

function detalhes(){
    let id_url = window.location.search.split('=');
    const conteudo = document.querySelector(".conteudo");


    fetch("http://localhost:4003/api/v1/livros/detalhes/"+id_url[1])
    .then((res)=>res.json())
    .then((dados)=>{
        dados.payload.map((rs)=>{

            document.querySelector("h2").innerHTML = "Detalhes do livro:"+rs.nometitulo;

            let card = `<div class="card mb-3 col-md-8">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${rs.foto1}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">${rs.nometitulo}</h3>
                  <h5 class="card-title">Autor: ${rs.autor}</h5>
                  <p class="card-text">${rs.sinopse}</p>
                  <p class="card-text precoatual">R$ ${rs.precodesconto < 1 ? rs.precoatual : rs.precodesconto}</p>
                  <a href=carrinho.html?idlivro=${rs.idtitulo} class="carrinho">
                  <img src=img/carrinho.png width=40 height=40> Incluir no carrinho </a>
                </div>
              </div>
            </div>
          </div>`;

            conteudo.innerHTML += card;

        })
    })
    .catch((error)=>console.error(`erro na api ${error}`))

}

function buscar(){

    const conteudo = document.querySelector(".conteudo");
    //limpar todo o conteudo
    conteudo.innerHTML = "";
    //obtendo o texto escrito na caixa de busca
    let palavra = document.querySelector("input").value;

    document.querySelector("h2").innerHTML = `Você pesquisou por: ${palavra}`;

    fetch("http://localhost:4003/api/v1/livros/detalhes/titulo/"+palavra)
    .then((res)=>res.json())
    .then((dados)=>{
        dados.payload.map((rs)=>{
            let card = `<div class="card mb-3 col-md-8">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${rs.foto1}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">${rs.nometitulo}</h3>
                  <h5 class="card-title">Autor: ${rs.autor}</h5>
                  <p class="card-text">${rs.sinopse}</p>
                  <p class="card-text precoatual">R$ ${rs.precodesconto < 1 ? rs.precoatual : rs.precodesconto}</p>
                  <a class="btn btn-warning" href="detalhes.html?idlivro=${rs.idtitulo}">Saiba mais</a>
                </div>
              </div>
            </div>
          </div>`;

            conteudo.innerHTML += card;

        })
    })
    .catch((error)=>console.error(`erro na api ${error}`))

}

function CarregarCarrinho(){
  let id_url = window.location.search.split('=');
  const carrinho = document.querySelector(".carrinho");
  fetch("http://localhost:4002/api/v1/carrinho/listar/" + id_url[1])
  .then((res)=>res.json())
  .then((dados)=>{
      dados.payload.map((rs)=>{
        alert(rs.precoatual)
          let card = ` <div class="card col-md-3 livro">
          <img src=${rs.foto1} class="card-img-top">
          <div class="card-body">
          <h3>${rs.nometitulo}</h3>
            <p class="card-text">Autor:${rs.autor}</p>
            <p class="card-text" style="text-decoration:line-through">De R$ ${rs.precoatual}</p>
            <p class="card-text">R$ ${rs.precodesconto<1 ? rs.precoatual : rs.precodesconto}</p>
          </div>
        </div>`;

          carrinho.innerHTML += card;

      })
  })
  .catch((error)=>console.error(`erro na api ${error}`))

}