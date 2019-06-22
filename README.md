# Arduino e XAMPP
  Forma alternativa de enviar dados do arduino para o servidor xampp, método não utiliza mysql connector
> Utilizado: XAMPP, Arduino + Ethernet Shield
  
### Banco de Dados:  
* Inicialize o XAMPP e crie seu banco de dados:  

`
CREATE TABLE arduino(    
  id int not null,    
  inf varchar(30) not null,  
  primary key (id) 
)
`  
> Caso queira usar outros nomes e mais colunas na tabela, deverá alterar os scripts .php  

* Coloque a pasta js e todos os arquivos com extenções .php e .html no local:  

`C:\xampp\htdocs`  

Isso possibilitará acessar os scripts pelo navegador.  
  
* Faça o teste do script. No navagador escreva:   

`http://localhost/arduino.php?inf=teste`  

Estará escrevendo no banco de dados a string "teste".  

### Conectando o Arduino  
  
Primeiramente é necessário desconectar de outras redes e deixar o ip da sua máquina estático ([veja aqui](https://www.tecmundo.com.br/internet/1836-o-que-e-ip-estatico-e-dinamico-.htm)).  

Conecte o cabo de rede na sua máquina e no arduino. Pegue o arquivo do arduino e altere os campos ip e o servidor, lembrando que o campo do servidor irá o ip da sua máquina local.  

### Gráfico no html  
  
Após toda configuração acesse:  
`http://localhost/grafico.php`  
