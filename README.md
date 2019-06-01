# Enviando dados do Arduino para o Servidor XAMPP

> Utilizado: php, arduino, ethernet shield e xampp

### Teste os Scripts php:
1 - Crie seu DB:  

`
CREATE TABLE arduino(    
  id int not null,    
  inf varchar(30) not null,  
  primary key (id) 
)
`  

2 - Copie e cole os arquivos .php dentro da pasta do XAMPP:  

`C:\xampp\htdocs`  

Isso possibilitará acessar os scripts pelo navegador.
  
3 - Faça o teste do script. No navagador escreva:   

`http://localhost/arduino.php?inf=teste`  

Estará passando a string "teste" como parâmetro.

### Utilizando o arduino

Pegue o arquivo arduino e altere os campos ip e o servidor.
No cmd identifique seu ipv4 com o comando `ipconfig`. Esse valor será utilizado no campo do servidor.

### Gráfico no html  

Baixe JQuery e Chart.js coloque-os na pasta:  

`C:\xampp\htdocs\js`  

Após isso coloque o arquivo .html na pasta htdocs
